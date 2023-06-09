import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Favourites from './views/Favourites/Favourites.jsx'
import EntranceHall from './views/EntranceHall/EntranceHall.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';


export default function App() {

   const [characters, setCharacters] = useState([]);

   async function onSearch(id) {

      console.log(characters)

      try {
         const response = await axios(`http://localhost:3002/rickandmorty/character/${id}`)
         const data = response.data

         if(data.name){
            setCharacters((oldChars) => {
               const existChar = oldChars.some((char => char.id === data.id));
               if(!existChar){
                  return [data, ...oldChars];
               } else{
                  alert('El personaje con el id ingresado ya esta agregado')
                  return oldChars
               }
            })
         } else{
            return alert('No existen personajes con ese ID')
         }            

         
      } catch (error) {
         alert('Debe ingresar un id entre 1 y 826')
      }
   }

   function onClose(id){

      setTimeout(() => {
         setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
      }, 500);
      
      let deletedCharacter = document.getElementById(`character${id}`);

      deletedCharacter.classList.remove('card_characters__r0vB5')

      deletedCharacter.classList.add('cardLeaving');
   }

   async function randomHandler() {

      let random = Math.floor(Math.random() * 826 + 1);

      const isAlreadyAdded = characters.some((char) => char.id === random);

      if (isAlreadyAdded) {
         window.alert('Ya has agregado ese personaje');
         return;
      }

      await fetch(`http://localhost:3002/rickandmorty/character/${random}`)
      .then(res => res.json())
      .then((data) => {
         setCharacters((oldChars) => [data, ...oldChars]);
      })
      .catch((error) => {
         window.alert('Error al obtener el personaje');
         console.error(error);
      });
   }

   const location = useLocation()

   if(location.pathname === '/'){
      return (
         <>
            <Routes>
               <Route path='/' element={<EntranceHall/>}/>
            </Routes>
         </>
      )
   }else {
      return (
         <>
            <Nav />
            <Routes>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} addRandom={randomHandler}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/favourites' element={<Favourites onClose={onClose}/>} />
               <Route path='/detail/:id' element={<Detail/>}/>
            </Routes>
         </>
      );
   }
   
}
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Favourites from './views/Favourites/Favourites.jsx'
import Home from './views/Home/Home.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';


export default function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character`).then(({ data }) => {


         const filteredCharacters = [];
         for (const char of data.results){
            const values = Object.values(char);
            let isRendered = false;

            for (const character of characters){
               if(character.id === char.id){
                  isRendered = true;
                  break;
               }               
            }

            if(!isRendered){

               for (let value of values) {
                  if(typeof value === 'string'){
                     if(value.toLowerCase() === id.toLowerCase()){

                        filteredCharacters.unshift(char);
                        break;
                     }
                  } else if (typeof value === 'number'){
                     if(value === parseInt(id)){
                        filteredCharacters.unshift(char);
                        break;
                     }
                  }
               }
            }
         }
         if(filteredCharacters.length === 0){
            window.alert('¡No hay personajes con este ID!');
         } else {
            setCharacters((oldChars) => [...filteredCharacters, ...oldChars]);
         }
      });
   }

   function onClose(id){
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
   }

   function randomHandler() {

      let random = Math.floor(Math.random() * 826 + 1);

      const isAlreadyAdded = characters.some((char) => char.id === random);

      if (isAlreadyAdded) {
         window.alert('Ya has agregado ese personaje');
         return;
      }

      fetch(`https://rickandmortyapi.com/api/character/${random}`)
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
               <Route path='/' element={<Home/>}/>
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
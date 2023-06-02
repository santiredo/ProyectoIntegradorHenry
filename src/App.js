import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';


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

                        filteredCharacters.push(char);
                        break;
                     }
                  } else if (typeof value === 'number'){
                     if(value === parseInt(id)){
                        filteredCharacters.push(char);
                        break;
                     }
                  }
               }
            }
         }
         if(filteredCharacters.length === 0){
            window.alert('¡No hay personajes con este ID!');
         } else {
            setCharacters((oldChars) => [...oldChars, ...filteredCharacters]);
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
         setCharacters((oldChars) => [...oldChars, data]);
      })
      .catch((error) => {
         window.alert('Error al obtener el personaje');
         console.error(error);
      });
   }

   return (
      <>
         <Nav onSearch={onSearch} addRandom={randomHandler}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
      </>
   );
}
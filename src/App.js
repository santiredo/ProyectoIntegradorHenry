import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

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

/*          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         } */
      });
   }

   function onClose(id){
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
   }

   return (
      <>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </>
   );
}
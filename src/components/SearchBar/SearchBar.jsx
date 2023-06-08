import styles from './searchBar.module.css';
import { useState } from 'react';


export default function SearchBar({onSearch, addRandom}) {

   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input value={id} className={styles.input} type='search' placeholder='id...' onChange={handleChange}/>
         <div className={styles.divAdd}>
            <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
            <button className={styles.randomButton} onClick={()=> addRandom()}>Add random</button>
         </div>
         

      </div>
   );
}

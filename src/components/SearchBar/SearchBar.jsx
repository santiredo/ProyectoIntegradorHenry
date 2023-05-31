import styles from './searchBar.module.css';
import { useState } from 'react';


export default function SearchBar({onSearch}) {

   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input value={id} className={styles.input} type='search' placeholder='Id...' onChange={handleChange}/>
         <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

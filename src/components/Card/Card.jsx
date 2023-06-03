import styles from './card.module.css';
import { NavLink } from 'react-router-dom';
import bin from '../../img/basura.png'

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.characters}>
         <img className={styles.bin} src={bin} alt={name} onClick={() => onClose(id)}/>
         <div className={styles.card}>
            
               <div className={styles.cardFront}>
                  <img className={styles.cardImg} src={image} alt={`${name}`} />
               </div>

               <div className={styles.cardBack}>
                     <ul>
                        <li>{status}</li>
                        <li>{species}</li>
                        <li>{gender}</li>
                     </ul>
               </div>
               
         </div>
         <NavLink to={`/detail/${id}`} className={styles.name} >
            <p>{name}</p>
            <div className={styles.plusInfo}>+ Info</div>
         </NavLink>        
      </div>
   );
}

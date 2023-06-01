import styles from './card.module.css';
import { NavLink } from 'react-router-dom';
import bin from '../../img/basura.png'

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.characters}>
         <div className={styles.card}>
            <div className={styles.cardFront}>
               <img className={styles.cardImg} src={image} alt={`${name}`} />
            </div>

            <div className={styles.cardBack}>
                  <ul>
                     <li>Status: {status}</li>
                     <li>Specie: {species}</li>
                     <li>Gender: {gender}</li>
                     <li>{origin}</li>
                  </ul>
            </div>
         </div>
         <div className={styles.nameAndBin}>
         <NavLink className={styles.linkName} to={`/detail/${id}`}>{name}</NavLink>
         <img src={bin} alt={name} onClick={() => onClose(id)}/>
         </div>
         
      </div>
   );
}

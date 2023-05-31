import styles from './card.module.css'


export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={styles.divCard}>
            <button className={styles.onCloseButton} onClick={()=>onClose(id)}> X </button>
            <img className={styles.cardImg} src={image} alt="" />
            <p className={styles.charName}>{name}</p>
            <ul className={styles.cardUl}>
               <li>Status: {status}</li>
               <li>Specie: {species}</li>
               <li>Gender: {gender}</li>
               <li>{origin}</li>
            </ul>

      </div>
   );
}

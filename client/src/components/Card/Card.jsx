import { NavLink, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isNotFav from '../../img/isNotFav.png';
import fav from '../../img/fav.png';
import bin from '../../img/basura.png';
import './card.css'
import styles from './card.module.css';



export default function Card({char, id, name, status, species, gender, image, onClose}) {

   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch()

   const myFavs = useSelector(state => state.myFavs)

   const handleFav = (data) => {
      
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(data))
      }else{
         setIsFav(true);
         dispatch(addFav(data))
      }
   }

   useEffect(() => {
      myFavs.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [myFavs]);

   const location = useLocation()

   return (
      <div id={`character${id}`} className={styles.characters}>
         <div className={styles.divFav}>
            {
               isFav ? (
                  <img onClick={()=> handleFav(id)} src={fav} className={styles.fav} alt="" />
               ) : (
                  <img onClick={()=> handleFav(char)} src={isNotFav} className={styles.isNotFav} alt="" />
               )
            }

            {location.pathname === '/home' && (
               <img className={styles.bin} src={bin} alt={name} onClick={() => onClose(id)}/>
            )}
         </div>
         
         <div className={styles.card}>
            
               <div className={styles.cardFront}>
                  <img className={styles.cardImg} src={image} alt={`${name}`} />
               </div>

               <div className={styles.cardBack}>
                     <ul>
                        <li>{status}</li>
                        <li>{species}</li>
                        <li>{gender}</li>
                        <NavLink to={`/detail/${id}`}>+ Info</NavLink>
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

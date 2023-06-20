import {connect} from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import { useState, useEffect } from 'react';
import isNotFav from '../../img/isNotFav.png';
import fav from '../../img/fav.png';
import bin from '../../img/basura.png';
import './card.css'
import styles from './card.module.css';



function Card({char, id, name, status, species, gender, image, onClose, addFav, removeFav, myFavs}) {

   const [isFav, setIsFav] = useState(false);


   const handleFav = (data) => {
      
      if(isFav){
         setIsFav(false);
         removeFav(data)
      }else{
         setIsFav(true);
         addFav(data)
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

const mapStateToProps = (state) => {
   return {
      myFavs: state.myFavs
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char) => {
         dispatch(addFav(char))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
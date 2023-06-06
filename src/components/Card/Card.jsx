import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import { useState, useEffect } from 'react';
import styles from './card.module.css';
import isNotFav from '../../img/isNotFav.png';
import fav from '../../img/fav.png';
import bin from '../../img/basura.png';



function Card({id, name, status, species, gender, image, onClose, addFav, removeFav, myFavs}) {

   const [isFav, setIsFav] = useState(false);


   const handleFav = () => {
      
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true);
         addFav({id, name, status, species, gender, image, onClose, isFav})
      }
   }

   useEffect(() => {
      myFavs.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavs]);

   return (
      <div className={styles.characters}>
         <div className={styles.divFav}>
            {
               isFav ? (
                  <img onClick={handleFav} src={fav} className={styles.fav} alt="" />
               ) : (
                  <img onClick={handleFav} src={isNotFav} className={styles.isNotFav} alt="" />
               )
            }
            <img className={styles.bin} src={bin} alt={name} onClick={() => onClose(id)}/>
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
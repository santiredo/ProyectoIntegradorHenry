import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import styles from './cards.module.css';


export default function Cards({ characters, onClose, onSearch, addRandom }) {

   return (
      <section className={styles.homePage}>
         <SearchBar onSearch={onSearch} addRandom={addRandom}/>
         <div className={styles.cardsDiv}>
            
            {   
               characters.map(char => {
                  return (
                     <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                        onClose={onClose}
                     />
                  )
               })
            }
         </div>
      </section>
   );
}

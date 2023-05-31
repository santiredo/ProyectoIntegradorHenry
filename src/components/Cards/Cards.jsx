import Card from '../Card/Card';
import styles from './cards.module.css'

export default function Cards({ characters, onClose }) {

   return (
      <section className={styles.cardsSection}>
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
      </section>
   );
}

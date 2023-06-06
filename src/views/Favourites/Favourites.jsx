import { connect } from "react-redux";
import Card from "../../components/Card/Card";

function Favourites({myFavs}){
    return (
        <div>
        {
            myFavs?.map((fav) => {
                return(
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                )
            })
        }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        myFavs: state.myFavs,
    }
}

export default connect(mapStateToProps, null)(Favourites)
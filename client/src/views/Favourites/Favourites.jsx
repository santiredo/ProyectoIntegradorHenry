import { filterCards, orderCards } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useState } from "react";
import dropdown from '../../img/dropdown.png'
import './favourites.css'

export default function Favourites(){

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();
    const myFavs = useSelector((state) => state.myFavs);
 
    const handleOrder = (event) => {
        if(aux) setAux(false)
        else setAux(true)
        dispatch(orderCards(event.target.getAttribute('value')))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.getAttribute('value')))
    }

    // SELECT:

    const handleSelectOrder = (event) => {
        const orderOptions = document.querySelector("#orderOptions")
        orderOptions.classList.toggle('optionsActive');

        event.currentTarget.classList.toggle('selectIdActiveActive')
    }

    const handleSelectGender = (event) => {
        const genderOptions = document.querySelector('#genderOptions');
        genderOptions.classList.toggle('optionsActive');

        event.currentTarget.classList.toggle('selectGenderActive');
    }

    return (
        <div className='myFavsPage'>
            <div className='favFilters'>
                <div className='selectBox'>
                    <div onClick={handleSelectOrder} className='selectId' id="orderSelect">
                        <div className='selectedContent'>
                            <p className='title'>FILTRAR POR ID</p>
                        </div>
                        <img src={dropdown} alt="" />
                    </div>
                    <div className='options' id="orderOptions">
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleOrder} value="A">ASCENDENTE</p>
                            </div>
                        </div>
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleOrder} value="D">DESCENDENTE</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='selectBox'>
                    <div onClick={handleSelectGender} className='selectGender' id="genderSelect">
                        <div className='selectedContent'>
                            <p className='title'>FILTRAR POR GENERO</p>
                        </div>
                        <img src={dropdown} alt="" />
                    </div>
                    <div className='options' id="genderOptions">
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleFilter} value="ShowAll">SHOW ALL</p>
                            </div>
                        </div>
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleFilter} value="Male">MALE</p>
                            </div>
                        </div>
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleFilter} value="Female">FEMALE</p>
                            </div>
                        </div>
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleFilter} value="Genderless">GENDERLESS</p>
                            </div>
                        </div>
                        <div className="option">
                            <div className='containerOption'>
                                <p onClick={handleFilter} value="unknown">UNKNOWN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='favContainer'>
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
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


/* const mapStateToProps = (state) => {
    return {
        myFavs: state.myFavs,
    }
}

export default connect(mapStateToProps, null)(Favourites) */
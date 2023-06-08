import { filterCards, orderCards } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useState } from "react";
import dropdown from '../../img/dropdown.png'
import style from './favourites.module.css'

export default function Favourites(){

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();
    const myFavs = useSelector((state) => state.myFavs);
 
    const handleOrder = (event) => {
        if(aux) setAux(false)
        else setAux(true)
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive)
    }

    return (
        <div className={style.myFavsPage}>
            <div className={style.favFilters}>

                <div className={style.selectBox}>
                    <div className={`${style.selectId} ${isActive ? style.active : ''}`} onClick={handleClick}>
                        <div className={style.selectedContent}>
                            <p className={style.title}>FILTRAR POR ID</p>
                        </div>
                        <img src={dropdown} alt="" />
                    </div> 




                    {/* options */}
                </div>

                

                <div>
                    <div className={`${style.selectGender} ${isActive ? style.active : ''}`} onClick={handleClick}>
                        <div className={style.selectedContent}>
                            <p className={style.title}>FILTRAR POR GENERO</p>
                        </div>
                        <img src={dropdown} alt="" />
                    </div> 




                    {/* options */}
                </div>



                {/* <select onChange={handleOrder} className={style.select} name="" id="">
                    <option disabled selected hidden value="">FILTRAR POR ID</option>
                    <option value="A">ASCENDENTE</option>
                    <option value="D">DESCENDENTE</option>
                </select>
                <select className={style.select} onChange={handleFilter} name="" id="">
                    <option disabled selected hidden value="">FILTRAR POR GENERO</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    <option value="Genderless">GENDERLESS</option>
                    <option value="unknown">UNKNOWN</option>
                </select> */}
            </div>
            <div className={style.favContainer}>
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
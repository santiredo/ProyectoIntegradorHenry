import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import style from './detail.module.css'

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3002/rickandmorty/character/${id}`)
        .then(({data}) => {
            if(data.name){
                console.log(data)
                setCharacter(data);
            } else{
                window.alert('No hay personajes con ese ID')
            }
        });

        return () =>{
            setCharacter({});
        };
    },[id])

    return (
        <div className={style.detailContainer}>
            <div className={style.imageContainer}>
                <div className={style.boxImage}>
                    <img className={style.detaileImg} src={character.image} alt="" />
                </div>    
            </div>
            <div className={style.detailsContainer}>
                <h3>{character.name}'s personal page</h3>
                <span>Status: <p>{character.status}</p></span>
                <span>Specie: <p>{character.species}</p></span>
                <span>Gender: <p>{character.gender}</p></span>
                <span>Origin: <p>{character.origin?.name}</p></span>            
            </div>

            
        </div>
    )
}
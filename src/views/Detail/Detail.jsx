import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
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
        <div>
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="" />
        </div>
    )
}
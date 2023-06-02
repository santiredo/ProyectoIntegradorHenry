import React from "react";
import feliz from '../../img/feliz.png';
import myPhoto from '../../img/perfil.jpg'
import style from './about.module.css';


export default function About(){
    return (
        <div className={style.pageDiv}>
            <h1>About Me <img src={feliz} alt='Emoji'/></h1>
            <div className={style.aboutMeDiv}>
                <img className={style.myPhoto} src={myPhoto} alt="" srcset="" />
                <div className={style.initialText}>
                    <p>Me encanta estudiar, mas alla de estar aprendiendo cosas nuevas (que esta buenisimo porque tengo mas herramientas).Me gusta mucho sentarme a aprender, estudiar, escribir, practicar, buscar como hacer ciertas cosas, diseños, algoritmos, etc... Siento que el tiempo vuela. Me encanta pensar en nuevos proyectos y ponerme a hacerlos. Siento motivacion cuando imagino estilos en mi cabeza, ciertos renderizados, animaciones... Cada vez le encuentro mas gusto y placer a resolver problemas, me divierte la idea de pensarlos como acertijos, incluso juegos.</p>
                </div>
            </div>
            <div className={style.cardsDiv}>
                <div className={style.infoCards}></div>
                <div className={style.infoCards}></div>
                <div className={style.infoCards}></div>
                <div className={style.infoCards}></div>
            </div>
        </div>
    )
}
import React from "react";
import myPhoto from '../../img/perfil.jpg'
import style from './about.module.css';


export default function About(){
    return (
        <div className={style.pageDiv}>
            <h1>About Me</h1>
            <div className={style.aboutMeDiv}>

                <div className={style.perfil}>
                    {<img className={style.myPhoto} src={myPhoto} alt="" srcset="" />}
                    <div className={style.perfilBack}> 
                        <p>Bariloche </p>
                        <p>Santi Redondo </p>
                        <p>21 años</p>
                    </div>
                </div>
                <div className={style.initialText}>
                    <p>Me encanta estudiar, mas alla de estar aprendiendo cosas nuevas (que esta buenisimo porque tengo mas herramientas).Me gusta mucho sentarme a aprender, estudiar, escribir, practicar, buscar como hacer ciertas cosas, diseños, algoritmos, etc... Siento que el tiempo vuela. Me encanta pensar en nuevos proyectos y ponerme a hacerlos. Siento motivacion cuando imagino estilos en mi cabeza, ciertos renderizados, animaciones... Cada vez le encuentro mas gusto y placer a resolver problemas, me divierte la idea de pensarlos como acertijos, incluso juegos.</p>
                </div>
            </div>
            <div className={style.cardsDiv}>
                <div className={style.infoCards}>
                    <div className={style.FrontCards}></div>
                    <div className={style.BackCards}></div>
                </div>
                <div className={style.infoCards}>
                    <div className={style.FrontCards}></div>
                    <div className={style.BackCards}></div>
                </div>
                <div className={style.infoCards}>
                    <div className={style.FrontCards}></div>
                    <div className={style.BackCards}></div>
                </div>
                <div className={style.infoCards}>
                    <div className={style.FrontCards}></div>
                    <div className={style.BackCards}></div>
                </div>
            </div>
        </div>
    )
}
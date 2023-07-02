import React from "react";
import myPhoto from '../../img/perfil.jpg';
import linkedIn from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import github from '../../img/github.png';
import style from './about.module.css';


export default function About(){
    return (
        <>
            <h1 className={style.title}>About Me</h1>
            <div className={style.pageDiv}>
                <div className={style.aboutMeDiv}>
                    <div className={style.perfil}>
                        {<img className={style.myPhoto} src={myPhoto} alt=""/>}
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
                        <div className={style.frontCards}>HOBBIES</div>
                        <div className={style.backCards}>
                            <p>Me gusta mucho el deporte, mas que nada el futbol, me encanta pisar la cancha con los botines puestos, empezar a correr y tocar la pelota. Disfruto mucho leer, mas que nada cuando se trata de temas profundos, tabues, o de crecimiento. Me divierte cocinar, solo o con amigos. Tambien disfruto mucho mi tiempo a solas, me gusta filosofar, pensar... incluso escribir mis pensamientos.</p>
                            
                        </div>
                    </div>
                    <div className={style.infoCards}>
                        <div className={style.frontCards}>INTERESES</div>
                        <div className={style.backCards}>
                            <p>Hoy por hoy (junio 2023) me estoy enfocando prioritariamente en el area profesional, dedico mucho tiempo en estudiar, aveces es un poco frustrante o agotador, pero me encanta y lo disfruto mucho. Me gusta dedicarle a mi crecimiento personal y, compartirlo con las personas que amo es una de las cosas que mas me motivan. Tambien me interesa mucho mi salud, me gusta cuidarme, amarme e invertir conscientmente mi tiempo. </p>
                        </div>
                    </div>
                    <div className={style.infoCards}>
                        <div className={style.frontCards}>REDES</div>
                        <div className={style.backCards}>
                            <img src={linkedIn} alt="" />
                            <img src={instagram} alt="" />
                            <img src={github} alt="" />
                        </div>
                    </div>
                    <div className={style.infoCardsPlus}>
                        <div className={style.frontCardsPlus}>TE COMPARTO ALGO MIO? <br/>(UN POCO MAS PROFUNDO)</div>
                        <div className={style.backCardsPlus}>
                            <p>How impressive is to think that we are able to create our own reality (inside my head) of what we are. We can do what we want no matter what people say and for some reason that is healthy (?). “To have mental health we must trust ourselves and don’t give a shit about people’s opinion”. (I’ve heard and thought of that phrase so much that now I don’t know if I’m that guy or if it’s another cliché that I owned to have a purpose).</p>
                            <p>At the same time, I think that every human being is doing good (instead of evil), and that ‘good’ is determined of our conscience or ignorance level. “Do good inwards, so it will be easier to do good outwards”, but, what is to do good outwards? How can I do good to any other being if I don’t understand them as they understand them selves? (outwards or any other being could be a person, or animal, or any part of the nature surrounds us, or a specific group of people too, etc…).</p>
                            <p>I also think that love (sometimes) is to pay attention. How would the outside (or anything that’s not me) like to be loved? So… if I really want to be better and grow as a human being (talking about love… in fact, talking about everything), I do need to listen to others, and it does matter what people think.</p>
                            <p>Imagine that we must find a specific balance in our life (actually, there is no imagination, “we must get that balance”, society tell us that and we grow believing that. Well… that’s what I think). Who dictates that balance? How can I measure the relationship between other’s opinion and my own reality? How can I know if I really am “in balance” or if that balance was broken a long time ago?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
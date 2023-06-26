import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import optionsImg from '../../img/options.png';
import linkedIn from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import github from '../../img/github.png';
import door from '../../img/puerta.png';
import './nav.css'
import styles from "./nav.module.css";
import { useDispatch } from "react-redux";
import { setAccess } from "../../redux/action";
import BurgerButton from "../BurgerButton/BurgerButton";

export default function Nav(){

    const [options, setOptions] = useState(false);

    const [views, setViews] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleViews = () => {
        let navDiv = document.querySelector('#navDiv');

        if(!views) {
            setViews(true)            

            navDiv.classList.remove('nav_navDiv__oTgwC')
            navDiv.classList.add('navDivMobile')
            
            console.log(navDiv)

        } else{
            setTimeout(() => {
                setViews(false)
            }, 800);
            
            console.log(views)

            navDiv.classList.remove('navDivMobile')
            navDiv.classList.add('nav_navDiv__oTgwC')
            console.log(navDiv)

        }

    }

    const handleOptions = () => {
        let optionsDiv = document.querySelector('#optionsDiv')

        console.log(optionsDiv)

        if(options) {
            setTimeout(() => {
                setOptions(false)
            }, 800);
            optionsDiv.classList.remove('nav_showOptions__4Ycrn')
            optionsDiv.classList.add('hideOptions')
        } else {
            setOptions(true)
        }
    }

    const handleLogOut = () => {
        dispatch(setAccess(false))
        navigate('/')
        
    }

    return (
            <nav className={styles.navBar}>
                <h1 className={styles.title}>Rick & Morty Project</h1>
                <h1 className={styles.mobileTitle}> R & M Project</h1>
                <div className={styles.viewsContainer}>
                    <div className={styles.burgerButton}>
                        <BurgerButton handleViews={handleViews} />
                    </div>
                    <div id="navDiv" className={styles.navDiv}>
                        <NavLink to='/home' className={styles.navLink}>
                            Home
                        </NavLink>
                        <NavLink to='/about' className={styles.navLink}>
                            About me
                        </NavLink>
                        <NavLink to='/favourites' className={styles.navLink}>
                            Favs
                        </NavLink>
                    </div>
                </div>
                <div className={styles.optionsDiv}>
                        <img className={styles.optionsImg} src={optionsImg} onClick={handleOptions} alt="" />

                    {
                        options && (
                            <div id="optionsDiv" className={styles.showOptions}>
                                <div><img src={linkedIn} alt="" /><a>LinkedIn</a></div>
                                <div><img src={instagram} alt="" /><a>Intagram</a></div>
                                <div><img src={github} alt="" /><a>Github</a></div>
                                <div><img src={door} alt="" /><a onClick={handleLogOut}>Log out</a></div>
                            </div>
                        )
                    }
                </div>
            </nav>
    )
}
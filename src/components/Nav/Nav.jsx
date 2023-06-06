import React from "react";
import { NavLink } from "react-router-dom";
import options from '../../img/options.png'
import optionsActive from '../../img/opitionsActive.png'
import styles from "./nav.module.css";

export default function Nav(){
    return (
            <nav className={styles.navBar}>
                <h1 className={styles.title}>Rick & Morty Project</h1>
                <div className={styles.navDiv}>
                    <NavLink to='/about' className={styles.navLink}>
                        About me
                    </NavLink>
                    <NavLink to='/home' className={styles.navLink}>
                        Home
                    </NavLink>
                </div>
                <div className={styles.optionsDiv}>
                    <img className={styles.options} src={options} alt="" />
                    <img className={styles.optionsActive} src={optionsActive} alt="" />
                </div>

            </nav>
    )
}
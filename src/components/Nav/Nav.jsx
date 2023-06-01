import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({onSearch, addRandom}){
    return (
        <div className={styles.divNav}>
            <nav className={styles.navBar}>
                <h1 className={styles.title}>Rick & Morty Project</h1>
                <div className={styles.navDiv}>
                    <NavLink to='/about' className={styles.navLink}>
                        About
                    </NavLink>
                    <NavLink to='/home' className={styles.navLink}>
                        Home
                    </NavLink>
                </div>
                <SearchBar onSearch={onSearch} addRandom={addRandom}/>
            </nav>
        </div>
    )
}
import SearchBar from "../SearchBar/SearchBar";
import styles from "./nav.module.css";

export default function Nav({onSearch}){
    return (
        <div className={styles.divNav}>
            <nav className={styles.navBar}>
                <h1 className={styles.title}>Rick & Morty Project</h1>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}
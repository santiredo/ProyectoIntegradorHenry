
import bienvenido from '../../img/bienvenido.jpg'
import LogIn from '../../components/LogIn/LogIn';
import style from './home.module.css';

export default function Home () {


    return (
        <>
            <img className={style.background} src={bienvenido} alt="" />
            <div className={style.loginContainer}>
                <div className={style.loginPage}>
                    <div className={style.formsContainer}>
                        <h1>DO YOU HAVE AN ACCOUNT?</h1>
                        <div className={style.onlyForms}>
                            <LogIn />                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
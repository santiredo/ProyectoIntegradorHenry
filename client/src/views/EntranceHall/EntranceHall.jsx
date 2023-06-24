
import background from '../../img/backgroundEdited.jpg'
import LogIn from '../../components/LogIn/LogIn';
import style from './entranceHall.module.css';



export default function EntranceHall () {
    return (
        <div className={style.entrancePage}>
            <img src={background} alt="" className={style.background} />
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
        </div>
    )
}

/* export default function EntranceHall () {
    return (
        <>
            <img className={style.background} src={background} alt="" />
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
} */
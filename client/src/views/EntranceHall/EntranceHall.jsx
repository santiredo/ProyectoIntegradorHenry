
import background from '../../img/backgroundEdited.jpg';
import Register from '../../components/Register/Register'
import LogIn from '../../components/LogIn/LogIn';
import style from './entranceHall.module.css';



export default function EntranceHall () {
    return (
        <div className={style.entrancePage}>
            <img src={background} alt="" className={style.background} />
            <h1 className={style.h1}>Welcome !!!</h1>
            <div className={style.onlyForms}>
                <Register/>
                <hr className={style.lineaDivisora} />                
                <LogIn/>
            </div>
        </div>
    )
}

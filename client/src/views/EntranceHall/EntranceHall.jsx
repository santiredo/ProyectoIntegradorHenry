
import background from '../../img/backgroundEdited.jpg'
import LogIn from '../../components/LogIn/LogIn';
import style from './entranceHall.module.css';



export default function EntranceHall () {
    return (
        <div className={style.entrancePage}>
            <img src={background} alt="" className={style.background} />
            <h1 className={style.h1}>Welcome !!!</h1>
            <div className={style.onlyForms}>
                <LogIn />
            </div>
        </div>
    )
}

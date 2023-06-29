import React, { useState } from "react";
import {validateRegister} from '../Validation/Validation.js';
import style from './register.module.css';



export default function Register(){

    const [registerData, setRegisterData] = useState({
        registerEmail: '',
        registerPassword: '',
    })

    const [registerErrors, setErrors] = useState({});

    const handleChange = (event) =>{
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validateRegister(registerData)
        )
    }


    return (
        <>
            
            <form className={style.loginForm}>
                <h4 className={style.h4}>Register</h4>
                <div className={style.input}>
                    <label>Username</label>
                    <input
                        id="registerEmail"
                        type="text"
                        name="registerEmail"
                        value={registerData.registerEmail}
                        onChange={handleChange}
                        placeholder="user@name.com"
                    />
                    {registerErrors?.registerEmail && <p>{registerErrors.registerEmail}</p>}
                    {!registerErrors?.registerEmailLength ? <span className={style.okSpan}>'Must be less than 35 words.'</span> : <span className={style.errorSpanSpan}>'Must be less than 35 words.'</span>}
                </div>
                <div className={style.input}>
                    <label>Password</label>
                    <input
                        id="registerPassword"
                        type="password"
                        name="registerPassword"
                        value={registerData.registerPassword}
                        onChange={handleChange}
                        placeholder="..."
                    />
                    {registerErrors?.registerPassword && <span  className={style.errorSpan}>{registerErrors.registerPassword}</span>}
                    {registerErrors?.registerPasswordLength && <p>{registerErrors.registerPasswordLength}</p>}
                </div>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}
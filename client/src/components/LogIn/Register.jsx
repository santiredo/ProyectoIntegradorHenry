import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/action.js";
import {validateRegister} from '../Validation/Validation.js';

import style from './logIn.module.css'

export default function Register () {

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        registerEmail:'',
        registerEmailLength:'',
        registerPassword:'',
        registerPasswordLength:''
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        

        setErrors(
            validateRegister()
        )
    }

    const handleRegister = (event) => {
        event.preventDefault();

        const validateErrors = validateRegister();

        if(Object.keys(validateErrors).length === 0){
            dispatch(registerUser(userData));
            alert('Usuario registrado con exito')

            setUserData({
                email: '',
                password: ''
            });            
        }
    }
    return (
        <>
            <form className={style.registerForm} onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className={style.input}>
                    
                        <label>Username</label>
                        <input
                            id="registerEmail"
                            type="text"
                            name="email"
                            placeholder="user@name.com"
                            onChange={handleChange}
                        />
                        {errors.registerEmail && <span>{errors.registerEmail}</span>}
                        {errors.registerEmailLength && <span>{errors.registerEmailLength}</span>}
                    </div>
                    <div className={style.input}>
                        <label>Password</label>
                        <input
                            id="registerPassword"
                            type="password"
                            name="password"
                            placeholder="..."
                            onChange={handleChange}
                        />
                        {errors.registerPassword && <span>{errors.registerPassword}</span>}
                        {!errors.registerPassword && errors.registerPasswordLength && <span>{errors.registerPasswordLength}</span> }
                    </div>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}
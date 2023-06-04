import React from "react";
import { useState } from "react";
import validate from '../../components/Validation/Validation.js';
import bienvenido from '../../img/bienvenido.jpg'
import style from './form.module.css';
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers.js";

export default function LogInForm( {login} ){

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        validate({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return (
        <>
            <img className={style.background} src={bienvenido} alt="" />
            <div className={style.loginContainer}>
                <div className={style.loginPage}>
                    <form className={style.loginForm}>
                        <h1>Log In</h1>
                        <div className={style.input}>
                            <label>Username</label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder="user@name.com"
                            />
                        </div>
                        <div className={style.input}>
                            <label>Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                placeholder="..."
                            />
                        </div>
                        <button type='submit' onClick={handleSubmit}>Log in</button>
                    </form>
                    <form className={style.registerForm}>
                        <h1>Register</h1>
                        <div className={style.input}>
                            
                                <label>Username</label>
                                <input
                                    id="registerEmail"
                                    type="text"
                                    name="RegisterEmail"
                                    placeholder="user@name.com"
                                />
                            </div>
                            <div className={style.input}>
                                <label>Password</label>
                                <input
                                    id="registerPassword"
                                    type="password"
                                    name="registerPassword"
                                    placeholder="..."
                                />
                            </div>
                        <button type='submit'>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}
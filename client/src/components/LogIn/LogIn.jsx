import React from "react";
import { useState, useEffect } from "react";
import {validateLogIn} from '../Validation/Validation.js';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from './logIn.module.css';



export default function LogIn(){

    const navigate = useNavigate();

    const [access, setAccess] = useState(false);

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState();

    const registeredUsers = useSelector(state => state.registeredUsers)

    useEffect(() => {
        !access && navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [access]);

    const handleChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });

        setErrors(
            validateLogIn()
        )
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const validateErrors = validateLogIn()

        if(Object.keys(validateErrors).length === 0) {
            const userExist = registeredUsers.find(user => user.email === userData.email && user.password === userData.password)

            if(userExist) {
                setAccess(true);
                navigate('/home')
            } else{
                alert('Los datos ingresados no coinciden con ningun usuario registrado')
            }

        }
    }

    return (
        <>
            <form className={style.loginForm} onSubmit={handleLogin}>
                <h2>Log In</h2>
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
                    {errors?.email && <span>{errors.email}</span>}
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
                    {errors?.password && <span>{errors.password}</span>}
                </div>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}
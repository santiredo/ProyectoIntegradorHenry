import React, { useState, useEffect }from "react";
import {validateLogIn} from '../Validation/Validation.js';
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import { setAccess } from "../../redux/action.js";
import { useDispatch, useSelector } from "react-redux";
import style from './logIn.module.css';



export default function LogIn(){

    const navigate = useNavigate();

    const access = useSelector(state => state.access)

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});


    useEffect(() => {
        !access && navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [access]);

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validateLogIn(userData)
        )
    }


    const handleLogin = async (event) => {

        event.preventDefault()

        const url = 'http://localhost:3002/rickandmorty/login';

        try {
            const result = await axios.post(url + `?email=${userData.email}&password=${userData.password}`)
            const {access} = result.data

            dispatch(setAccess(access))

            access && navigate('/home')
            

        } catch (error) {
            alert('Datos incorrectos')
        }
    }


    return (
        <>
            <form className={style.loginForm} onSubmit={handleLogin}>
            <h4 className={style.h4}>Log In</h4>
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
                    {errors?.email && <p>{errors.email}</p>}
                    {!errors?.emailLength ? <span className={style.okSpan}>'Must be less than 35 words.'</span> : <span className={style.errorSpanSpan}>'Must be less than 35 words.'</span>}
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
                    {errors?.password && <span  className={style.errorSpan}>{errors.password}</span>}
                    {errors?.passwordLength && <p>{errors.passwordLength}</p>}
                </div>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}
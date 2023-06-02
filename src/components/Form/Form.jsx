import React from "react";
import style from './form.module.css'

function LogInForm(){

    return (
        <>
        <form className={style.form}> 

            <label>Ingrese su mail</label>
            <input type="text" name="email" />

            <label>Ingrese su contraseña</label>
            <input type="password" name="password" />

            <button type='submit'>Log in</button>

        </form>
        </>
    )
}

export const validateRegister = (input) => {

    let errors = {}
    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validatePassword = /\d/;

    let registerEmail = document.getElementById('registerEmail').value;
    let registerPassword = document.getElementById('registerPassword').value;

    if(!validateEmail.test(registerEmail)){
        errors.registerEmail = 'Username must be an email';
    }
    if(registerEmail.length > 35){
        errors.registerEmailLength = 'Username must be less than 35 words';
    }
    if(!validatePassword.test(registerPassword)){
        errors.registerPassword = 'Password must have a number';
    }
    if(registerPassword.length < 6 || registerPassword.length > 10){
        errors.registerPasswordLength = 'Password must have between 6 and 10 characters';
    }

    return errors;
}



export const validateLogIn = () => {

    let errors = {}
    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validatePassword = /\d/;

    let logInEmail = document.getElementById('email').value;
    let logInPassword = document.getElementById('password').value;

    if(!validateEmail.test(logInEmail)){
        errors.email = 'Username must be an email';
    }
    if(logInEmail.length > 35){
        errors.emailLength = 'Username must be less than 35 words';
    }
    if(!validatePassword.test(logInPassword)){
        errors.password = 'Password must have a number';
    }
    if(logInPassword.length < 6 || logInPassword.length > 10){
        errors.passwordLength = 'Password must have between 6 and 10 characters';
    }

    return errors;
}
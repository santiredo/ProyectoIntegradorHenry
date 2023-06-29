

export const validateLogIn = ({email, password}) => {

    let errors = {}
    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validatePassword = /\d/;

    if(!validateEmail.test(email)){
        errors.email = 'Username must be an email.';
    }
    if(email.length > 35){
        errors.emailLength = true;
    }
    if(!validatePassword.test(password)){
        errors.password = 'Password must have a number.';
    }
    if(password.length < 6 || password.length > 10){
        errors.passwordLength = 'Between 6 and 10 characters.';
    }

    return errors;
}

export const validateRegister = ({registerEmail, registerPassword}) => {

    let registerErrors = {};
    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let validatePassword = /\d/;

    if(!validateEmail.test(registerEmail)){
        registerErrors.registerEmail = 'Username must be an email.';
    }
    if(registerEmail.length > 35){
        registerErrors.registerEmailLength = true;
    }
    if(!validatePassword.test(registerPassword)){
        registerErrors.registerPassword = 'Password must have a number.';
    }
    if(registerPassword.length < 6 || registerPassword.length > 10){
        registerErrors.registerPasswordLength = 'Between 6 and 10 characters.';
    }

    return registerErrors

}
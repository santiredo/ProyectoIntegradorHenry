

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

export default function validation(input){

    let errors = {}

    let emailValue = document.getElementById('email').value;

    let validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    let passwordValue = document.getElementById('password').value;

    let validatePassword = /\d/;

    if(!validateEmail.test(emailValue)){
        errors.email = 'Username must be an email';
    }

    if(emailValue.length > 35){
        errors.emailLength = 'Username must be less than 35 words'
    }

    if(!validatePassword.test(passwordValue) || (passwordValue.length > 5 && passwordValue.length < 11)){
        errors.password = 'Password must have a number'
    }

    if(passwordValue.length < 6 || passwordValue.length > 10){
        errors.passwordLength = 'Password must have between 6 and 10 characters'
    }

    return errors;
}


'use strict';

//red Email
const titleEmail = document.querySelector('.form__input-item-email'),
    starEmail = document.querySelector('.star-first'),
    emailInput = document.querySelector('.form__input-email');

const fieldEmail = document.querySelector('.field-email');


//red Password
const titlePassword = document.querySelector('.form__input-item-password'),
    starPassword = document.querySelector('.star-second'),
    passwordInput = document.querySelector('.form__input-password');

const fieldPassword = document.querySelector('.field-password');

//red Checkbox
const checkboxMark = document.querySelector('.form__checkbox-mark'),
    starCheckbox = document.querySelector('.star-third'),
    fieldCheckbox = document.querySelector('.field-checkbox'),
    inputCheckbox = document.querySelector('.form__input-checkbox');



const buttonReg = document.querySelector('.form__button');

const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;


const redEmail = () => {
    titleEmail.style.color = 'red';
    starEmail.style.color = 'red';
    emailInput.style.border = '2px solid red';
    fieldEmail.style.visibility = 'visible';
}

const grayEmail = () => {
    titleEmail.style.color = '#787878';
    starEmail.style.color = '#787878';
    emailInput.style.border = '2px solid #787878';
    fieldEmail.style.visibility = 'hidden';
}

const redPassword = () => {
    titlePassword.style.color = 'red';
    starPassword.style.color = 'red';
    passwordInput.style.border = '2px solid red';
    fieldPassword.style.visibility = 'visible';
}

const grayPassword = () => {
    titlePassword.style.color = '#787878';
    starPassword.style.color = '#787878';
    passwordInput.style.border = '2px solid #787878';
    fieldPassword.style.visibility = 'hidden';
}

const redCheckbox = () => {
    starCheckbox.style.color = 'red';
    checkboxMark.style.border = '2px solid red';
    fieldCheckbox.style.visibility = 'visible';
}

const grayCheckbox = () => {
    starCheckbox.style.color = '#787878';
    checkboxMark.style.border = '2px solid #787878';
    fieldCheckbox.style.visibility = 'hidden';
}



buttonReg.addEventListener('click', (event) => {
    event.preventDefault();

        if (emailInput.value === '') {
          return  redEmail();
            } else if (!regMail.test(emailInput.value)) {
                fieldEmail.textContent = 'Email невалидный';
               redEmail();
                } else {
                    grayEmail ()
                    console.log('Email: ' + emailInput.value)
        }
});

buttonReg.addEventListener('click', (event) => {
    event.preventDefault();
        if (passwordInput.value === '') {
            return  redPassword();
                } else if (passwordInput.value.length < 8) {
                    fieldPassword.textContent = 'Пароль должен содержать как минимум 8 символов';
                    redPassword();
                        } else {
            grayPassword()
            console.log('Password: ' + passwordInput.value)
        }
});

buttonReg.addEventListener('click', (event) => {
    event.preventDefault();
        if (!inputCheckbox.checked) {
            return  redCheckbox();
                } else grayCheckbox();
});

//удаление checkboxListener
// buttonReg.addEventListener('click', checkboxValidator);
//
// function checkboxValidator(event) {
//     event.preventDefault();
//     if (!inputCheckbox.checked) {
//         return  redCheckbox();
//     } else grayCheckbox();
// }
//
// buttonReg.removeEventListener(checkboxValidator());


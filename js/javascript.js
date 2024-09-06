// login variables

let loginPassword = document.querySelector('#exampleInputPassword1')
let passwordHelp = document.querySelector('#passwordHelp')
let passwordHelpSpan = document.querySelector('#passwordHelpSpan')


// registery variables

let firstNameLabel = document.querySelector('.firstNameLabel')
let firstNameInput = document.querySelector('.firstNameInput')
let lastNameLabel = document.querySelector('.lastNameLabel')
let lastNameInput = document.querySelector('.lastNameInput')
let emailLabel = document.querySelector('.emailLabel')
let emailInput = document.querySelector('.emailInput')
var emailValidate = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let numberLabel = document.querySelector('.numberLabel')
let numberInput = document.querySelector('.numberInput')
var numberValidate = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/
let passwordLabel = document.querySelector('.passwordLabel')
let passwordInput = document.querySelector('.passwordInput')
let conPasswordLabel = document.querySelector('.conPasswordLabel')
let conPasswordInput = document.querySelector('.conPasswordInput')
let birthdayLabel = document.querySelector('.birthdayLabel')
let birthdayInput = document.querySelector('.birthdayInput')
let submitBtn = document.querySelector('.submitBtn')




// login page
function focusAndBlurOnPassword() {
    passwordHelp.classList.toggle('d-none')
}
function loginPasswordValidate() {
    if (loginPassword.value.length >= 6) {
        passwordHelp.classList.replace('text-danger', 'text-success')
        passwordHelp.classList.add('fw-bold')
        passwordHelp.innerHTML = 'Password now is more than 6 characters'

    } else {
        passwordHelp.classList.replace('text-success', 'text-danger')
    }
}


// register page

function emailValidation() {
    var emailResult = emailValidate.test(emailInput.value)
    if (emailResult == false) {
        emailLabel.innerText =
            "Please Enter A Valid " + emailLabel.innerHTML;
        emailLabel.classList.add("text-danger");
    }
}
function numberValidation() {
    var numberResult = numberValidate.test(numberInput.value)
    if (numberResult == false) {
        numberLabel.innerText =
            "Please Enter A Valid " + numberLabel.innerHTML;
        numberLabel.classList.add("text-danger");
    }
}


function inputsValidation() {
    if (firstNameInput.value.length == 0) {
        resetLabels();
        firstNameLabel.innerText =
            "Please Enter A Valid " + firstNameLabel.innerHTML;
        firstNameLabel.classList.add("text-danger");
    } else if (lastNameInput.value.length == 0) {
        resetLabels();
        lastNameLabel.innerText =
            "Please Enter A Valid " + lastNameLabel.innerHTML;
        lastNameLabel.classList.add("text-danger");
    } else if (emailInput.value.length == 0) {
        resetLabels();
        emailLabel.innerText =
            "Please Enter A Valid " + emailLabel.innerHTML;
        emailLabel.classList.add("text-danger");
    } else if (numberInput.value.length == 0) {
        resetLabels();
        numberLabel.innerText =
            "Please Enter A Valid " + numberLabel.innerHTML;
        numberLabel.classList.add("text-danger");
    } else if (passwordInput.value.length == 0) {
        resetLabels();
        passwordLabel.innerText =
            "Please Enter A Valid " + passwordLabel.innerHTML;
        passwordLabel.classList.add("text-danger");
    } else if (conPasswordInput.value.length == 0) {
        resetLabels();
        conPasswordLabel.innerText =
            "Please Enter A Valid " + conPasswordLabel.innerHTML;
        conPasswordLabel.classList.add("text-danger");
    } else if (conPasswordInput.value != passwordInput.value) {
        resetLabels();
        conPasswordLabel.innerText = 'Not matched';
        conPasswordLabel.classList.add("text-danger");
    } else if (birthdayInput.value.length == 0) {
        resetLabels();
        birthdayLabel.innerText =
            "Please Enter A Valid " + birthdayLabel.innerHTML;
        birthdayLabel.classList.add("text-danger");
    } else {
        resetLabels()
        emailValidation()
        numberValidation()
    }

}


// reseting function
function resetLabels() {
    // reseting labels
    firstNameLabel.innerHTML = 'First Name :'
    lastNameInput.innerHTML = 'Last Name :'
    emailLabel.innerHTML = 'Email :'
    numberLabel.innerHTML = 'Phone Number :'
    passwordLabel.innerHTML = 'Password :'
    conPasswordLabel.innerHTML = 'Confirm Password :'
    birthdayLabel.innerHTML = 'Birthday :'

    // reseting labels color
    firstNameLabel.classList.remove("text-danger");
    lastNameInput.classList.remove("text-danger");
    emailLabel.classList.remove("text-danger");
    numberLabel.classList.remove("text-danger");
    passwordLabel.classList.remove("text-danger");
    conPasswordLabel.classList.remove("text-danger");
    birthdayLabel.classList.remove("text-danger");
}

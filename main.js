const form = document.querySelector('.form');
const firstNameInput = document.querySelector('.first-name__input');
const lastNameInput = document.querySelector('.last-name__input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const phone = document.querySelector('.phone-input');
const bio = document.querySelector('.bio-input');
const submitBtn = document.querySelector('.submit-btn');
let warningFirstName = document.querySelector('.warning-first-name');
let warningLastName = document.querySelector('.warning-last-name');
let warningEmail = document.querySelector('.warning-email');
let warningPassword = document.querySelector('.warning-password');
let warningPhone = document.querySelector('.warning-phone');
let warningBio = document.querySelector('.warning-bio');


let firstNameValidated = false
    lastNameValidated = false
    emailValidated = false
    passwordValidated = false
    phoneValidated = false
    bioValidated = false

console.log(firstNameValidated, lastNameValidated)

let flag = false;
const toggle = () => {
  flag = !flag;
  return flag;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

firstNameInput.addEventListener('keyup', validateName = () => {
    let regex = /^[A-Za-z0-9]{3,16}$/g
    let input = firstNameInput.value;
    if(!input.match(regex)) {
        warningFirstName.textContent = 'First name must be alphanumeric and include 3 - 16 letters';
        firstNameInput.classList.add('warning-outline');
        firstNameInput.classList.remove('thicked');
        firstNameValidated = false
        validateForm();

        

    }  else{
        warningFirstName.textContent = "";
        firstNameInput.classList.add('thicked');
        firstNameValidated = true
        validateForm();

    }
  
})

lastNameInput.addEventListener('keyup', () => {
    let regex = /[A-Za-z0-9]{3,16}$/ig
    let input = lastNameInput.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningLastName.textContent = 'Last name must be alphanumeric and include 3 - 16 letters';
        lastNameInput.classList.add('warning-outline');
        lastNameInput.classList.remove('thicked');
        lastNameValidated = false
        validateForm();


    }  else{
        warningLastName.textContent = "";
        lastNameInput.classList.add('thicked');
        lastNameValidated = true
        validateForm();

    }
  
})

email.addEventListener('keyup', () => {
    let regex = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,}$/ig;
    let text = email.value;
    let match = text.match(regex);
    console.log(match)
    if(!email.value.match(regex)) {
        warningEmail.textContent = 'Email must be a valid address, e.g. example@example.com';
        email.classList.add('warning-outline');
        email.classList.remove('thicked');
        emailValidated = false
        validateForm();

    } else {
        warningEmail.textContent = "";
        email.classList.add('thicked');
        emailValidated = true
        validateForm();

    }
  
})

password.addEventListener('keyup', () => {
    let regex = /[A-Z-a-z0-9\/@._$--]{6,20}$/g
    let input = password.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningPassword.textContent = 'Passord be alphanumeric and include 6 - 20 letters';
        password.classList.add('warning-outline');
        password.classList.remove('thicked');
        passwordValidated = false;
        validateForm();


    }  else{
        warningPassword.textContent = "";
        password.classList.add('thicked');
        passwordValidated = true;
        validateForm();
    }
  
})

phone.addEventListener('keyup', () => {
    let regex = /[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4}$/ig
    let input = phone.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningPhone.textContent = 'A valid Telephone number(11 digits and 333-333-3334)';
        phone.classList.add('warning-outline');
        phone.classList.remove('thicked');
        phoneValidated = false
        validateForm();

    }  else{
        warningPhone.textContent = "";
        phone.classList.add('thicked');
        phoneValidated = true;
        validateForm();
    }
  
})

bio.addEventListener('keyup', () => {
    let regex = /^[a-z _-]{8,50}$/ig
    let input = bio.value;
    let match = input.match(regex);
    console.log(match)
    if(!input.match(regex)) {
        warningBio.textContent = 'Bio must contain only lowercase letters, underscores,\n hyphens and be 8-50 characters';
        bio.classList.add('warning-outline');
        bio.classList.remove('thicked');
        bioValidated = false
        validateForm();

    }  else{
        warningBio.textContent = "";
        bio.classList.add('thicked');
        bioValidated = true
        validateForm();
    }
  
})



    
    const validateForm = () => {
       
        if(firstNameValidated === true && lastNameValidated === true && emailValidated === true && passwordValidated === true && phoneValidated === true && bioValidated === true) {
            submitBtn.classList.add('validated');
            submitBtn.addEventListener('click', sendForm);
        } else {
            console.log('not validated')
            submitBtn.classList.remove('validated');
            submitBtn.removeEventListener('click', sendForm);


        }
    }

    const sendForm = () => form.innerHTML = `<h1>Thanks for submitting this form!</h1>`;
    const removeSend = () => submitBtn.removeEventListener('click', sendForm);



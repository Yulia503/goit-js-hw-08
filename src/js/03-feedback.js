import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea')

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

// console.log(form);
// console.log(inputEmail); 
// console.log(textareaMessage);

const localHost = "feedback-form-state";
let data = JSON.parse(localStorage.getItem(localHost)) || {};
resultInputForm();

function onInputForm(evt) {
    data[evt.target.name] = evt.target.value;

    localStorage.setItem(localHost, JSON.stringify(data));
        // console.log(data);
}

function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(localHost);
    data = {};
    console.log(data);
}

function resultInputForm() {
    const previousData = JSON.parse(localStorage.getItem(localHost));
    console.log(previousData);
    if (!previousData) {
        return;
    } else {
        inputEmail.value = previousData.inputEmail || '';
        textareaMessage.value = previousData.textareaMessage || '';
    }

    }

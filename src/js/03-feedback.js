import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(onInputSaveData, 500));

function onInputSaveData (event) {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  if (inputEl.value === '' || textareaEl.value === '') {
    alert('Запишіть усі поля');
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  console.log(formData);
  formData = {};
}

function fillOutTheForm () {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    const { email, message } = savedData;
    if (email) {
      inputEl.value = email;
      formData.email = email;
    }
    if (message) {
      textareaEl.value = message;
      formData.message = message;
    }
  }
}

fillOutTheForm();


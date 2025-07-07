import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримуємо форму підписки та поле для вводу e-mail
const formElement = document.querySelector('.sub-form');
const emailInput = document.querySelector('#user-email');

// Додаємо обробник події на відправку форми
formElement.addEventListener('submit', processFormSubmission);

function processFormSubmission(e) {
  e.preventDefault();

  const enteredEmail = emailInput.value.trim();
  const isEmailValid = validateEmailFormat(enteredEmail);

  // Перевірка коректності e-mail
  if (!isEmailValid) {
    showToast('error', 'Invalid Input', 'Please provide a valid email address');
    return;
  }

  const existingEmails = getStoredEmails();

  // Перевірка на те чи вже підписаний користувач
  if (isEmailRegistered(existingEmails, enteredEmail)) {
    showToast('warning', 'Already Subscribed', 'This email is already on the list');
    resetForm();
    return;
  }

  // Додаємо нову адресу до списку та зберігаємо
  storeEmail(existingEmails, enteredEmail);
  showToast('success', 'Subscribed', 'You have successfully joined the list');
  resetForm();
}

// Валідація e-mail за допомогою регулярного виразу
function validateEmailFormat(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

// Отримуємо збережені e-mail з localStorage
function getStoredEmails() {
  const data = localStorage.getItem('subscriptionList');
  return data ? JSON.parse(data) : [];
}

// Перевірка на те чи e-mail вже є у списку
function isEmailRegistered(list, email) {
  return list.includes(email);
}

// Додаємо новий e-mail до списку та оновлюємо localStorage
function storeEmail(list, email) {
  list.push(email);
  localStorage.setItem('subscriptionList', JSON.stringify(list));
}

// Відображення сповіщення за допомогою iziToast
function showToast(type, title, msg) {
  iziToast[type]({
    title: title,
    message: msg,
    position: 'topRight',
  });
}

// Скидаємо значення форми після обробки
function resetForm() {
  formElement.reset();
}
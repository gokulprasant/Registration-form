const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    nameError.style.display = 'block';
    return false;
  } else {
    nameError.style.display = 'none';
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    emailError.style.display = 'block';
    return false;
  } else {
    emailError.style.display = 'none';
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    passwordError.style.display = 'block';
    return false;
  } else {
    passwordError.style.display = 'none';
    return true;
  }
}

function checkFormValidity() {
  const isFormValid =
    validateName() && validateEmail() && validatePassword();
  submitButton.disabled = !isFormValid;
}

nameInput.addEventListener('input', () => {
  validateName();
  checkFormValidity();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  checkFormValidity();
});

passwordInput.addEventListener('input', () => {
  validatePassword();
  checkFormValidity();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});


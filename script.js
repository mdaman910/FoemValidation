const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (nameValue.length < 5) {
        setError(fullName, 'Name must not be less than 5 characters');
    } else {
        setSuccess(fullName);
    }

    if (!emailValue.includes('@')) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '123456789' || phoneValue.length !== 10) {
        setError(phone, 'Enter a valid 10-digit phone number');
    } else {
        setSuccess(phone);
    }

    if (passwordValue === 'password' || passwordValue === nameValue || passwordValue.length < 8) {
        setError(password, 'Password is not strong enough');
    } else {
        setSuccess(password);
    }

    if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
}

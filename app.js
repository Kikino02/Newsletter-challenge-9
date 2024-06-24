const card = document.querySelector('.card');
const form = document.querySelector('.card__form');

const userEmail = document.querySelector('.your_email');
const errorMsg = document.querySelector('.error__msg');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('.submit');

const successCard = document.querySelector('.success_message');
const dismissBtn = document.querySelector('.dismiss');

function formSuccess() {
    successCard.classList.remove('hidden');
    card.classList.add('hidden');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //return email.match(emailRegex) !== null;
    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        formSuccess();
        userEmail.textContent = email;
        emailInput.value = '';

        errorMsg.classList.add('hidden');
        emailInput.classList.remove('error');
    } else {
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('error');
    }
})

dismissBtn.addEventListener('click', () => {
    successCard.classList.add('hidden');
    card.classList.remove('hidden');
})
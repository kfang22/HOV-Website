document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('subject').addEventListener('blur', validateSubject);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateMessage);


function validateName() {

    const name = document.getElementById('name');
    const empty = name.value;

    if (empty === '' || empty.replace(/\s+/g, '') === '') {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateSubject() {
    const name = document.getElementById('subject');
    const empty = name.value;

    if (empty === '' || empty.replace(/\s+/g, '') === '') {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const en = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    const vn = /^\(?\+?(\d{2})?\)?[-. ]?\d{2}[-. ]?\d{4}[-. ]?\d{4}$/;

    if (en.test(phone.value) || vn.test(phone.value)) {
        phone.classList.remove('is-invalid');
    } else {
        phone.classList.add('is-invalid');
    }
}

function validateMessage() {

    const name = document.getElementById('message');
    const empty = name.value;

    if (empty === '' || empty.replace(/\s+/g, '') === '') {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
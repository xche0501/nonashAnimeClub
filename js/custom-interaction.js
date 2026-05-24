document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('joinForm');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const modal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function showError(input, errorId, message) {
        const errorSpan = document.getElementById(errorId);
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
        input.style.borderColor = '#ff6b6b';
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(err => err.style.display = 'none');
        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'name-error', 'Please enter your name.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, 'email-error', 'Please enter your Email address.');
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, 'email-error', 'Please enter in valid format.');
            isValid = false;
        }

        if (isValid) {
            modal.style.display = 'flex';
            form.reset();
        }
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
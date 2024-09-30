document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Form validation
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Votre réservation a été enregistrée. Nous vous contacterons bientôt pour confirmer.');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;

        if (name.trim() === '') {
            alert('Veuillez entrer votre nom.');
            isValid = false;
        }

        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Veuillez entrer une adresse email valide.');
            isValid = false;
        }

        if (phone.trim() === '' || !isValidPhone(phone)) {
            alert('Veuillez entrer un numéro de téléphone valide.');
            isValid = false;
        }

        if (service === '') {
            alert('Veuillez choisir un service.');
            isValid = false;
        }

        if (date === '') {
            alert('Veuillez choisir une date.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        const re = /^(\+33|0)[1-9](\d{2}){4}$/;
        return re.test(phone);
    }

    // Highlight current section in navigation
    window.addEventListener
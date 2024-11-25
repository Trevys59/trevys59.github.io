document.addEventListener("DOMContentLoaded", () => {
    // Initialisation des fonctionnalités après le chargement de la page
    initSmoothScroll();
    initBackToTopButton();
    initContactForm();
    initScrollAnimations();
});

// Fonction pour gérer le défilement fluide vers les ancres
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}

// Fonction pour gérer le formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupération des valeurs du formulaire
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation des champs
        if (!validateContactForm(name, email, message)) {
            alert("Veuillez remplir tous les champs correctement.");
            return;
        }

        // Intégration ou action lors de la soumission du formulaire
        sendContactEmail(name, email, message);
    });
}

// Validation du formulaire de contact
function validateContactForm(name, email, message) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple validation d'email

    if (!name || !email || !message) {
        return false; // Un champ est vide
    }

    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false; // Email invalide
    }

    return true; // Formulaire valide
}

// Envoi d'un e-mail via mailto
function sendContactEmail(name, email, message) {
    const mailtoLink = `mailto:trevys.sarrazyn@gmail.com?subject=Contact Form Submission&body=Nom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    // Ouvrir le client de messagerie
    window.location.href = mailtoLink;

    // Réinitialise le formulaire après l'envoi
    document.getElementById("contact-form").reset();

    alert("Merci pour votre message, je vous contacterai bientôt !");
}

// Fonction pour gérer les animations au défilement
function initScrollAnimations() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}
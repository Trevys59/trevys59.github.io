document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupération des valeurs du formulaire
        // Récupération des valeurs du formulaire
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Validation simple
        if (name && email && message) {
            // Ici, Tu peux ajouter une intégration avec un service d'email
            submitForm();
            console.log("Nom:", name, "Email:", email, "Message:", message);
            alert("Merci pour votre message, je vous contacterai bientôt !");
            // contactForm.reset();  //Décommentez pour réinitialiser le formulaire après l'envoi
        } else {
            alert("Veuillez remplir tous les champs.");
        }

        
    });
    function submitForm() {
       // Construction de l'URL mailto
        var mailtoLink = 'mailto:trevys.sarrazyn@gmail.com' // Remplacez par votre adresse e-mail
                       + '?subject=Contact Form Submission'
                       + '&body=Nom: ' + encodeURIComponent(name)
                       + '%0D%0AEmail: ' + encodeURIComponent(email)
                       + '%0D%0AMessage:%0D%0A' + encodeURIComponent(message);
    
        // Ouvrir le client de messagerie
        window.location.href = mailtoLink;
    
        // Prévenir le comportement par défaut du formulaire
        return false;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Bouton retour en haut
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});


// Animation au défilement
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1
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
});
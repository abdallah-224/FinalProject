// Animation des barres de compétences
function animateSkills() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

// Affichage des détails de projet
function showProjectDetails(projectName) {
  alert(
    `Détails du projet : ${projectName}\n\nCe projet démontre mes compétences en développement web. Pour plus d'informations, n'hésitez pas à me contacter !`
  );
}

// Validation du formulaire
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Réinitialiser les erreurs
      const errors = document.querySelectorAll(".error");
      errors.forEach((error) => (error.textContent = ""));

      let isValid = true;

      // Validation du nom
      const nom = document.getElementById("nom").value.trim();
      if (nom.length < 2) {
        document.getElementById("nomError").textContent =
          "Le nom doit contenir au moins 2 caractères";
        isValid = false;
      }

      // Validation de l'email
      const email = document.getElementById("email").value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent =
          "Veuillez entrer une adresse email valide";
        isValid = false;
      }

      // Validation du téléphone (optionnel mais si rempli, doit être valide)
      const telephone = document.getElementById("telephone").value.trim();
      if (telephone && !/^[\d\s\-\+\(\)]+$/.test(telephone)) {
        document.getElementById("telephoneError").textContent =
          "Format de téléphone invalide";
        isValid = false;
      }

      // Validation du sujet
      const sujet = document.getElementById("sujet").value;
      if (!sujet) {
        document.getElementById("sujetError").textContent =
          "Veuillez sélectionner un sujet";
        isValid = false;
      }

      // Validation du message
      const message = document.getElementById("message").value.trim();
      if (message.length < 10) {
        document.getElementById("messageError").textContent =
          "Le message doit contenir au moins 10 caractères";
        isValid = false;
      }

      // Si tout est valide, afficher le message de succès
      if (isValid) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("successMessage").style.display = "block";

        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          document.getElementById("contactForm").reset();
          document.getElementById("contactForm").style.display = "block";
          document.getElementById("successMessage").style.display = "none";
        }, 3000);
      }
    });
  }

  // Effets de survol sur les cartes de projet
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.background = "linear-gradient(45deg, #667eea, #764ba2)";
      this.style.color = "white";
    });

    card.addEventListener("mouseleave", function () {
      this.style.background = "#f8f9fa";
      this.style.color = "#333";
    });
  });

  // Animation d'entrée pour la page d'accueil
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {
      hero.style.transition = "all 0.8s ease";
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 200);
  }

  // Animation des compétences si on est sur la page compétences
  if (
    window.location.pathname.includes("competences.html") ||
    window.location.pathname.endsWith("competences.html")
  ) {
    setTimeout(animateSkills, 500);
  }
});

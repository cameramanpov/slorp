const authorizedUsers = [
    { nom: "Millotte", prenom: "Lucas", mdp: "Gidi5322" }
];

function showLoginForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = "block";
}

function checkCredentials() {
    const nomInput = document.getElementById("nom").value;
    const prenomInput = document.getElementById("prenom").value;
    const mdpInput = document.getElementById("mdp").value;

    const isAuthorized = authorizedUsers.some(user =>
        user.nom === nomInput && user.prenom === prenomInput && user.mdp === mdpInput
    );

    if (isAuthorized) {
        window.location.href = "ecoledelhorreur.html"; // Rediriger vers la page d'accueil autorisée
    } else {
        alert("Accès non autorisé. Veuillez vérifier vos informations.");
    }
}

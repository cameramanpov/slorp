const authorizedUsers = [
    { nom: "hi", prenom: "bitch", mdp: "pas" },
    { nom: "utilisateur2", prenom: "prenom2", mdp: "motdepasse2" }
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
        window.location.href = ""; // Rediriger vers la page d'accueil autorisée
    } else {
        alert("Accès non autorisé. Veuillez vérifier vos informations.");
    }
}

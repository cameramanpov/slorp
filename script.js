document.addEventListener('DOMContentLoaded', function () {
    // Récupérer la liste de liens
    const siteList = document.getElementById('siteList');

    // Ajouter un écouteur de clic aux liens
    siteList.addEventListener('click', function (event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Vérifier si l'élément cliqué est un lien
        if (event.target.tagName === 'A') {
            // Recharger la page avec le nouvel URL
            window.location.href = event.target.href;
        }
    });
});
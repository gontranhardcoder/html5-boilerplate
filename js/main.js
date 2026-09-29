// ==========================================================================
// MAIN.JS — Point de départ pour ton JavaScript
// ==========================================================================
// Ce script est chargé avec l'attribut "defer" dans index.html,
// ce qui signifie qu'il s'exécute une fois le HTML entièrement chargé,
// sans bloquer le rendu de la page.
// ==========================================================================

// Petit log de confirmation dans la console du navigateur (F12 → Console)
console.log('Boilerplate HTML5 chargé avec succès 🚀');

// --------------------------------------------------------------------------
// Exemple : mettre à jour automatiquement l'année du pied de page
// (la balise <span id="year"> dans le footer)
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  // 👉 Ajoute ici ton propre code (menu mobile, animations, formulaires…)
});

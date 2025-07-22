// JavaScript pour le menu latéral
const menuSidebar = document.getElementById('sidebar-menu');
const elementSedebar = document.getElementById('sidebar-elements');

// Toggle la classe 'active' pour afficher/masquer le menu
menuSidebar.addEventListener('click', () => {
  elementSedebar.classList.toggle('active');
});

const sidebarButton = document.getElementById("sidebar-menu");
const sidebarPlus = document.getElementById("sidebar-elements");

let isSidebarOpenPlus = false;

// Affiche la sidebar au clic
sidebarButton.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebarPlus.classList.add("visible");
  isSidebarOpenPlus = true;
});

// Cache la sidebar quand on clique ailleurs
document.addEventListener("click", (e) => {
  if (isSidebarOpenPlus && !sidebarPlus.contains(e.target) && e.target !== sidebarButton) {
    sidebarPlus.classList.remove("active");
    isSidebarOpenPlus = false;
  }
});

// Empêche la fermeture quand on clique dans la sidebar
sidebarPlus.addEventListener("click", (e) => {
  e.stopPropagation();
});
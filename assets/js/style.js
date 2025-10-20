
// Logique pour la gestion de submenu

const menuStack = [];

function openSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (!submenu) return;
    menuStack.push(submenu);
    submenu.classList.remove('translate-x-full');
    submenu.classList.add('translate-x-0');
}

function closeSubMenu(button) {
    const submenu = button.closest('.submenu');
    if (!submenu) return;
    submenu.classList.remove('translate-x-0');
    submenu.classList.add('translate-x-full');
    menuStack.pop();
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const sidebar = document.getElementById('mobile-menu-sidebar');
const panel = document.getElementById('mobile-menu-panel');

mobileMenuButton.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('opacity-100');
    if (isOpen) {
        sidebar.classList.remove('opacity-100');
        sidebar.classList.add('opacity-0', 'pointer-events-none');
        panel.classList.add('-translate-x-full');
        menuStack.forEach(sm => {
            sm.classList.remove('translate-x-0');
            sm.classList.add('translate-x-full');
        });
        menuStack.length = 0;
    } else {
        sidebar.classList.remove('opacity-0', 'pointer-events-none');
        sidebar.classList.add('opacity-100');
        panel.classList.remove('-translate-x-full');
    }
});

// Fermer le menu si clic sur l'overlay
sidebar.addEventListener('click', (e) => {
if (e.target === sidebar) {
    mobileMenuButton.click();
}
});




// Gestion de menu sur petit ecran
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sélectionner tous les boutons qui ouvrent un menu déroulant
    const dropdownButtons = document.querySelectorAll('.js-dropdown-btn');

    dropdownButtons.forEach(button => {
        // Le menu associé est l'enfant suivant (le <div>)
        const dropdownMenu = button.nextElementSibling;

        // Si on clique sur le bouton :
        button.addEventListener('click', (event) => {
            // Empêche la propagation du clic à la fenêtre (pour ne pas fermer immédiatement)
            event.stopPropagation();
            
            // Ferme tous les autres menus avant d'ouvrir celui-ci
            closeAllDropdowns(dropdownMenu);

            // Bascule la classe 'hidden' sur le menu
            dropdownMenu.classList.toggle('hidden');
        });
    });

    // Fonction pour fermer tous les menus sauf éventuellement celui en cours d'ouverture
    function closeAllDropdowns(currentOpenMenu = null) {
        document.querySelectorAll('.js-dropdown-menu').forEach(menu => {
            if (menu !== currentOpenMenu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    }

    // 2. Fermer le menu si l'on clique en dehors
    document.addEventListener('click', (event) => {
        // Si le clic n'est ni sur un bouton ni dans un menu, on ferme tout.
        if (!event.target.closest('.js-dropdown-btn') && !event.target.closest('.js-dropdown-menu')) {
            closeAllDropdowns();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('mobile-menu-sidebar');

  if (sidebar) {
    // Déplace le menu mobile en dehors du header, dans le body
    document.body.appendChild(sidebar);
  }
});


// Slider 

const slider = document.getElementById("slider");
function slide(direction) {
    const scrollAmount = 300;
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
}


// logique pour le submenu du footer

  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const svg = button.querySelector('svg');
    if(content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      svg.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      svg.classList.remove('rotate-180');
    }
  }


// modal


function openModal(id) {
const modal = document.getElementById(id);
if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}}

function closeModal(id) {
const modal = document.getElementById(id);
if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = ''; 
}}
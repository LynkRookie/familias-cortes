document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const sideMenu = document.getElementById('sideMenu');
  let overlay;

  // Crear el overlay
  function createOverlay() {
      overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);
  }

  // Inicializar el overlay
  createOverlay();

  // Función para abrir el menú
  function openMenu() {
      sideMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
  }

  // Función para cerrar el menú
  function closeMenu() {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
  }

  // Event listeners
  menuButton.addEventListener('click', function(e) {
      e.stopPropagation();
      if (sideMenu.classList.contains('active')) {
          closeMenu();
      } else {
          openMenu();
      }
  });

  // Cerrar el menú cuando se hace clic en el overlay
  overlay.addEventListener('click', closeMenu);

  // Cerrar el menú cuando se presiona la tecla Escape
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
          closeMenu();
      }
  });

  // Prevenir que los clics dentro del menú cierren el menú
  sideMenu.addEventListener('click', function(e) {
      e.stopPropagation();
  });

  // Manejar cambios de tamaño de ventana
  window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && sideMenu.classList.contains('active')) {
          closeMenu();
      }
  });
});
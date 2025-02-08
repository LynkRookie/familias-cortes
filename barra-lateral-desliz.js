document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton")
    const sideMenu = document.getElementById("sideMenu")
    const mainContent = document.querySelector(".main-content")
    let overlay
  
    // Crear el overlay
    function createOverlay() {
      overlay = document.createElement("div")
      overlay.className = "overlay"
      document.body.appendChild(overlay)
    }
  
    // Inicializar el overlay
    createOverlay()
  
    // Función para abrir el menú
    function openMenu() {
      sideMenu.classList.add("active")
      overlay.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  
    // Función para cerrar el menú
    function closeMenu() {
      sideMenu.classList.remove("active")
      sideMenu.classList.remove("expanded")
      sideMenu.classList.add("collapsed")
      overlay.classList.remove("active")
      document.body.style.overflow = ""
      mainContent.classList.remove("menu-expanded")
    }
  
    // Función para expandir el menú
    function expandMenu() {
      sideMenu.classList.add("expanded")
      sideMenu.classList.remove("collapsed")
      mainContent.classList.add("menu-expanded")
      document.querySelectorAll(".menu-item-text").forEach((item) => {
        item.style.display = "inline"
      })
    }
  
    // Función para contraer el menú
    function collapseMenu() {
      sideMenu.classList.remove("expanded")
      sideMenu.classList.add("collapsed")
      mainContent.classList.remove("menu-expanded")
      document.querySelectorAll(".menu-item-text").forEach((item) => {
        item.style.display = "none"
      })
    }
  
    // Event listeners
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation()
      if (sideMenu.classList.contains("active")) {
        closeMenu()
      } else {
        openMenu()
      }
    })
  
    // Cerrar el menú cuando se hace clic en el overlay
    overlay.addEventListener("click", closeMenu)
  
    // Cerrar el menú cuando se presiona la tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sideMenu.classList.contains("active")) {
        closeMenu()
      }
    })
  
    // Prevenir que los clics dentro del menú cierren el menú
    sideMenu.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  
    // Manejar cambios de tamaño de ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        sideMenu.classList.remove("active")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  
    // Detectar la posición del mouse para expandir/contraer el menú
    document.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 768) return // No aplicar en dispositivos móviles
  
      const threshold = 50 // Distancia desde el borde izquierdo para activar la expansión
  
      if (e.clientX <= threshold) {
        expandMenu()
      } else if (e.clientX > 300 && sideMenu.classList.contains("expanded")) {
        collapseMenu()
      }
    })
  
    // Accesibilidad: permitir la expansión/contracción del menú con el teclado
    sideMenu.addEventListener("focus", expandMenu)
    sideMenu.addEventListener("blur", collapseMenu)
  
    function initMenu() {
      const menuItems = document.querySelectorAll(".menu-item")
      menuItems.forEach((item) => {
        const text = item.textContent
        const icon = document.createElement("span")
        icon.className = "menu-item-icon"
        icon.innerHTML = "📁" // Puedes reemplazar esto con un ícono SVG o una imagen
        const textSpan = document.createElement("span")
        textSpan.className = "menu-item-text"
        textSpan.textContent = text
        item.textContent = ""
        item.appendChild(icon)
        item.appendChild(textSpan)
      })
    }
  
    initMenu()
  })
  
  
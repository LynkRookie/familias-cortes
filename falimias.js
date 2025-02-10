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
  
    // Función para expandir el menú
    function expandMenu() {
      sideMenu.classList.add("expanded")
      mainContent.classList.add("menu-expanded")
      document.querySelectorAll(".menu-item-text").forEach((item) => {
        item.style.opacity = "1"
      })
    }
  
    // Función para contraer el menú
    function collapseMenu() {
      sideMenu.classList.remove("expanded")
      mainContent.classList.remove("menu-expanded")
      document.querySelectorAll(".menu-item-text").forEach((item) => {
        item.style.opacity = "0"
      })
    }
  
    // Event listeners
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation()
      if (sideMenu.classList.contains("expanded")) {
        collapseMenu()
      } else {
        expandMenu()
      }
    })
  
    // Cerrar el menú cuando se hace clic fuera de él
    document.addEventListener("click", (e) => {
      if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
        collapseMenu()
      }
    })
  
    // Cerrar el menú cuando se presiona la tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sideMenu.classList.contains("expanded")) {
        collapseMenu()
      }
    })
  
    // Detectar la posición del mouse para expandir/contraer el menú
    let timeout
    sideMenu.addEventListener("mouseenter", () => {
      clearTimeout(timeout)
      expandMenu()
    })
  
    sideMenu.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        collapseMenu()
      }, 300) // Pequeño retraso para evitar contracciones accidentales
    })
  
    // Manejar cambios de tamaño de ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        collapseMenu()
      }
    })
  
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

  
  
  
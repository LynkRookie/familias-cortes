document.addEventListener("DOMContentLoaded", () => {
    // Navegación responsive
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger Animation
      burger.classList.toggle("toggle")
    })
  
    // Galería de imágenes
    const galleryContainer = document.querySelector(".gallery-container")
    const images = [
      "familia1.jpg",
      "familia2.jpg",
      "familia3.jpg",
      "familia4.jpg",
      "familia5.jpg",
      "familia6.jpg",
      "familia7.jpg",
      "familia8.jpg",
    ]
  
    images.forEach((image) => {
      const img = document.createElement("img")
      img.src = image
      img.alt = "Foto familiar"
      const galleryItem = document.createElement("div")
      galleryItem.classList.add("gallery-item")
      galleryItem.appendChild(img)
      galleryContainer.appendChild(galleryItem)
    })
  
    // Línea de tiempo
    const timelineContainer = document.querySelector(".timeline-container")
    const events = [
      { year: "1950", description: "Nacimiento del abuelo" },
      { year: "1970", description: "El abuelo se casa" },
      { year: "1980", description: "Nacimiento del primer hijo" },
      { year: "1990", description: "La U de Chile gana su primer campeonato de la era del abuelo" },
      { year: "2000", description: "Celebración del 50 aniversario del abuelo" },
      { year: "2011", description: "La U gana la Copa Sudamericana" },
      { year: "2020", description: "Reunión familiar virtual durante la pandemia" },
    ]
  
    events.forEach((event, index) => {
      const timelineItem = document.createElement("div")
      timelineItem.classList.add("timeline-item")
      timelineItem.classList.add(index % 2 === 0 ? "left" : "right")
  
      const content = document.createElement("div")
      content.classList.add("content")
      content.innerHTML = `
              <h2>${event.year}</h2>
              <p>${event.description}</p>
          `
  
      timelineItem.appendChild(content)
      timelineContainer.appendChild(timelineItem)
    })
  
    // Efecto de parallax en la sección hero
    window.addEventListener("scroll", () => {
      const hero = document.querySelector(".hero")
      const scrollPosition = window.pageYOffset
      hero.style.backgroundPositionY = scrollPosition * 0.7 + "px"
    })
  
    // Animación de entrada para las secciones
    const sections = document.querySelectorAll("section")
    const options = {
      threshold: 0.3,
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    }, options)
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  })
  
  

const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    updateThemeIcon();
});

function updateThemeIcon() {
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌓';
}

// Lightbox functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const photoItems = document.querySelectorAll('.photo-item');
const lightboxPrev = document.querySelector(".lightbox-prev")
const lightboxNext = document.querySelector(".lightbox-next")

let currentAlbum = []
let currentIndex = 0

function openLightbox(albumId, index) {
    const visibleImages = document.querySelectorAll(`.timeline-album[data-album-id="${albumId}"] img`)
    const hiddenImages = document.querySelectorAll(`.hidden-images[data-album-id="${albumId}"] img`)
    currentAlbum = [...visibleImages, ...hiddenImages].map((img) => img.src)
    currentIndex = index
    updateLightboxImage()
    lightbox.classList.add("active")
  }
  
  function updateLightboxImage() {
    lightboxImage.src = currentAlbum[currentIndex]
  }
  
  function closeLightbox() {
    lightbox.classList.remove("active")
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % currentAlbum.length
    updateLightboxImage()
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length
    updateLightboxImage()
  }
  
photoItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImage.src = imgSrc;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
lightboxClose.addEventListener("click", closeLightbox)
lightboxNext.addEventListener("click", nextImage)
lightboxPrev.addEventListener("click", prevImage)

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});
// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })
// Timeline album functionality
const timelineAlbums = document.querySelectorAll(".timeline-album")
timelineAlbums.forEach((album, albumIndex) => {
    const albumId = album.getAttribute("data-album-id")
    const images = album.querySelectorAll("img")
  
    images.forEach((img, imgIndex) => {
      img.addEventListener("click", () => {
        openLightbox(albumId, imgIndex)
      })
    })
  
    // Update more-photos count
    const hiddenImages = document.querySelector(`.hidden-images[data-album-id="${albumId}"]`)
    const totalImages = images.length + (hiddenImages ? hiddenImages.querySelectorAll("img").length : 0)
    const morePhotos = album.querySelector(".more-photos")
    if (morePhotos && totalImages > 4) {
      morePhotos.textContent = `+${totalImages - 4}`
    }
  
    // Add animation delay
    album.style.setProperty("--item-index", albumIndex)
  })
  
// Keyboard navigation for lightbox
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return
  
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeLightbox()
  })
  
// Initialize theme
updateThemeIcon();
// script.js

// --- Carousel Logic ---
let carouselIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-slide img');
const totalCarouselImages = carouselImages.length;
const carouselSlide = document.querySelector('.carousel-slide');

function moveCarousel(n) {
    carouselIndex += n;
    if (carouselIndex >= totalCarouselImages) {
        carouselIndex = 0;
    } else if (carouselIndex < 0) {
        carouselIndex = totalCarouselImages - 1;
    }
    // Ensure carouselSlide exists before trying to change its style
    if (carouselSlide) {
        carouselSlide.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
}

// --- Lightbox Logic ---
const lightbox = document.getElementById('myLightbox');
const lightboxImage = document.getElementById('lightboxImg');
let currentLightboxIndex = 0;

// Ensure carouselImages is not null and has elements before mapping
const imagesForLightbox = carouselImages && carouselImages.length > 0 
    ? Array.from(carouselImages).map(img => img.src) 
    : [];

function openLightbox(index) {
    if (imagesForLightbox.length === 0) return; // Don't open if no images
    currentLightboxIndex = index;
    if (lightbox && lightboxImage) { // Check if lightbox elements exist
        lightbox.style.display = "block";
        lightboxImage.src = imagesForLightbox[currentLightboxIndex];
        document.addEventListener('keydown', handleKeyboardNavigation);
    }
}

function closeLightbox() {
    if (lightbox) { // Check if lightbox element exists
        lightbox.style.display = "none";
        document.removeEventListener('keydown', handleKeyboardNavigation);
    }
}

function changeLightboxImage(n) {
    if (imagesForLightbox.length === 0) return; // Don't change if no images
    currentLightboxIndex += n;
    if (currentLightboxIndex >= imagesForLightbox.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = imagesForLightbox.length - 1;
    }
    if (lightboxImage) { // Check if lightbox image element exists
        lightboxImage.src = imagesForLightbox[currentLightboxIndex];
    }
}

function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowRight') {
        changeLightboxImage(1);
    } else if (event.key === 'ArrowLeft') {
        changeLightboxImage(-1);
    } else if (event.key === 'Escape') {
        closeLightbox();
    }
}

// Initialize carousel to show the first image, only if carouselSlide exists
if (carouselSlide) {
    carouselSlide.style.transform = `translateX(0%)`;
}

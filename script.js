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
    carouselSlide.style.transform = `translateX(-${carouselIndex * 100}%)`;
}

// --- Lightbox Logic ---
const lightbox = document.getElementById('myLightbox');
const lightboxImage = document.getElementById('lightboxImg');
let currentLightboxIndex = 0;

// This list of images should match the ones in your HTML
// For simplicity, we're getting them from the carousel directly.
// Ensure your `onclick="openLightbox(INDEX)"` in HTML has the correct index.
const imagesForLightbox = Array.from(carouselImages).map(img => img.src);


function openLightbox(index) {
    currentLightboxIndex = index;
    lightbox.style.display = "block";
    lightboxImage.src = imagesForLightbox[currentLightboxIndex];
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function closeLightbox() {
    lightbox.style.display = "none";
    document.removeEventListener('keydown', handleKeyboardNavigation);
}

function changeLightboxImage(n) {
    currentLightboxIndex += n;
    if (currentLightboxIndex >= imagesForLightbox.length) {
        currentLightboxIndex = 0;
    } else if (currentLightboxIndex < 0) {
        currentLightboxIndex = imagesForLightbox.length - 1;
    }
    lightboxImage.src = imagesForLightbox[currentLightboxIndex];
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

// Initialize carousel to show the first image
if (carouselSlide) { // Make sure carouselSlide element exists
    carouselSlide.style.transform = `translateX(0%)`;
}

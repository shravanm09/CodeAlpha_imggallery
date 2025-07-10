const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImages = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  currentIndex = [...galleryImages].indexOf(img);
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  lightboxImg.src = galleryImages[currentIndex].src;
}

function filterImages(category) {
  galleryImages.forEach(img => {
    if (category === "all" || img.dataset.category === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

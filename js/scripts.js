/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Use this file to add JavaScript to your project

// ==========================
// Section Toggles (slide open/close)
// ==========================
document.querySelectorAll(".banner").forEach(banner => {
  banner.addEventListener("click", () => {
    const target = document.getElementById(banner.dataset.target);
    if (target) {
      target.classList.toggle("open");
    }
  });
});

// ==========================
// Expandable Cards (click to reveal more content)
// ==========================
document.querySelectorAll(".expandable-card").forEach(card => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".expandable-content");
    if (content) {
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});

// ==========================
// Custom Carousel for Stryker
// ==========================
const track = document.querySelector(".carousel-track");
if (track) {
  const items = document.querySelectorAll(".carousel-item-custom");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * (100/3)}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (index < items.length - 3) index++;
      else index = 0;
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (index > 0) index--;
      else index = items.length - 3;
      updateCarousel();
    });
  }
}

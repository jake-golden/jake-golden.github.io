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
  card.addEventListener("click", function(e) {
    // Prevent toggle if clicking inside a carousel or its controls
    if (
      e.target.closest('.carousel') ||
      e.target.classList.contains('carousel-control-prev') ||
      e.target.classList.contains('carousel-control-next') ||
      e.target.classList.contains('carousel-control-prev-icon') ||
      e.target.classList.contains('carousel-control-next-icon')
    ) {
      return;
    }
    const content = card.querySelector(".expandable-content");
    if (content) {
      const isOpen = card.classList.contains("open");
      if (isOpen) {
        content.style.display = "none";
        card.classList.remove("open");
      } else {
        content.style.display = "block";
        card.classList.add("open");
      }
    }
  });
});

// ==========================
// Custom Carousel for Stryker
// ==========================

// Custom Carousel logic for all .carousel-container
document.querySelectorAll('.carousel-container').forEach(function(container) {
  const track = container.querySelector('.carousel-track');
  const items = container.querySelectorAll('.carousel-item-custom');
  const prevBtn = container.querySelector('.carousel-btn.prev');
  const nextBtn = container.querySelector('.carousel-btn.next');
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * (100/3)}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (index < items.length - 3) index++;
      else index = 0;
      updateCarousel();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (index > 0) index--;
      else index = items.length - 3;
      updateCarousel();
    });
  }
  updateCarousel();
});

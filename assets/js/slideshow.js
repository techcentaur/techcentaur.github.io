(function() {
  function initSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentSlide = 0;

    // Add CSS transitions to all slides
    slides.forEach((slide) => {
      slide.style.transition = 'opacity 0.2s ease-in-out';
      slide.style.opacity = '0';
      slide.style.position = 'absolute';
      slide.style.top = '0';
      slide.style.left = '0';
    });

    function showSlide(index) {
      // Fade out current slides
      slides.forEach((slide) => {
        slide.style.opacity = '0';
        slide.style.zIndex = '1';
        slide.classList.remove('active');
      });

      // Fade in new slide
      slides[index].style.opacity = '1';
      slides[index].style.zIndex = '2';
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Show first slide immediately
    slides[0].style.opacity = '1';
    slides[0].classList.add('active');

    // Start the slideshow
    const interval = setInterval(nextSlide, 1000);

    // Preload images
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlideshow);
  } else {
    initSlideshow();
  }
})(); 
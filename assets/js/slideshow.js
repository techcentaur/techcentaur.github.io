(function() {
  function initSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll('.slide');
    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {
      // Hide all slides
      slides.forEach((slide) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
      });

      // Show the current slide
      slides[index].style.display = 'block';
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Show first slide immediately
    showSlide(0);

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
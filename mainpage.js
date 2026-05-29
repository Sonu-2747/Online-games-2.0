// You can add any interaction functionality you need here
document.querySelector('.play-now').addEventListener('click', () => {
    alert("Game is starting...");
  });
  
  // Example for future dynamic updates
  document.querySelector('.search-bar').addEventListener('input', (e) => {
    console.log(`Searching for: ${e.target.value}`);
  });
  
  document.querySelector('.logout-button').addEventListener('click', function() {
    // Redirect to the new page
    window.location.href = 'LandingPage.html'; // Replace '/new-page-url' with the actual path to the new page
});



  //tournament advertiment
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.tournament-slide');
    let currentSlide = 0;

    function showNextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');

        // Calculate next slide index
        const nextSlide = (currentSlide + 1) % slides.length;

        // Set the next slide's opacity and transform for animation
        slides[nextSlide].style.opacity = 0; // Start hidden
        slides[nextSlide].style.transform = 'translateX(100%)'; // Move off-screen

        // Trigger reflow for animation
        void slides[nextSlide].offsetWidth;

        // Move to the next slide
        slides[nextSlide].classList.add('active');
        slides[nextSlide].style.opacity = 1; // Fade in
        slides[nextSlide].style.transform = 'translateX(0)'; // Move to center

        // Update current slide index
        currentSlide = nextSlide;
    }

    // Initialize the first slide as active
    slides[currentSlide].classList.add('nextSlide');

    // Start the automatic slideshow
    setInterval(showNextSlide, 2000); // Change slide every 5 seconds
});


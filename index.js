$(document).ready(function() {
    // Initialize the carousel
    $('#carouselExampleCaptions').carousel();
    
    // Automatically advance slides every 5 seconds
    setInterval(function() {
      $('#carouselExampleCaptions').carousel('next');
    }, 3000);
});
// Grid animation with parallax effect on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Track scroll position
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Function to handle the grid parallax effect
    function updateGridPosition() {
        // Calculate how far we've scrolled
        const scrollY = window.scrollY;
        
        // Calculate grid offset based on scroll position (multiple rates for parallax)
        // The horizontal movement is more pronounced than vertical for a nice effect
        const translateX = scrollY * 0.05; // Horizontal parallax
        const translateY = scrollY * 0.02; // Vertical parallax (subtler)
        
        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(function() {
            // Apply a CSS transform to the grid background
            document.body.style.setProperty('--scroll-offset-x', -translateX + 'px');
            document.body.style.setProperty('--scroll-offset-y', -translateY + 'px');
            
            // Make initial page load have a nice reveal animation for the grid
            if (scrollY === 0 && !document.body.classList.contains('grid-revealed')) {
                document.body.classList.add('grid-revealed');
            }
            
            // Reset the animation flag
            ticking = false;
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        
        // Use requestAnimationFrame to optimize performance
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateGridPosition();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true }); // Passive listener for better performance
    
    // Initial update
    updateGridPosition();
}); 
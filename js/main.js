document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle code has been moved to index.html
    // to ensure it runs after the header section is loaded

    // View more certificates
    const viewMoreCerts = document.getElementById('view-more-certs');
    const moreCertificates = document.getElementById('more-certificates');

    if (viewMoreCerts && moreCertificates) {
        viewMoreCerts.addEventListener('click', () => {
            moreCertificates.classList.toggle('hidden');
            
            if (moreCertificates.classList.contains('hidden')) {
                viewMoreCerts.innerHTML = 'View More Certificates <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
            } else {
                viewMoreCerts.innerHTML = 'View Less Certificates <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>';
                
                /* // Simulate loading more certificates  // COMMENTED OUT THIS BLOCK
                if (moreCertificates.children.length === 0) {
                    // In a real implementation, you would load actual certificates here
                    const loadingText = document.createElement('p');
                    loadingText.className = 'text-gray-400 col-span-3 text-center py-8';
                    loadingText.textContent = 'Loading more certificates...';
                    moreCertificates.appendChild(loadingText);
                    
                    setTimeout(() => {
                        moreCertificates.innerHTML = '';
                        // Add your additional certificates here
                    }, 1500);
                }
                */ // COMMENTED OUT THIS BLOCK
            }
        });
    }

    // Scroll reveal animations
    ScrollReveal().reveal('.section-title', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease-in-out',
    });
    
    ScrollReveal().reveal('.project-card, .certificate-card', {
        delay: 300,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        easing: 'ease-in-out',
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
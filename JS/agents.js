document.addEventListener('DOMContentLoaded', function() {
   // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Animate menu items when opening
        if (navMenu.classList.contains('active')) {
            navLinks.forEach((link, index) => {
                link.style.transitionDelay = `${0.1 + index * 0.1}s`;
            });
        } else {
            navLinks.forEach(link => {
                link.style.transitionDelay = '0s';
            });
        }
    });

    // Close menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Agent card animations
    const agentCards = document.querySelectorAll('.agent-card');
    
    
    // Hover effect for agent cards
    agentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px rgba(255, 70, 85, 0.3)';
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 15px rgba(255, 70, 85, 0.1)';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
});


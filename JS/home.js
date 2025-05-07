// Intersection Observer for fade-in animations
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeIns.forEach(el => observer.observe(el));

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

// Maps carousel
function scrollMaps(direction) {
    const container = document.getElementById('mapsScroll');
    const scrollAmount = container.offsetWidth * 0.8; // Scroll 80% of container width
    container.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
    });
}

// Make sure initial view video is centered on mobile
function adjustInitialView() {
    const initialView = document.getElementById('initial-view');
    if (window.innerWidth <= 768) {
        initialView.style.height = 'calc(100vh - 60px)';
    } else {
        initialView.style.height = '100vh';
    }
}




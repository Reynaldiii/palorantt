
document.addEventListener('DOMContentLoaded', function() {
    
    // Map Tab Functionality
    const mapTabs = document.querySelectorAll('.map-tab');
    const mapContainers = document.querySelectorAll('.map-container');
    
    mapTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            mapTabs.forEach(t => t.classList.remove('active'));
            
            // Add active to clicked tab
            this.classList.add('active');
            
            // Hide all map containers
            mapContainers.forEach(c => c.classList.remove('active'));
            
            // Show corresponding map
            const mapId = this.getAttribute('data-map');
            document.getElementById(mapId).classList.add('active');
        });
    });
    
    // Initialize first map
    if (mapTabs.length > 0) {
        mapTabs[0].click(); 
    }
    
    // Intersection Observer
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
});

document.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if(target) {
            
            target.scrollIntoView({ behavior: 'smooth' });
            
            const mapName = window.location.hash.replace('#', '');
            const correspondingTab = document.querySelector(`.map-tab[data-map="${mapName}"]`);
            if(correspondingTab) {
                correspondingTab.click();
            }
        }
    }
});
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
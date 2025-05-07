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
    
    // Featured news slider
    const slider = document.querySelector('.featured-slider');
    const slides = document.querySelectorAll('.featured-slide');
    const dotsContainer = document.querySelector('.slide-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slide-dot');
    
    // Slide functions
    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        updateSlide();
        resetTimer();
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    function startTimer() {
        slideInterval = setInterval(nextSlide, 3000);
    }
    
    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', startTimer);
    
    // Initialize
    startTimer();
    
    // News filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            const filter = this.dataset.filter;
            
            newsCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Load more button functionality
    const loadMoreBtn = document.querySelector('.load-more');
    let visibleCards = 6; // Initial number of visible cards
    
    if (newsCards.length <= visibleCards) {
        loadMoreBtn.style.display = 'none';
    }
    
    loadMoreBtn.addEventListener('click', function() {
        visibleCards += 3;
        
        // Show next set of cards
        for (let i = 0; i < Math.min(visibleCards, newsCards.length); i++) {
            newsCards[i].style.display = 'block';
        }
        
        // Hide button if all cards are visible
        if (visibleCards >= newsCards.length) {
            this.style.display = 'none';
        }
    });
    
    // Initially hide extra cards
    for (let i = visibleCards; i < newsCards.length; i++) {
        newsCards[i].style.display = 'none';
    }
});
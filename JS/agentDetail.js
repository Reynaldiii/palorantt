// Intersection Observer for fade-in animations
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
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

// Enhanced skill preview functionality
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('click', function() {
    // Get skill data
    const skillVideo = this.getAttribute('data-skill-video');
    const skillTitle = this.getAttribute('data-skill-title');
    const skillType = this.getAttribute('data-skill-type');
    const skillDesc = this.getAttribute('data-skill-desc');
    
    // Find containers
    const videoContainer = document.querySelector('.video-container');
    const infoContainer = document.querySelector('.skill-info-container');
    
    // Clear previous video
    videoContainer.innerHTML = '';
    
    // Create and insert new video
    if (skillVideo) {
      const video = document.createElement('video');
      video.className = 'skill-preview-video';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      const source = document.createElement('source');
      source.src = skillVideo;
      source.type = 'video/webm';
      video.appendChild(source);
      
      // Error handling
      video.addEventListener('error', () => {
        console.error('Error loading video:', skillVideo);
        videoContainer.innerHTML = '<p class="video-error">Video failed to load</p>';
      });
      
      video.addEventListener('ended', () => {
        video.currentTime = 0; // Reset to start when ended
      });
      
      videoContainer.appendChild(video);
    }
    
    // Update skill info
    if (infoContainer) {
      infoContainer.querySelector('.skill-preview-title').textContent = skillTitle;
      infoContainer.querySelector('.skill-preview-type').textContent = skillType;
      infoContainer.querySelector('.skill-preview-details').textContent = skillDesc;
    }
    
    // Update active state
    document.querySelectorAll('.skill-item').forEach(i => {
      i.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Initialize first video
document.querySelector('.skill-item.active')?.click();
document.addEventListener('DOMContentLoaded', function() {
    const bugReportForm = document.getElementById('bugReportForm');
    const bugDescription = document.getElementById('bugDescription');
    const charCount = document.getElementById('charCount');
    const maxChars = 500;

    // Character counter for bug description
    bugDescription.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCount.textContent = currentLength;
        
        if (currentLength > maxChars) {
            this.value = this.value.substring(0, maxChars);
            charCount.textContent = maxChars;
        }
    });

    // Form submission handler
    bugReportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const server = document.getElementById('server').value;
        const description = bugDescription.value.trim();
        
        if (!username || !email || !server || !description) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (description.length < 10) {
            alert('Please provide a more detailed bug description (at least 10 characters)');
            return;
        }
        
        // Simulate form submission
        submitBugReport({
            username,
            email,
            server,
            description,
            receiveUpdates: document.getElementById('receiveUpdates').checked
        });
    });

    function submitBugReport(formData) {
        // Show success message
        alert('Thank you for reporting this bug! Your submission has been received.');
        
        // Reset form
        bugReportForm.reset();
        charCount.textContent = '0';
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
// Minimal Terminal Effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic terminal functionality
    initializeTerminal();
});

function initializeTerminal() {
    // Simple fade in animation
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        terminalBody.style.opacity = '0';
        setTimeout(() => {
            terminalBody.style.transition = 'opacity 0.3s ease';
            terminalBody.style.opacity = '1';
        }, 100);
    }

    // Update active navigation
    updateActiveNavigation();
}

function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.filesystem-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Simple cursor blink effect for command prompts
setInterval(function() {
    const cursors = document.querySelectorAll('.cursor-blink');
    cursors.forEach(cursor => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    });
}, 500); 
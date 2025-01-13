document.addEventListener('DOMContentLoaded', function() {
    const headerTexts = document.querySelector('header .name-rotator').querySelectorAll('.rotating-text');
    const mainTexts = document.querySelector('h1 .name-rotator').querySelectorAll('.rotating-text');
    let currentIndex = 0;

    function rotateText() {
        // Header rotation (Ankit -> Kush)
        headerTexts.forEach(text => {
            text.classList.remove('current');
            text.style.transform = 'translateY(100%)';
            text.style.opacity = '0';
        });
        currentIndex = (currentIndex + 1) % headerTexts.length;
        headerTexts[currentIndex].classList.add('current');
        headerTexts[currentIndex].style.transform = 'translateY(0)';
        headerTexts[currentIndex].style.opacity = '1';

        // Main content rotation (opposite phase: Kush -> Ankit)
        mainTexts.forEach(text => {
            text.classList.remove('current');
            text.style.transform = 'translateY(100%)';
            text.style.opacity = '0';
        });
        const oppositeIndex = (currentIndex + 1) % mainTexts.length;
        mainTexts[oppositeIndex].classList.add('current');
        mainTexts[oppositeIndex].style.transform = 'translateY(0)';
        mainTexts[oppositeIndex].style.opacity = '1';
    }

    // Initial state: Header shows Ankit, Main shows Kush
    mainTexts[1].classList.add('current');
    mainTexts[1].style.transform = 'translateY(0)';
    mainTexts[1].style.opacity = '1';
    mainTexts[0].classList.remove('current');
    mainTexts[0].style.transform = 'translateY(100%)';
    mainTexts[0].style.opacity = '0';

    setInterval(rotateText, 1000);
}); 
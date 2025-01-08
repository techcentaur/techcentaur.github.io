document.addEventListener('DOMContentLoaded', function() {
  const easterEggTrigger = document.querySelector('.easter-egg-trigger');
  const easterEggSection = document.querySelector('.easter-egg-section');
  let isEasterEggVisible = false;

  // Toggle easter egg section
  easterEggTrigger.addEventListener('click', function() {
    isEasterEggVisible = !isEasterEggVisible;
    easterEggSection.style.display = isEasterEggVisible ? 'block' : 'none';
    
    // Smooth scroll to section if visible
    if (isEasterEggVisible) {
      easterEggSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Handle riddle answers
  document.querySelectorAll('.check-answer').forEach(button => {
    button.addEventListener('click', function() {
      const riddle = this.closest('.riddle');
      const input = riddle.querySelector('.riddle-input');
      const result = riddle.querySelector('.result');
      const riddleId = riddle.id;
      
      // Check answer using the function from riddle-answers.js
      const isCorrect = checkRiddleAnswer(riddleId, input.value);
      
      // Show result
      result.textContent = isCorrect ? 'you are right!' : "that's not it";
      result.className = 'result ' + (isCorrect ? 'correct' : 'incorrect');
      
      // Clear input and disable if correct
      if (isCorrect) {
        input.disabled = true;
        button.disabled = true;
        riddle.classList.add('solved');
      }
      
      // Check if all riddles are solved
      const allRiddles = document.querySelectorAll('.riddle');
      const solvedRiddles = document.querySelectorAll('.riddle.solved');
      
      if (allRiddles.length === solvedRiddles.length) {
        setTimeout(() => {
          alert('you solved all the riddles! 🎉');
        }, 500);
      }
    });
  });
}); 
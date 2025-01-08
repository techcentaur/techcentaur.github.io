document.addEventListener('DOMContentLoaded', function() {
  // Handle riddle answers
  document.querySelectorAll('.check-answer').forEach(button => {
    button.addEventListener('click', function() {
      const riddle = this.closest('.riddle');
      const input = riddle.querySelector('.riddle-input');
      const result = riddle.querySelector('.result');
      const riddleId = riddle.id;
      
      // Check answer using the function from riddle-answers.js
      const isCorrect = checkRiddleAnswer(riddleId, input.value);
      
      // Show result with special messages for specific riddles
      if (riddleId === 'riddle5') {
        result.textContent = isCorrect ? 'naam to yaad hai!' : 'thoda bhool jana behtar';
      } else if (riddleId === 'riddle3') {
        result.textContent = isCorrect ? 'hope you are happy' : 'either answer is wrong or i just miss dead people';
      } else {
        result.textContent = isCorrect ? 'you are right!' : "that's not it";
      }
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

  // Also allow Enter key to submit
  document.querySelectorAll('.riddle-input').forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        this.closest('.riddle').querySelector('.check-answer').click();
      }
    });
  });
}); 
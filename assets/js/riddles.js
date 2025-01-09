document.addEventListener('DOMContentLoaded', function() {
  const _0x4f2d = {
    [atob('bWltaQ==')]: {
      msg: "ज़रूरी बात कहनी हो कोई वा'दा निभाना हो\nउसे आवाज़ देनी हो उसे वापस बुलाना हो\n\nहमेशा देर कर देता हूँ मैं",
      isHindi: true
    },
    [atob('bWluYQ==')]: {
      msg: "ज़रूरी बात कहनी हो कोई वा'दा निभाना हो\nउसे आवाज़ देनी हो उसे वापस बुलाना हो\n\nहमेशा देर कर देता हूँ मैं",
      isHindi: true
    },
    [atob('Ymhhdmk=')]: {
      msg: "ऐ रहबर-ए-कामिल चलने को तय्यार तो हूँ पर याद रहे\nउस वक़्त मुझे भटका देना जब सामने मंज़िल आ जाए",
      isHindi: true
    },
    [atob('bmV0YQ==')]: {
      msg: atob('a3lhIGthciByaGEgaGFpIGJoYWk=')
    },
    [atob('dnlhcw==')]: {
      msg: atob('Z2FtZSBraGVsZWdhPw==')
    },
    [atob('Y2Fzc2l1cw==')]: {
      msg: atob('VVRJIHRvIHRoaWsgaGFpIGJoYWk/IGRhc3ZpIGJhcg==')
    },
    [atob('cGlrYQ==')]: {
      msg: atob('ZG9udCByaWdodCBzd2lwZSByZWQgZmxhZ3M=')
    },
    [atob('Y2h1bWl0')]: {
      msg: atob('d2UgbmVlZCB0byBsb2NrLWlu')
    },
    [atob('ZXNo')]: {
      msg: atob('d2hlcmUgYXJlIHlvdSwgY2FsbCBtZQ==')
    },
    [atob('ZWs=')]: {
      msg: atob('bm90aGluZyB0byBzYXk=')
    },
    [atob('c2hlcmxvY2s=')]: {
      msg: atob('aGFwcHkgbWFycmllZCBsaWZl')
    },
    [atob('bmVlbHU=')]: {
      msg: atob('dHJpY2VwIGRpa2hhPw==')
    },
    [atob('c2Fuc2E=')]: {
      msg: atob('bmFhbSB0byB5YWFkIGhhaSE=')
    }
  };

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
        const answer = input.value.toLowerCase().trim();
        let message = atob('dGhvZGEgYmhvb2wgamFuYSBiZWh0YXI=');
        
        if (isCorrect) {
          const msgObj = _0x4f2d[answer];
          if (msgObj) {
            message = msgObj.msg;
            if (msgObj.isHindi) {
              result.style.fontFamily = "'Noto Sans Devanagari', sans-serif";
              result.style.lineHeight = "1.6";
              result.style.fontSize = "0.9rem";
              result.style.whiteSpace = "pre-line";
            }
          }
        }
        result.textContent = message;
      } else if (riddleId === 'riddle3') {
        result.textContent = isCorrect ? atob('aG9wZSB5b3UgYXJlIGhhcHB5') : atob('ZWl0aGVyIGFuc3dlciBpcyB3cm9uZyBvciBpIGp1c3QgbWlzcyBkZWFkIHBlb3BsZQ==');
      } else {
        result.textContent = isCorrect ? atob('eW91IGFyZSByaWdodCE=') : atob('dGhhdCdzIG5vdCBpdA==');
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
          alert(atob('eW91IHNvbHZlZCBhbGwgdGhlIHJpZGRsZXMhIPCfjoE='));
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
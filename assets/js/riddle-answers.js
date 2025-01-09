// Obfuscated answer checking
(function() {
  const _0x5f4e = [
    'Y2FtdXM=',
    'c2t1bGx0ZWNo',
    'bWltaQ==',
    'bWVnaGE=',
    'bmF2eQ=='
  ];

  // Multiple answers for riddle5
  const _0x7a2d = [
    'bWltaQ==',
    'bWluYQ==',
    'bmVlbHU=',
    'c2hlcmxvY2s=',
    'ZWs=',
    'ZXNo',
    'Y2h1bWl0',
    'cGlrYQ==',
    'bmV0YQ==',
    'dnlhcw==',
    'Y2Fzc2l1cw==',
    'c2Fuc2E=',
    'Ymhhdmk='
  ];
  
  const _0x4f3d = {
    'riddle1': _0x5f4e[0],
    'riddle2': _0x5f4e[1],
    'riddle3': [_0x5f4e[2], _0x5f4e[3]],
    'riddle4': _0x5f4e[4]
  };
  
  // Make the checking function private
  window.checkRiddleAnswer = (function() {
    const salt = 'f8k9#mP$';
    return function(id, answer) {
      try {
        // Special case for riddle5 with multiple answers
        if (id === 'riddle5') {
          const processed = answer.toLowerCase().trim();
          return _0x7a2d.some(hash => {
            const check = atob(hash);
            return check === processed;
          });
        }

        // Special case for riddle3 with two possible answers
        if (id === 'riddle3') {
          const processed = answer.toLowerCase().trim();
          return _0x4f3d[id].some(hash => {
            const check = atob(hash);
            return check === processed;
          });
        }

        const hash = _0x4f3d[id];
        if (!hash) return false;
        
        // Add complexity to make it harder to reverse engineer
        const check = atob(hash);
        const processed = answer.toLowerCase().trim();
        
        // Time-variable comparison to prevent timing attacks
        let isMatch = true;
        for(let i = 0; i < check.length; i++) {
          if (check[i] !== processed[i]) {
            isMatch = false;
            // Continue loop to prevent timing analysis
          }
        }
        return isMatch && check.length === processed.length;
      } catch {
        return false;
      }
    };
  })();
})(); 
/*
 * DOTS: Level Two
Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their score until they reach 100.
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) {
      score += 10;
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } 
      
      else if ( score = 100 ) {
        declareWinner();
    
      }
    }
  })
  
  function declareWinner() {
    document.body.classList.add('game-over');
  }

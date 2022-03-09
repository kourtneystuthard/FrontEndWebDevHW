/*
 * DOTS: Level Three
Level 3 also has 3 moving balls but of different sizes! Each ball is therefore worth a different amount of points. The number of points the user should get for each ball is saved in side of a data attribute on the ball HTML elements. You can access the data attribute of an element from the event object by looking at the event target's `dataset` property. When the user clicks on a ball, increment their score based on how many points that ball is worth until they reach 100.
 *
 */


let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) 
    
    {
      score += parseInt(e.target.dataset.increment);
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
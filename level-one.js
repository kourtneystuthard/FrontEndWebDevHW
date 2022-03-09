/*
 * DOTS: Level One
For level 1, implement a single event listener to the `.js-ball` element. When the user clicks on the ball, it should increment their score by 10 points. When the user reaches 100 points, they've beat the level and can move on!
*
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


ballEl.addEventListener('click', function() {
  score += 10;



  if ( score < 100 ) {
    scoreEl.innerText = score;
  } 

  else if ( score = 100 ) {
    declareWinner();
  }
}
);



function declareWinner() {
  document.body.classList.add('game-over');
}
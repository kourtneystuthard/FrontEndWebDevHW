/*Note to self

The method querySelectorAll() will return an array of objects that match (whereas querySelector() only returns the first one)

The method getElementsByClassName will return an array of objects that match the class name

*/



let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation

document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
  e.preventDefault();
  let navSet = document.querySelectorAll('.trulia-nav > nav ul');

  for(let n=0;n<navSet.length;n++){
      navSet[n].classList.toggle('trulia-nav-mobilehide');
  }

});

// Loop through all the cards

for (let i = 0; i < truliaCards.length; i++){
  
// Add a click listener on each card

  truliaCards[i].addEventListener('click',function(){
      
// Remove the featured class

for (let q = 0; q < truliaCards.length; q++){
  truliaCards[q].classList.remove('trulia-featured-grid-item');
} 

// Add the featured class on the one clicked on

this.classList.add('trulia-featured-grid-item');
});
}

  });  




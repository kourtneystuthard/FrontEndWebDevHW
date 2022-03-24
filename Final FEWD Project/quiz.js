
function showResults (){
    let points = 0;
    if (document.querySelector("#choiceA").checked) {
        points += 1;
    }
    if (document.querySelector("#choiceB").checked) {
        points += 2;
    }
    if (document.querySelector("#choiceC").checked) {
        points += 3;
    }
    if (document.querySelector("#choiceD").checked) {
        points += 5;
    }
    if (document.querySelector("#choiceE").checked) {
        points += 10;
    }

    
    
    let results = ' ';
    if (points  === 6) {
        results = "Pepperomia<br> With more than 1,000 known species, these hearty plants boast thick, fleshy leaves that contribute to their drought tolerance and vigor.<br><br>Philodendren<br>Their leaves are typically large, green, and glossy, adding a bit of their native tropical flair to your home.";
    


    } else if (points === 7) {
        results = "Cast Iron Plant<br>The cast-iron plant has earned its reputation as a hard-to-kill houseplant, along with being a beautiful outdoor foliage plant<br><br>Peace Lily<br>The peace lily is an easy-to-grow indoor plant that brings life and color to low-light spots while also purifying the air.";

   
    } else if (points === 8) {
        results = "Snake Plant<br>Snake plants are easy to grow and, in many cases, are nearly indestructible. They will thrive in very bright light or almost dark corners of the house.<br><br>Aloe Vera<br>Aloe vera is commonly grown as a houseplant and gained favor because the gel from its leaves makes a soothing skin salve.";
   
   
    } else if (points === 11) {
        results = "Calathea<br>Calathea are some of the most beautiful tropical plants in the world, with a reputation for being somewhat fussy about their growing conditions.<br><br>Dieffenbachia<br>Dieffenbachia is prized for its big eye-catching leaves. Also known as dumb cane, mother-in-law's tongue, and leopard lily.";
    
    
    } else if (points === 12) {
        results = "Alocasia<br> The Alocasia, also referred to as elephant's ear, features stunning foliage that can become the centerpiece of a garden or room.<br><br>Caladium<br>The caladium's large, heart- or arrow-shaped, paper-thin leaves come in a striking array of colors and patterns.";
 
 
    } else if (points === 13) {
        results = "Monstera<br>Monstera are famous for their natural leaf-holes, which has led to the rise of their nickname, Swiss Cheese Plant.<br><br>Croton<br>The croton plant has colorful variegated foliage and nearly limitless leaf forms.";
    }

    
    document.querySelector("#decision").innerHTML = results;
    
    console.log(results)
    }
    



  

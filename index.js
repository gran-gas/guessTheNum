// program data:
var secretNum = Math.floor(Math.random() * 50) + 1;
var lifes = 5;
var score = 0;

var actualLifes = document.getElementById('lifes');

actualLifes.innerHTML = lifes;

document.getElementById("score").innerHTML = score

var submitter = document.getElementById('try');

submitter.onclick = function checker() {
    
    var userInput = document.getElementById("userInput").value;

    if (isNaN(userInput) == true || isLetter(userInput) == true || userInput == "") {

        document.getElementById("clue").style.color = "darkred";
        document.getElementById("clue").innerHTML = "No has ingresado un número";
        return false;
    }

    if (userInput == secretNum){

        document.getElementById("winner").style.display = "block";

        score = 100 * lifes;

        document.getElementById("score").innerHTML = score;

        document.getElementById("retry").style.display = "block";

        submitter.style.display = "none";
        return false;
    
    }
    else{
        lifes--;

        actualLifes.innerHTML = lifes;

        if (userInput > secretNum){
            document.getElementById("clue").style.color = "black";
            document.getElementById("clue").innerHTML = "El numero secreto es MENOR";
        }else{
            document.getElementById("clue").style.color = "black";
            document.getElementById("clue").innerHTML = "El numero secreto es MAYOR";
        }

        if (lifes <= 2){

            document.getElementById("lifes-box").style.backgroundColor = "red";
            document.getElementById("lifes-box").style.border = "none";
        }

        if (lifes == 0 ){

            document.getElementById("looser").style.display = "block";
            document.getElementById("retry").style.display = "block";
            submitter.style.display = "none";
            return false;
        }
    }




}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }



// prompt user for their guess 

// if correct: let the user know they won

// if incorrect: let the user know
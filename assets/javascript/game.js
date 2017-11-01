// //define the alphabet array, although I'm sure there is a better way to do this

// var alphabet = ["a", "b", "c", "d", "e", "f", "g" ,"h", "i", "j", "k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// // define wins variable 


// var userText = document.getElementById("user-wins");


//   document.onkeyup = function(event) {
//         userText.textContent = event.key;
//       };

//    	for (var i = 0; i < alphebet.length; i++) {
//         console.log("I love " + vegetables[i]);
//       }

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeypress = function(event) {

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);


   // When the user presses a key, it will run the following function...

    var userGuess = event.key;

    if (userGuess === computerChoice){
        wins++;
    } else {
        guesses--;
    }

    if(guesses === 0){
        losses++;


    }  

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guesses-so-far').innerHTML="Guesses so far: " + userGuess;
   }
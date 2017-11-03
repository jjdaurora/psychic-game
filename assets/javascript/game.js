// here is the alphabet from which the computer will choose a random letter

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// defining my variables for when the user wins, loses, the count of guesse per round, and the random letter genetor code

var wins = 0;
var losses = 0;
var guesses = 10;
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);

// setting function for on key event; 
// when the user presses a key, the following things will happen...

document.onkeypress = function(event) {

    var userGuess = event.key;

// if the user user wins, increase wins by 1, retrigger another guess by the computer, and cler the guesses so far field
    
    if (userGuess === computerChoice){
        wins++;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        // post the new computer choice to the console for testing
        console.log(computerChoice);
        document.getElementById('guesses-so-far').innerHTML = "" ; 
        document.getElementById('game-alert').innerHTML = "<span style='color: green;'>You won that round</span>";
    } 

    else {
        guesses--;

    }

// if the user user loses, increase losses by 1, retrigger another guess by the computer, and cler the guesses so far field

    if(guesses === 0){
        losses++;
        guesses = 10;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        // post the new computer choice to the console for testing
        console.log(computerChoice);
        document.getElementById('guesses-so-far').innerHTML = "" ; 
        document.getElementById('game-alert').innerHTML = "<span style='color: red;'>You lost that round</span>";

    }  

// insert the score, guesses remaing, and guess so far into the HTML
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML =  guesses;
    document.getElementById('guesses-so-far').innerHTML += " " + userGuess + " ";
}
 
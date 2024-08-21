var words = ["the little mermaid"];
var randomIndex = Math.floor(Math.random() * words.length);
var selectedWord = words[randomIndex];


var wordElement = document.getElementById("word");
wordElement.textContent = hiddenWord;

function checkGuess(){
    var guessInput = document.getElementById("guess-input");
    var guess = guessInput.value.toLowerCase()

    if(guess === selectedWord){
        displayMessage("Congratulation!! YOU HAVE GUESSED IT 👍");
    }
    else{
        displayMessage("OOPS!! TRY AGAIN 👎");

    }
    guessInput.value = "";
}

function displayMessage(message){
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
}

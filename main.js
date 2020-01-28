// generate a random number
var secretNum = Math.floor((Math.random() * 100) + 1);


// Attempts counter
var tryCount = 0;

// ask the user to guess the random number
var guess = 0;

// input and output
var input = document.querySelector("#input");
var output = document.querySelector("#output");

// button stuff
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", playGame, false);

function playGame()
{
    guess = parseInt(input.value);

// if they guess wrong, tell them if they were too high or too low and have them guess again
    if (guess == 69) {
    output.innerHTML = 'I know you too well, Joe. Guess again.';
    tryCount +=1;
    }
    else if (guess < secretNum) {
output.innerHTML = 'Sorry. You guessed too low. Try again, but pick a higher number. I believe in you! :)';
tryCount +=1;
}

    else if (guess > secretNum) {
output.innerHTML = 'Sorry. You guessed too high. Try again, but pick a lower number. I think you might get it this time. Or maybe not :)';
tryCount += 1;
}

// when the user guesses correctly, tell them that they guessed correctly and tell them the number of tries it took them

    else {
        tryCount +=1;
output.innerHTML = "That's it! " + secretNum + " was the secret number! You guessed correctly! It only took you " + tryCount + " tries to figure it out.";
    }
}





// animate the button
var classes = ["light", "", "heavy", "extraheavy"];
var i = 1;
$("#toggleweight").click(function () {
  $(".btn").removeClass(classes[i]);
  i++;
  if (i >= classes.length) {
    i = 0;
  }
  $(".btn").addClass(classes[i]);
});
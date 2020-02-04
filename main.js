// generate a random number
var secretNum = Math.floor((Math.random() * 100) + 1);


// Attempts counter
var tryCount = 1;

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
        if (guess < secretNum) {
    output.innerHTML = '<span>That was attempt number ' + tryCount + '.' + '<br></span> You guessed too low. <br>Try again. <br><span>I believe in you! :)</span';
    tryCount +=1;
    }

    else if (guess > secretNum) {
    output.innerHTML = '<span>That was attempt number ' + tryCount + '.' + '<br></span> You guessed too high. <br>Try again. <br><span>I think you might get it this time. Or maybe not :)</span>';
    tryCount += 1;
    }

// when the user guesses correctly, tell them that they guessed correctly and tell them the number of tries it took them

    else if (guess == secretNum) {
    output.innerHTML = "That's it! " + secretNum + " was the secret number! <br>You guessed correctly! <span>It only took you " + tryCount + " tries to figure it out.</span>";
    }

    // If a non-number is submitted
    else {
        output.innerHTML = 'That is not a valid number. <br> <span>Try again!</span>';
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
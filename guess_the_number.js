
let visitorsName = prompt("Hello! What's your name?");
alert("Hi " +visitorsName+ "! We are gonna play a game. I chose a number and you will have to guess which number i have in mind.");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lowestNumber = prompt ("What is the lowest number i can chose?");
let highestNumber = prompt ("Thanks! And what is the highest number?")
  
let winningNumber = getRandomInt(lowestNumber, highestNumber);
console.log(winningNumber);

let maxAttempts = 6;

let guessedNumber = prompt ("Alright! Time to start guessing. Enter a number between " + lowestNumber + " and " + highestNumber + ". You have " + (maxAttempts-1) + " attempts left");
let count = 1;


while (guessedNumber != winningNumber){    
    count ++ 
    console.log(count); 
    let attemptsLeft = maxAttempts-count;
    if (attemptsLeft>0){
     alert("Please try again. You have " + attemptsLeft + " attempt(s) left");
     guessedNumber = prompt ("Enter a number between 0 and 5");
    } else {alert("Sorry, you lost. No attempts left."); break;}
    
}

if (guessedNumber == winningNumber){
    alert ("You won in " + count + " attempt(s)!");
}
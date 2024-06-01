//Create function getComputerChoice, that returns values rock or paper or scissors. Store it in a variable computerChoice.

function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let computer = (getComputerChoice(3));
let computerChoice;

if (computer === 0) {
    computerChoice = "scissors";
}
else if (computer === 1) {
    computerChoice = "rock";}

else {
    computerChoice = "paper";
}

console.log(`Computer chose ${computerChoice}!`);

//Create function getHumanChoice that takes user input with a prompt and returns one of three values: rock or paper or scissors. Store it in a variable humanChoice.

let humanChoice = prompt(`Chose something, you know that computer has chosen ${computerChoice}, so it has to be en easy choice.`);

function getHumanChoice(){
    if (humanChoice.toLowerCase() == "rock") {
        console.log("So you are going with rock");
    } else if (humanChoice.toLowerCase() == "paper") {
        console.log("So you are goind with paper");
    } else if (humanChoice.toLowerCase() == "scissors") {
        console.log("So you are going with scissors");
    } else {
        console.log('Please play along and type in one of the following: "Rock" or "Paper" or "Scissors"');
        setTimeout(() => {getHumanChoice()}, 2000);
    }
}

//Declare variables for computerScore and humanScore. Set both to 0.

let humanScore = 0;
let computerScore = 0;


function playRound(computerChoice, humanChoice) {
    if ((computerChoice == "scissors") && (humanChoice == "paper")) {
        console.log("You lose"), computerScore + 1;
    } else if ((computerChoice == "scissors") &&  (humanChoice == "rock")) {
        console.log("You win"), humanScore + 1;
    } else if ((computerChoice == "paper") &&  (humanChoice == "scissors")) {
        console.log("You lose"), computerScore + 1;
    } else if ((computerChoice == "paper") &&  (humanChoice == "rock")) {
        console.log("You win", humanScore + 1);
    } else if ((computerChoice == "rock") &&  (humanChoice == "paper")) {
        console.log("You lose"), computerScore + 1;
    } else if ((computerChoice == "rock") &&  (humanChoice == "scissors")) {
        console.log("You win", humanScore + 1);
    } else console.log("That's a draw!"), computerScore + 1, humanScore + 1;
}

playRound(computerChoice, humanChoice.toLowerCase());

//Create function playGame, that calles playRound function 5 Times.

    //Create function playRound with two parameters: computerChoice and humanChoice.toLowerCase.
    //Inside the function create logic that compares computerChoice and humanChoice, declares winner, increments his score variable and prints who won to the console.

//When one of scores hits 5, display who won tho the console.
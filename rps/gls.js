console.log("Janken");

//Computer choice

function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let computer = (getComputerChoice(3));
let cres;

if (computer === 0) {
    cres = "scissors";
}
else if (computer === 1) {
    cres = "rock";}

else {
    cres = "paper";
}

console.log(`Computer chose ${cres}!`);

//Human choice

let human;

function getHumanChoice(){
    let human = prompt(`Chose something, you know that computer has chosen ${cres}, so it has to be en easy choice.`);
    if (human.toLowerCase() == "rock") {
        console.log("So you are going with rock");
    } else if (human.toLowerCase() == "paper") {
        console.log("So you are goind with paper");
    } else if (human.toLowerCase() == "scissors") {
        console.log("So you are ging with scissors");
    } else {
        console.log('Please play along and type in one of the following: "Rock" or "Paper" or "Scissors"');
        setTimeout(() => {getHumanChoice()}, 2000);
    }
}

let computerChoice = cres;
let humanChoice = human;

setTimeout(() => {getHumanChoice()}, 1500);

//Score

let humanScore = 0;
let computerScore = 0;

function playRound(human, cres) {
    if ((cres == "scissors") && (human == "paper")) {
        console.log("You lose"), computerScore + 1;
    } else if ((cres == "scissors") &&  (human == "rock")) {
        console.log("You win"), humanScore + 1;
    } else if ((cres == "paper") &&  (human == "scissors")) {
        console.log("You lose"), computerScore + 1;
    } else if ((cres == "paper") &&  (human == "rock")) {
        console.log("You win", humanScore + 1);
    } else if ((cres == "rock") &&  (human == "paper")) {
        console.log("You lose"), computerScore + 1;
    } else if ((cres == "rock") &&  (human == "scissors")) {
        console.log("You win", humanScore + 1);
    } else console.log("That's a draw!"), computerScore + 1, humanScore + 1;
}

console.log(humanScore);
console.log(computerScore);


playRound(human, cres);

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection.toLowerCase(), computerSelection);

// create computer score and human score variables and increment it with each round

// wrap it into a round logic

// wrap everything into a game logic
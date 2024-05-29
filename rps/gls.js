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

setTimeout(() => {getHumanChoice()}, 1500);

// convert user's input into one of three variables

// create computer score and human score variables and increment it with each round

// wrap it into a round logic

// wrap everything into a game logic
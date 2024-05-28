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

console.log(`Compute chose ${cres}!`);

//Human choice

function getHumanChoice(){
    let human = prompt("chose something, paper for example");
}

setTimeout(() => {getHumanChoice()}, 1500);

// convert user's input into one of three variables

// create computer score and human score variables and increment it with each round

// wrap it into a round logic

// wrap everything into a game logic
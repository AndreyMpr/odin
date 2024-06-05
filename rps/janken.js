function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);

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

    return computerChoice;
};

function getHumanChoice(){
    
    let humanChoice = prompt(`Chose something, you know that computer has chosen ${computerChoice}, so it has to be en easy choice.`);

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
    return humanChoice;
};


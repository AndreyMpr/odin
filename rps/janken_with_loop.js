function getComputerChoice() {
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

function getHumanChoice() {
    
    let humanChoice = prompt(`Chose something, you know that computer has chosen ${computerSelection}, so it has to be en easy choice.`);

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

function playRound(){
            
}

if ((computerSelection == "scissors") && (humanSelection == "paper")) {
    console.log("You lose"), computerScore++;

} else if ((computerSelection == "scissors") &&  (humanSelection == "rock")) {
    console.log("You win"), humanScore++;

} else if ((computerSelection == "paper") &&  (humanSelection == "scissors")) {
    console.log("You win"), humanScore++;

} else if ((computerSelection == "paper") &&  (humanSelection == "rock")) {
    console.log("You lose", computerScore++);

} else if ((computerSelection == "rock") &&  (humanSelection == "paper")) {
    console.log("You win"), humanScore++;

} else if ((computerSelection == "rock") &&  (humanSelection == "scissors")) {
    console.log("You lose", computerScore++);

} else {console.log("That's a draw!")};   

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

 
        
    }

    
};

playGame();
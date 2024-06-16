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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        function playRound(){
            
        }
        
    }

    
};

playGame();
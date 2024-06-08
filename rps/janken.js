function playGame() {

    let humanScore = 0;
    let computerScore = 0;

console.log("q1");

    function playRound() {

        console.log("q2");

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
            console.log("q3");
            return computerChoice;
        };

        function getHumanChoice(){
            console.log("q4");
    
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
            console.log("q5");
            return humanChoice;
            
        };

        console.log("q6");

        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        console.log("q7");

        getComputerChoice();
        getHumanChoice();

        console.log("q8");

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

        console.log("q9");

    }

    console.log("q10");

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log("q11");

    return humanScore, computerScore;
    


};
console.log("q12");

console.log(playGame());
console.log("q13");
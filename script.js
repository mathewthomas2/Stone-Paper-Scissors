function getComputerChoice(){

    let compChoice = Math.floor(Math.random()*3)

    if (compChoice == 0){
        return "rock"
    }

    else if (compChoice == 1){
        return "paper"
    }

    else return "scissors"
}

function getHumanChoice(){
    return prompt("Enter your choice: ")
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === null || humanChoice === "")
        return
    else{
        if (computerChoice === humanChoice)
            console.log(`${humanChoice} VS ${computerChoice} -> Draw`);
        else if ((computerChoice == 'rock' && humanChoice=='scissors') ||
                (computerChoice == 'paper' && humanChoice=='rock') ||
                (computerChoice == 'scissors' && humanChoice=='paper')){
                console.log(`${humanChoice} VS ${computerChoice} -> Computer wins this round`);
                computerScore++
        }
        else{
            console.log(`${humanChoice} VS ${computerChoice} -> You win this round`);
            humanScore++
        }
    }
}


function playGame(){
    for (let i=0; i<5; i++){
        let humanInput = getHumanChoice()
        let humanSelection = humanInput ? humanInput.toLowerCase(): null;
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    if (computerScore == humanScore)
        console.log("Both are equalized!")
    else if (computerScore > humanScore){
        console.log("Computer Won! You lost")
        alert("Computer Won! You lost.")
    }
    else{
        console.log("You Won! Computer lost")
        alert("You Won! Computer lost")
    }
    console.log(`Final Score -> You: ${humanScore}  Computer: ${computerScore}`);
}

playGame();
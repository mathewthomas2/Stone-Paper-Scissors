function getComputerChoice(){

    let compChoice = Math.floor(Math.random()*3)

    if (compChoice == 0){
        return "Rock"
    }

    else if (compChoice == 1){
        return "Paper"
    }

    else return "Scissors"
}

let computerScore = 0;
let humanScore = 0;

const choices = document.getElementById("choices");
const score = document.getElementById("score");
const container = document.getElementById("container");
const body = document.body;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const heading = document.querySelector("h2")

function playRound(humanChoice, computerChoice){
    if (computerChoice === humanChoice)
        choices.innerHTML = `<strong>${humanChoice}</strong> vs <strong>${computerChoice}</strong> ➜ Draw`
    else if ((computerChoice == 'Rock' &&humanChoice=='Scissors') ||
        (computerChoice == 'Paper' && humanChoice=='Rock') ||
        (computerChoice == 'Scissors' && humanChoice=='Paper')){
        choices.innerHTML = `<strong>${humanChoice}</strong> vs <strong>${computerChoice}</strong> ➜ Computer wins`
        computerScore++
    }
    else{
        choices.innerHTML = `<strong>${humanChoice}</strong> vs <strong>${computerChoice}</strong> ➜ You won`
        humanScore++
    }
    score.textContent = `Score ➜ You: ${humanScore} | Computer: ${computerScore}`;

    if (computerScore == 5 || humanScore == 5){
        const winner = humanScore == 5 ? "You won!" : "Computer Won!"
        score.textContent = winner;
        choices.textContent = ""
        
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        heading.style.display = "none";

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        body.appendChild(playAgain);
        
        choices.style.display =  "none";
        playAgain.addEventListener("click", ()=>{
        computerScore = 0;
        humanScore = 0;
        score.textContent = "";
        
        rock.style.display = "inline-block";
        paper.style.display =  "inline-block";
        scissors.style.display =  "inline-block";
        choices.style.display =  "block";
        heading.style.display = "block";

        playAgain.remove();
        });
    }
}

rock.addEventListener("click", ()=>{
    playRound("Rock", getComputerChoice());
})

paper.addEventListener("click", ()=>{
    playRound("Paper", getComputerChoice());
})

scissors.addEventListener("click", ()=>{
    playRound("Scissors", getComputerChoice());
})

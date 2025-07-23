function getComputerChoice(){

    let compChoice = Math.random()*100

    if (compChoice<=33){
        return "Rock"
    }

    else if (compChoice<=66){
        return "Papper"
    }

    else return "Scissors"
}

function getHumanChoice(){
    return prompt("Enter your choice: ")
}

function playGame(comp, hum){
    console.log('Points for Computer:', comp)
    console.log('Points for Human: ', hum)
    if (comp == hum)
        console.log("Both are equalized!")
    else if (comp > hum){
        console.log("Computer Won! You lost")
        alert("Computer Won! You lost.")
    }
    else{
        console.log("You Won! Computer lost")
        alert("You Won! Computer lost")
    }
}
let comp=0, hum=0;

for (let i=0; i<5; i++){
    let computer = getComputerChoice()
    let human = getHumanChoice()
    if (human == null || human == "")
        continue
    else{
        if (computer == human)
            console.log(`${human} VS ${computer} -> Draw`);
        else if ((computer == 'Rock' && human=='Scissors') ||
                (computer == 'Papper' && human=='Rock') ||
                (computer == 'Scissors' && human=='Papper')){
                console.log(`${human} VS ${computer} -> Computer wins this round`);
                comp++
        }
        else{
            console.log(`${human} VS ${computer} -> You win this round`);
            hum++
        }
    }
    
}

playGame(comp, hum)
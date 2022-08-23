function playRound(playerSelection, computerSelection) {
    const computerResult = `Computer chose ${computerSelection}.`
    let computerWins = 0
    let playerWins = 0

    if (playerSelection == computerSelection) {
        return console.log(`${computerResult} It's a draw.`);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`${computerResult} You lost.`);
        return computerWins++
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`${computerResult} You won.`);
        return playerWins++
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`${computerResult} You lost.`);
        return computerWins++
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`${computerResult} You won.`);
        return playerWins++
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`${computerResult} You lost.`);
        return computerWins++
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`${computerResult} You won.`);
        return playerWins++
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(round) {
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`);
        
    }
}


let playerChoice = prompt("Rock, paper, scissors").toLowerCase();
let computerChoice = getComputerChoice();


playRound(playerChoice, computerChoice);
game(playRound);
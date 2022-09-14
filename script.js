function playRound(playerSelection, computerSelection) {
    const computerResult = `Computer chose ${computerSelection}.`
    let computerWins = 0
    let playerWins = 0

    if (playerSelection == computerSelection) {
        console.log(`${computerResult} It's a draw.`);
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`${computerResult} You lost.`);
        computerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`${computerResult} You won.`);
        playerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`${computerResult} You lost.`);
        computerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`${computerResult} You won.`);
        playerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`${computerResult} You lost.`);
        computerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`${computerResult} You won.`);
        playerWins++
        return console.log(`You: ${playerWins}       Computer: ${computerWins}`);
    }

}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(round, computerchoise) {
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 2; i < 6; i++) {
        console.log(`Round ${i}`);
        round(playerChoice = prompt("Rock, paper, scissors").toLowerCase(), getComputerChoice());
    }
}

console.log("Round 1")
let playerChoice = prompt("Rock, paper, scissors").toLowerCase();
let computerChoice = getComputerChoice();


playRound(playerChoice, computerChoice);
game(playRound, getComputerChoice);
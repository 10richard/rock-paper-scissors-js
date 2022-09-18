const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let playerScore = 0;
let compScore = 0;

console.log(`You: ${playerScore} || Computer: ${compScore}`);

function setScissors() {
    const playerChoice = "scissors";
    return getCompChoice(playerChoice);
};

function setRock() {
    const playerChoice = "rock";
    return getCompChoice(playerChoice);
}

function setPaper() {
    const playerChoice = "paper";
    return getCompChoice(playerChoice);
}

function getCompChoice (playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    let ranChoose = Math.floor(Math.random() * 3);
    let compChoice = choices[ranChoose];
    checkPlayerSelection(playerChoice, compChoice);
}

function checkPlayerSelection(playerChoice, compChoice) {
    if (playerChoice === "rock") {
        playerRock(compChoice);
    } else if (playerChoice === "paper") {
        playerPaper(compChoice);
    } else if (playerChoice === "scissors") {
        playerScissors(compChoice);
    }
}

function playerRock(compChoice) {
        if (compChoice === "rock") {
            tie();
        } else if (compChoice === "paper") {
            compWin();
        } else if (compChoice === "scissors") {
            playerWin();
        } else {
            alert("Error with compChoice");
        }
}

function playerPaper(compChoice) {
        if (compChoice === "rock") {
            playerWin();
        } else if (compChoice === "paper") {
            tie();
        } else if (compChoice === "scissors") {
            compWin();
        } else {
            alert("Error with compChoice");
        }
}

function playerScissors(compChoice) {
        if (compChoice === "rock") {
            compWin();
        } else if (compChoice === "paper") {
            playerWin();
        } else if (compChoice === "scissors") {
            tie();
        } else {
            alert("Error with compChoice");
        }
}

function playerWin() {
    playerScore++;
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You won!");
}

function compWin() {
    compScore++;
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You lost!");
}

function tie() {
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You drew!");
}

scissors.addEventListener('click', setScissors);
rock.addEventListener('click', setRock);
paper.addEventListener('click', setPaper);
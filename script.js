const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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

    }
}

function playerRock(compChoice) {
    for (let i = 0; i < 5; i++) {
        if (compChoice === "rock") {
            tie();
        } else if (compChoice === "paper") {
            compWin();
        } else if (compChoice === "scissors") {
            playerWin();
        }
    }
}

function playerWin() {
    console.log("You won!");
}

function compWin() {
    console.log("You lost!");
}

function tie() {
    console.log("You drew!");
}

scissors.addEventListener('click', setScissors);
rock.addEventListener('click', setRock);
paper.addEventListener('click', setPaper);
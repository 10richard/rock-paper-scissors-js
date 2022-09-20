let playerScore = 0;
let compScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreBox = document.getElementById("playerScore");
const compScoreBox = document.getElementById("compScore");
const gameMessage = document.getElementById("gameMessage");
const announceWinner = document.getElementById("announceWinner");
const gameOver = document.getElementById("gameOverContainer");
const gameWinner = document.getElementById("gameWinnerContainer");
const resetWinner = document.getElementById("resetWinner");
const resetLoser = document.getElementById("resetLoser");

console.log(`You: ${playerScore} || Computer: ${compScore}`);

function setScissors() {
    const playerChoice = "scissors";
    scissors.removeEventListener('click', setScissors);
    rock.removeEventListener('click', setRock);
    paper.removeEventListener('click', setPaper);
    return getCompChoice(playerChoice);
};

function setRock() {
    const playerChoice = "rock";
    scissors.removeEventListener('click', setScissors);
    rock.removeEventListener('click', setRock);
    paper.removeEventListener('click', setPaper);
    return getCompChoice(playerChoice);
}

function setPaper() {
    const playerChoice = "paper";
    scissors.removeEventListener('click', setScissors);
    rock.removeEventListener('click', setRock);
    paper.removeEventListener('click', setPaper);
    return getCompChoice(playerChoice);
}

function getCompChoice (playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    let ranChoose = Math.floor(Math.random() * 3);
    let compChoice = choices[ranChoose];
    gameMessage.innerHTML = `You chose ${playerChoice}. Enemy has chosen ${compChoice}.`
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
    playerScoreBox.innerHTML = `${playerScore}`;
    announceWinner.innerText = `You win.`
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You won!");
    checkGameWinner();
}

function compWin() {
    compScore++;
    compScoreBox.innerHTML = `${compScore}`;
    announceWinner.innerText = `Enemy wins.`
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You lost!");
    checkGameWinner();
}

function tie() {
    announceWinner.innerText = `It's a draw.`
    console.log(`You: ${playerScore} || Computer: ${compScore}`);
    console.log("You drew!");
    checkGameWinner();
}

function checkGameWinner() {
    if (playerScore === 5) {
        gameWinnerScreen();
    } else if (compScore === 5) {
        gameOverScreen();
    } else {
        scissors.addEventListener('click', setScissors);
        rock.addEventListener('click', setRock);
        paper.addEventListener('click', setPaper);
    }
}

function gameWinnerScreen() {
    gameWinner.classList.add('show');
    checkReset();
}

function gameOverScreen() {
    gameOver.classList.add('show');
    checkReset();
}

function checkReset() {
    resetLoser.addEventListener('click', resetGame);
    resetWinner.addEventListener('click', resetGame);
}

function resetGame() {
    resetLoser.removeEventListener('click', resetGame);
    resetWinner.removeEventListener('click', resetGame);
    gameWinner.classList.remove('show');
    gameOver.classList.remove('show');
    scissors.addEventListener('click', setScissors);
    rock.addEventListener('click', setRock);
    paper.addEventListener('click', setPaper);
    playerScore = 0;
    compScore = 0;
    playerScoreBox.innerHTML = `${playerScore}`;
    compScoreBox.innerHTML = `${compScore}`;
}

scissors.addEventListener('click', setScissors);
rock.addEventListener('click', setRock);
paper.addEventListener('click', setPaper);
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function changeScissors() {
    return playRound()
};

function changeRock() {
    return playRound()
}

function changePaper() {
    return playRound()
}

function playRound (choice) {

}

function playerWin () {
    console.log("You won!");
}

function compWin () {
    console.log("You lost!");
}

function draw () {
    console.log("You drew!");
}

scissors.addEventListener('click', changeScissors);
rock.addEventListener('click', changeRock);
paper.addEventListener('click', changePaper);
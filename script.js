const playerSelections = document.querySelectorAll(".playerSelection");

function playRound(e) {
    console.log("test");
};

playerSelections.forEach(playerSelection => playerSelection.addEventListener('click', playRound));
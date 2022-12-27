const buttons = document.getElementsByClassName("btn");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        runGame(gameType);
        console.log(gameType);
    });
}

function runGame(gameType) {
    displayUserChoice(gameType);
    calculateComputerChoice();
}


function displayUserChoice(gameType) {
    if (gameType === "user-rock") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (gameType === "user-paper") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (gameType === "user-scissors") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    }
}

function calculateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 0) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (computerChoice === 1) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (computerChoice === 2) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    }

}

function compareChoices() {

}

function displayWinner() {

}

function incrementScores() {

}
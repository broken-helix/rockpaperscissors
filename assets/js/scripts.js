const buttons = document.getElementsByClassName("btn");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        let computerChoice = calculateComputerChoice();
        runGame(gameType, computerChoice);
    });
}

function runGame(gameType, computerChoice) {
    
    displayUserChoice(gameType);

    if (gameType === compChoice) {
        document.getElementById("win-state").innerText = "DRAW";
    } else if (gameType === "rock" && computerChoice === "paper") {
        document.getElementById("win-state").innerText = "LOSE";
    } else if (gameType === "rock" && computerChoice === "scissors") {
        document.getElementById("win-state").innerText = "WIN";
    } else if (gameType === "paper" && computerChoice === "rock") {
        document.getElementById("win-state").innerText = "WIN";
    } else if (gameType === "paper" && computerChoice === "scissors") {
        document.getElementById("win-state").innerText = "LOSE";
    } else if (gameType === "scissors" && computerChoice === "rock") {
        document.getElementById("win-state").innerText = "LOSE";
    } else if (gameType === "scissors" && computerChoice === "paper") {
        document.getElementById("win-state").innerText = "WIN";
    } 
}


function displayUserChoice(gameType) {
    if (gameType === "rock") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (gameType === "paper") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (gameType === "scissors") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    }
}

function calculateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 0) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
        computerChoice = "scissors";
    }

}

function compareChoices() {

}

function displayWinner() {

}

function incrementScores() {

}
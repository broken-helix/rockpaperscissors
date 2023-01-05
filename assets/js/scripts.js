const buttons = document.getElementsByClassName("btn");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        let computerChoice = calculateComputerChoice();
        runGame(gameType, computerChoice);
    });
};

function displayUserChoice(gameType) {
    if (gameType === "rock") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
        document.getElementById("paper").style = "";
        document.getElementById("scissors").style = "";
    } else if (gameType === "paper") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
        document.getElementById("rock").style = "";
        document.getElementById("scissors").style = "";
    } else if (gameType === "scissors") {
        document.getElementById("user-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
        document.getElementById("paper").style = "";
        document.getElementById("rock").style = "";
    }
};

function calculateComputerChoice() {

    computerChoice = Math.floor(Math.random() * 3);

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

    return computerChoice;
};

function runGame(gameType, computerChoice) {

    displayUserChoice(gameType);

    if (gameType === computerChoice) {
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
    
    incrementScores();


};

function incrementScores() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    let winState = document.getElementById("win-state");

    if (winState.innerText === "WIN") {
        document.getElementById("user-score").innerText = ++userScore;
    } else if (winState.innerText === "LOSE") {
        document.getElementById("computer-score").innerText = ++computerScore;
    } 
};
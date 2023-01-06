const buttons = document.getElementsByClassName("btn");
const computerChoiceElement = document.getElementById("computer-choice");
const playerChoiceElement = document.getElementById("user-choice");
const rockSymbol = '<i class="fa-regular fa-hand-back-fist"></i>';
const paperSymbol = '<i class="fa-regular fa-hand"></i>';
const scissorsSymbol = '<i class="fa-regular fa-hand-scissors"></i>';

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        button.classList.add("active");
        let computerChoice = calculateComputerChoice();
        runGame(gameType, computerChoice);
    });
};

function displayUserChoice(gameType) {
    if (gameType === "rock") {
        playerChoiceElement.innerHTML = rockSymbol;
        paperSymbol.style = "";
        scissorsSymbol.style = "";
    } else if (gameType === "paper") {
        playerChoiceElement.innerHTML = paperSymbol;
        rockSymbol.style = "";
        scissorsSymbol.style = "";
    } else if (gameType === "scissors") {
        playerChoiceElement.innerHTML = scissorsSymbol;
        paperSymbol.style = "";
        rockSymbol.style = "";
    }
};

function calculateComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoiceElement.innerHTML = rockSymbol;
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoiceElement.innerHTML = paperSymbol;
        computerChoice = "paper";
    } else if (computerChoice === 2) {
        computerChoiceElement.innerHTML = scissorsSymbol;
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
const buttons = document.getElementsByClassName("btn");
const computerChoiceElement = document.getElementById("computer-choice");
const playerChoiceElement = document.getElementById("user-choice");
const rockSymbol = '<i class="fa-regular fa-hand-back-fist"></i>';
const paperSymbol = '<i class="fa-regular fa-hand"></i>';
const scissorsSymbol = '<i class="fa-regular fa-hand-scissors"></i>';
const defaultSymbol = '<i class="fa-solid fa-question"></i>';
const winState = document.getElementById("win-state");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        button.classList.add("active");
        runGame(gameType);
        computerChoiceElement.innerHTML = defaultSymbol;
        setTimeout(() => {
            button.classList.remove("active");
        }, 2000);
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win");
        winState.classList.remove("lose");
        winState.classList.remove("draw");
    });
};

function displayUserChoice(gameType) {
    if (gameType === "rock") {
        playerChoiceElement.innerHTML = rockSymbol;
        document.getElementById("paper").classList.remove("active");
        document.getElementById("scissors").classList.remove("active");
    } else if (gameType === "paper") {
        playerChoiceElement.innerHTML = paperSymbol;
        document.getElementById("rock").classList.remove("active");
        document.getElementById("scissors").classList.remove("active");
    } else if (gameType === "scissors") {
        playerChoiceElement.innerHTML = scissorsSymbol;
        document.getElementById("paper").classList.remove("active");
        document.getElementById("rock").classList.remove("active");
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
    setTimeout(() => {
        computerChoice = calculateComputerChoice();
        if (gameType === computerChoice) {
            winState.innerText = "DRAW";
            winState.classList.add("draw");
        } else if (gameType === "rock" && computerChoice === "paper") {
            winState.innerText = "LOSE";
            winState.classList.add("lose");
        } else if (gameType === "rock" && computerChoice === "scissors") {
            winState.innerText = "WIN";
            winState.classList.add("win");
        } else if (gameType === "paper" && computerChoice === "rock") {
            winState.innerText = "WIN";
            winState.classList.add("win");
        } else if (gameType === "paper" && computerChoice === "scissors") {
            winState.innerText = "LOSE";
            winState.classList.add("lose");
        } else if (gameType === "scissors" && computerChoice === "rock") {
            winState.innerText = "LOSE";
            winState.classList.add("lose");
        } else if (gameType === "scissors" && computerChoice === "paper") {
            winState.innerText = "WIN";
            winState.classList.add("win");
        }    
    incrementScores();
    }, 2000);
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
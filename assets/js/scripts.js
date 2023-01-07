const buttons = document.getElementsByClassName("btn");
const computerChoiceElement = document.getElementById("computer-choice");
const playerChoiceElement = document.getElementById("user-choice");
const rockSymbol = '<i class="fa-regular fa-hand-back-fist"></i>';
const paperSymbol = '<i class="fa-regular fa-hand"></i>';
const scissorsSymbol = '<i class="fa-regular fa-hand-scissors"></i>';
const defaultSymbol = '<i class="fa-solid fa-question"></i>';
const winState = document.getElementById("win-state");

let canPlay = true;

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (canPlay) {
            canPlay = false;
            let gameType = this.getAttribute("id");
            button.classList.add("active");
            runGame(gameType);
            computerChoiceElement.innerHTML = defaultSymbol;
            setTimeout(() => {
                button.classList.remove("active");
                canPlay = true;
            }, 2000);
        }
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win","lose", "draw");
        playerChoiceElement.classList.remove("winning-score", "losing-score");
        computerChoiceElement.classList.remove("winning-score", "losing-score");
        
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
    const winState = document.getElementById("win-state");
    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");
    if (winState.innerText === "WIN") {
        userScoreElement.innerText = ++userScore;
        playerChoiceElement.classList.add("winning-score");
        computerChoiceElement.classList.add("losing-score");
    } else if (winState.innerText === "LOSE") {
        computerScoreElement.innerText = ++computerScore;
        playerChoiceElement.classList.add("losing-score");
        computerChoiceElement.classList.add("winning-score");
    }
    if ((userScore === computerScore) && (userScore > 0)) {
        userScoreElement.classList.remove("winning-score", "losing-score");
        computerScoreElement.classList.remove("winning-score", "losing-score");
        userScoreElement.classList.add("equal-score");
        computerScoreElement.classList.add("equal-score");
    } else if (userScore > computerScore) {
        userScoreElement.classList.remove("winning-score", "losing-score", "equal-score");
        computerScoreElement.classList.remove("winning-score", "losing-score", "equal-score");
        userScoreElement.classList.add("winning-score");
        computerScoreElement.classList.add("losing-score");
    } else if (computerScore > userScore) {
        userScoreElement.classList.remove("winning-score", "losing-score", "equal-score");
        computerScoreElement.classList.remove("winning-score", "losing-score", "equal-score");
        userScoreElement.classList.add("losing-score");
        computerScoreElement.classList.add("winning-score");
    }
};
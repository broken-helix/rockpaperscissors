const buttons = document.getElementsByClassName("btn");
const computerChoiceElement = document.getElementById("computer-choice");
const playerChoiceElement = document.getElementById("user-choice");
const winState = document.getElementById("win-state");
const rockSymbol = '<i class="fa-regular fa-hand-back-fist"></i>';
const paperSymbol = '<i class="fa-regular fa-hand"></i>';
const scissorsSymbol = '<i class="fa-regular fa-hand-scissors"></i>';
const defaultSymbol = '<i class="fa-solid fa-question"></i>';
const resetGame = document.getElementById("reset");

let canPlay = true;

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (canPlay) {
            canPlay = false;
            button.classList.add("active");
            let gameType = this.getAttribute("id");
            runGame(gameType);
            computerChoiceElement.innerHTML = defaultSymbol;
            setTimeout(() => {
                button.classList.remove("active");
                canPlay = true;
            }, 700);
        }
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win","lose", "draw");
        playerChoiceElement.classList.remove("win", "lose", "draw");
        computerChoiceElement.classList.remove("win", "lose", "draw");
        computerChoiceElement.style.borderColor = "#000";
        playerChoiceElement.style.borderColor = "#000";
    });
}

function displayUserChoice(gameType) {
    const rockChoice = document.getElementById("rock");
    const paperChoice = document.getElementById("paper");
    const scissorsChoice = document.getElementById("scissors");
    if (gameType === "rock") {
        playerChoiceElement.innerHTML = rockSymbol;
        paperChoice.classList.remove("active");
        scissorsChoice.classList.remove("active");
    } else if (gameType === "paper") {
        playerChoiceElement.innerHTML = paperSymbol;
        rockChoice.classList.remove("active");
        scissorsChoice.classList.remove("active");
    } else if (gameType === "scissors") {
        playerChoiceElement.innerHTML = scissorsSymbol;
        paperChoice.classList.remove("active");
        rockChoice.classList.remove("active");
    }
}

function calculateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
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
}

function runGame(gameType, computerChoice) {
    displayUserChoice(gameType);
    setTimeout(() => {
        computerChoice = calculateComputerChoice();
        if (gameType === computerChoice) {
            winState.innerText = "DRAW";
            winState.classList.add("draw");
        } else if ((gameType === "rock" && computerChoice === "paper") || 
            (gameType === "paper" && computerChoice === "scissors") || 
            (gameType === "scissors" && computerChoice === "rock")) {
            winState.innerText = "LOSE";
            winState.classList.add("lose");
        } else if ((gameType === "rock" && computerChoice === "scissors") || 
            (gameType === "paper" && computerChoice === "rock") || 
            (gameType === "scissors" && computerChoice === "paper")) {
            winState.innerText = "WIN";
            winState.classList.add("win");
        }
    incrementScores();
    }, 700);
}

function incrementScores() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");
    if (winState.innerText === "WIN") {
        userScoreElement.innerText = ++userScore;
        playerChoiceElement.classList.add("win");
        computerChoiceElement.classList.add("lose");
    } else if (winState.innerText === "LOSE") {
        computerScoreElement.innerText = ++computerScore;
        playerChoiceElement.classList.add("lose");
        computerChoiceElement.classList.add("win");
    } else if (winState.innerText === "DRAW") {
        playerChoiceElement.classList.add("draw");
        computerChoiceElement.classList.add("draw");
    }
    if ((userScore === computerScore) && (userScore > 0)) {
        userScoreElement.classList.remove("win", "lose");
        computerScoreElement.classList.remove("win", "lose");
        userScoreElement.classList.add("draw");
        computerScoreElement.classList.add("draw");
    } else if (userScore > computerScore) {
        userScoreElement.classList.remove("win", "lose", "draw");
        computerScoreElement.classList.remove("win", "lose", "draw");
        userScoreElement.classList.add("win");
        computerScoreElement.classList.add("lose");
    } else if (computerScore > userScore) {
        userScoreElement.classList.remove("win", "lose", "draw");
        computerScoreElement.classList.remove("win", "lose", "draw");
        userScoreElement.classList.add("lose");
        computerScoreElement.classList.add("win");
    }
}

const sweetAlertText = "Select your choice from the 3 buttons, 'Rock', 'Paper, or 'Scissors.\n  The computer will pick a random choice.\n  Rock beats Scissors.\n  Paper beats Rock.\n  Scissors beats Paper.";

function howToPlay() {
    Swal.fire({
        icon:       "question",
        titleText:  "How to Play",
        text:       sweetAlertText,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Let's Play!",
    });
}

resetGame.addEventListener("click", function() {
    if (canPlay) {
        canPlay = false;
        document.getElementById("user-score").innerText = "0";
        document.getElementById("user-score").classList.remove("win", "lose", "draw");
        document.getElementById("computer-score").innerText = "0";
        document.getElementById("computer-score").classList.remove("win", "lose", "draw");
        winState.innerHTML = defaultSymbol;
        winState.classList.remove("win","lose", "draw");
        playerChoiceElement.classList.remove("win", "lose", "draw");
        computerChoiceElement.classList.remove("win", "lose", "draw");
        playerChoiceElement.innerHTML = defaultSymbol;
        computerChoiceElement.innerHTML = defaultSymbol;
    }
    canPlay = true;
});
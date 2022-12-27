const buttons = document.getElementsByClassName("btn");

for (let button of buttons) {
    button.addEventListener("click", function() {
        let gameType = this.getAttribute("id");
        runGame(gameType);
    });
}

function runGame(gameType) {
    
}


function displayUserChoice(gameType) {
    
}

function calculateComputerChoice() {

}

function compareChoices() {

}

function displayWinner() {

}

function incrementScores() {

}
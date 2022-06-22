let computerScore = 0;
let playerScore = 0;

playerSelection = userPlay();
computerSelection = computerPlay();

function computerPlay() {
    itemsArray = ["rock", "paper", "scissors"];
    computerSelection = itemsArray[Math.floor(Math.random() * itemsArray.length)];
    console.log(computerSelection)
    return computerSelection;
}

function playRound() {
    if (playerSelection == computerSelection) {
        console.log(playerSelection + " " + computerSelection + " You both tie!")
    }
    (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "paper" || playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Rock beats scissors " + computerScore++);
    }
    if (computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock") {
        console.log("You win! Scissors beats rock " + playerScore++);
    }
}

function userPlay() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
    console.log(playerSelection)
    return playerSelection;
}

playRound()
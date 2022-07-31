let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    const items = ['Rock', 'Paper', 'Scissors']
    const randomItem = items[Math.floor(Math.random() * items.length)]
    return randomItem;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Tie. Try again! Score: ${playerScore} - ${computerScore}`;
    }
    else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You win! Rock beats Scissors. Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You lose! Paper beats rock. Score: ${playerScore} - ${computerScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You lose! Scissors beats paper. Score: ${playerScore} - ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You win! Paper beats rock. Score: ${playerScore} - ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerScore++;
        return `You lose! Scissors beats rock. Score: ${playerScore} - ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You win! Scissors beat paper. Score: ${playerScore} - ${computerScore}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper, or scissors?');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lost. Score: ${playerScore} - ${computerScore}`);
    } else
        console.log(`It was a tie. Score: ${playerScore} - ${computerScore}`);
}

game();
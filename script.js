//console.log("Welcome to Rock, Paper, Scissors!")

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock"; // Rock
        case 1:
            return "paper"; // Paper
        case 2:
            return "scissors"; // Scissors
    }
}

function getHumanChoice() {
    let choice = prompt("Select your answer: ");
    return choice;
}

function playRound(humanSelection, computerSelection) {
    const humanSelectionTrans = humanSelection.toLowerCase();
    const computerSelectionTrans = computerSelection.toLowerCase();

    if (humanSelectionTrans === 'rock' && computerSelectionTrans === 'rock') {
        console.log("Tie!");
        return 0;
    } 
    else if (humanSelectionTrans === 'paper' && computerSelectionTrans === 'paper') {
        console.log("Tie!");
        return 0;
    } 
    else if (humanSelectionTrans === 'scissors' && computerSelectionTrans === 'scissors') {
        console.log("Tie!");
        return 0;
    }
    else if ((humanSelectionTrans === 'rock' && computerSelectionTrans === 'paper') || (humanSelectionTrans === 'paper' && computerSelectionTrans === 'rock')) {
        if (humanSelection === 'paper') {
            console.log("You win! Paper beats Rock");
            return 1;
        } 
        else {
            console.log("Computer wins! Paper beats Rock!");
            return 2;
        }
    } 
    else if ((humanSelectionTrans === 'rock' && computerSelectionTrans === 'scissors') || (humanSelectionTrans === 'scissors' && computerSelectionTrans === 'rock')) {
        if (humanSelection === 'rock') {
            console.log("You win! Haha rock goes smash");
            return 1;
        } 
        else {
            console.log("Computer wins! Haha rock goes smash");
            return 2;
        }
    }
    else if ((humanSelectionTrans === 'paper' && computerSelectionTrans === 'scissors') || (humanSelectionTrans === 'scissors' && computerSelectionTrans === 'paper')) {
        if (humanSelection === 'scissors') {
            console.log("You win! Paper goes *snip* *snip*");
            return 1;
        } 
        else {
            console.log("Computer wins! Paper goes *snip* *snip*");
            return 2;
        }
    }
    else {
        return console.log("No matching rules found");
    }
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

/*
function playGame(numberOfGames) {
    for (var i = 1; i <= numberOfGames; i++) {
        console.log("Round " + i);
        
        // Your turn
        let humanSelection = getHumanChoice();
        console.log("You selected: " + humanSelection)

        // Computer's turn
        let computerSelection = getComputerChoice();
        console.log("Computer selects: " + computerSelection)

        // Get result
        result = playRound(humanSelection, computerSelection);
        console.log(result);

        if (result === 1) {
            humanScore++;
        } else if (result === 2) {
            computerScore++;
        }

        console.log("Human: " + humanScore + " | Computer: " + computerScore)

    }

    console.log("Final Scores:");
    console.log("Human: " + humanScore + " | Computer: " + computerScore)
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore === computerScore) {
        console.log("Tie! Play another game to break it :)");
    } else {
        console.log("Better luck next time!");
    }
}

// playGame(numberOfGames);
*/

// Select Games
const numberOfGames = 5;

// Initialize variables
var humanScore = 0;
var computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {

    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");

    // Show outcome to user
    const message = document.getElementById("game-outcome");

    // Add Event listeners
    const buttons = document.getElementById('buttons-container');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // console.log(button.parentNode);
            const myResponse = button.textContent;
            
            //console.log('Selection captured:', myResponse);

            // Your turn
            let humanSelection = myResponse.toLowerCase();
            console.log("You selected: " + humanSelection)

            // Computer's turn
            let computerSelection = getComputerChoice();
            console.log("Computer selects: " + computerSelection)

            // Get result
            const result = playRound(humanSelection, computerSelection);
            console.log(result);

            if (result === 1) {
                humanScore++;
                message.textContent = "You win!";
            } else if (result === 2) {
                computerScore++;
                message.textContent = "Computer wins!";
            } else {
                message.textContent = "Tie!";
            }

            if (humanScore === 5) {
                playerScoreDisplay.textContent = 0;
                computerScoreDisplay.textContent = 0;
                message.textContent = "Game! You win!";
            } else if (computerScore === 5) {
                playerScoreDisplay.textContent = 0;
                computerScoreDisplay.textContent = 0;
                message.textContent = "Game! Computer wins!";
            }

            // update scoreboard
            playerScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;

        });
    });
});

// Get result
//result = playRound(humanSelection, computerSelection);
//console.log(result);

console.log("Good luck out there!");
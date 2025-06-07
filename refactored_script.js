
class RockPaperScissors {
    constructor() {
        this.humanScore = 0;
        this.computerScore = 0;
        this.winningScore = 5;

        this.playerScoreDisplay = document.getElementById("player-score");
        this.computerScoreDisplay = document.getElementById("computer-score");
        this.message = document.getElementById("game-outcome");
        this.buttons = document.querySelectorAll(".player-panel button");

        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener("click", () => {
                const humanSelection = button.textContent.toLowerCase();
                const computerSelection = this.getComputerChoice();
                
                console.log(`You selected ${humanSelection}`);
                console.log(`Computer selected ${computerSelection}`)

                const result = this.playRound(humanSelection, computerSelection);
                this.handleResult(result);
            });
        });
    };


    getComputerChoice() {
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

    playRound(human, computer) {
        const h = human.toLowerCase();
        const c = computer.toLowerCase();

        if(h === c) {
            console.log('Tie! Try again');
            return 0;
        }

        if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper")
        ) {
            return 1; // Human wins
        } else {
            return 2; // Computer wins
        }
    }

    handleResult(result) {
        if (result === 1) {
            this.humanScore++;
            this.message.textContent = "You win!";
        } else if (result === 2) {
            this.computerScore++;
            this.message.textContent = "Haha you lose!";
        } else {
            this.message.textContent = "Tie!";
        }

        if (this.humanScore === this.winningScore) {
            this.message.textContent = "Game! You win!";
            this.resetGame();
        } else if (this.computerScore === this.winningScore) {
            this.message.textContent = "Game! Computer wins!";
            this.resetGame();
        } else {
            this.updateScore();
        }
    }

    updateScore() {
        this.playerScoreDisplay.textContent = this.humanScore;
        this.computerScoreDisplay.textContent = this.computerScore;
    }

    resetGame() {
        this.humanScore = 0;
        this.computerScore = 0;
        this.updateScore();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Good luck out there!");
    new RockPaperScissors();
});

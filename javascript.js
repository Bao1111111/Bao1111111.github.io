
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    updateScore(result);
    displayResult(result, playerSelection, computerSelection);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateScore(result) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    if (playerScore === 5) {
        scoreElement.textContent = "You have Won!"
    }else if(computerScore === 5) { scoreElement.textContent = "The Computer has Won!"}
}

function displayResult(result, player, computer) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${result} You chose ${player}, computer chose ${computer}.`;
}

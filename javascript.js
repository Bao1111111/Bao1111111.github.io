
const options = ["Rock", "Paper", "Scissor"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)]
    return choice
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    gameWinner = 'tie'
  }
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
    (playerSelection === 'Scissor' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')
  ) {
    playerWin++
    gameWinner = 'player'
  }
  if (
    (computerSelection === 'Rock' && playerSelection === 'Scissor') ||
    (computerSelection === 'Scissor' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
  ) {
    computerWin++
    gameWinner = 'computer'
  }


  let playerWin = 0;
  let computerWin = 0;
  let gameWinner = ""

function game(){

// the button selection
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
   playerSelection = button.className;
   const computerSelection = getComputerChoice();
   battleWinText.textContent = (playRound(playerSelection, computerSelection))
   playerWinText.textContent = "The Players total Wins : " + playerWin;
   computerWinText.textContent = "The Computers total Wins : " + computerWin
   gameEnd()
  })
})

// Div Container for every Result
const container = document.querySelector("#container");
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "40px";
container.appendChild(resultDiv)


// tracks the Wins of the Player
const playerWinText = document.createElement("p");
playerWinText.style.color = "blue"
playerWinText.textContent = "You have Won : " + playerWin
resultDiv.appendChild(playerWinText);

// tracks the Wins of the Computer
const computerWinText = document.createElement("p")
computerWinText.style.color = "red"
computerWinText.textContent = "The Computer has Won : " + computerWin
resultDiv.appendChild(computerWinText)

// battles won
const battleWinText = document.createElement("p")
battleWinText.style.color = "green"
resultDiv.appendChild(battleWinText)

// Who won the Game
const gameWinText = document.createElement("p")
gameWinText.style.color = "gold"
gameWinText.textContent = gameWinner
resultDiv.appendChild(gameWinText)

function gameEnd(){
  if (playerWin == 5){
    gameWinner = "You Win!"
    gameWinText.textContent = gameWinner
  }
}

}

const options = ["rock", "paper", "scissor"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)]
    console.log()
    return choice
}

function checkIfWin(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
    return "Tie"} 
     else if(
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
     )
    { 
    return "Player"
    }
    else {
        return "Computer"
    }


    }
function playRound(playerSelection, computerSelection) {
  const result = checkIfWin(playerSelection, computerSelection);
  if (result == "Tie"){
    return "It's a Tie!"
  } else if (result == "Player"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
  
}


function game(){
  let playerWin = 0;
  let computerWin = 0;
  let gameWinner = ""
}

// the button selection
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
   playerSelection = button.className;
   const computerSelection = getComputerChoice();

  })
})

// Div Container for every Result
const container = document.querySelector("#container");
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "40px";
container.appendChild(resultDiv)

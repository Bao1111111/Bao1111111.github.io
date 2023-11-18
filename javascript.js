
const options = ["rock", "paper", "scissor"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)]
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

function getPlayerChoice(){
    le

}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = "rock"
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }

}
let input = prompt("Type rock, paper or scissor")
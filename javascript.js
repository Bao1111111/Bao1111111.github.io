
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

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))


const body = document.querySelector("body");

const rock = document.createElement("button");
rock.textContent = "Rock";
body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
body.appendChild(paper);

const scissor = document.createElement("button");
scissor.textContent = "Paper";
body.appendChild(scissor)



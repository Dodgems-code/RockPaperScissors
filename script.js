function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   if (choice === 0) {
    return "rock";
   } 
   else if (choice === 1) {
    return "paper";
   } 
   else { 
    return "scissors";
  }
}

function getPlayerChoice() {
  return prompt("Please enter rock, paper or scissors").toLowerCase();
}


let computerScore = 0
let playerScore = 0

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    return "You Tied";
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++
    return "You lost to paper";
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++
    return "You won against scissors"; 
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++
    return "You win against rock";
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
    return "YOU TIED" 
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
     computerScore++
     return "You lost to scissors"; 
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    return "YOU TIED";
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
     computerScore++
     return "You lost to rock"; 
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++  
    return "You won against paper";
    } else { return "not undefined please"; }
}

/*
console.log(playRound(getPlayerChoice(), getComputerChoice()));
*/ 

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log(`Player score is ${playerScore} and computerScore is ${computerScore}`)
  } if (playerScore === computerScore) {
    return console.log("It is a tie!")
  } else if (playerScore < computerScore) { return console.log("Computer wins!") }
  else if (computerScore < playerScore) { return console.log("Player wins!") }
  
}

game();

/*
console.log("Welcome, you are playing rock, paper, scissors! You will face the computer and the first to 5 wins!")

let playerScore = 0;

let computerScore = 0;

let playerSelection = prompt("Please choose rock, paper or scissors!").toLowerCase();

let computerChoice = getComputerChoice();

console.log(playerSelection, computerChoice);


function playGame(playerSelection, computerChoice) {
  if (playerSelection === 'rock' && computerChoice === 'rock') {
    return "You Tied";
  } else if (playerSelection === 'rock' && computerChoice === 'paper') {
    computerScore++
    return "YOU LOSE";
  } else if (playerSelection === 'rock' && computerChoice === 'scissors') {
    playerScore++
    return "YOU WIN"; 
  } else if (playerSelection === 'paper' && computerChoice === 'rock') {
    playerScore++
    return "YOU WIN";
    } else if (playerSelection === 'paper' && computerChoice === 'paper') {
    return "YOU TIED" 
    } else if (playerSelection === 'paper' && computerChoice === 'scissors') {
     computerScore++
     return "YOU LOSE"; 
    } else if (playerSelection === 'scissors' && computerChoice === 'scissors') {
    return "YOU TIED";
    } else if (playerSelection === 'scissors' && computerChoice === 'rock') {
     computerScore++
     return "YOU LOSE"; 
    } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
    playerScore++  
    return "YOU WIN";
    } else { return "not undefined please"; }
}


playGame(playerSelection, computerChoice);

*/
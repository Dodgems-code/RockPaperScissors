function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
   if (choice === 0) {
    return "Rock";
   } else if (choice === 1) {
    return "Paper";
   } else { 
    return "Scissors";
  }
}

let computerChoice = getComputerChoice();

let playerSelection = prompt("Please choose rock, paper or scissors!").toLowerCase();

console.log(`Computer has chosen ${computerChoice}`);
console.log("Player has selected " + playerSelection);



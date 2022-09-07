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
console.log(getComputerChoice());

function getPlayerSelection() {
    prompt("Please enter rock, paper or scissors").toLowerCase();
    console.log(getPlayerSelection);
 }

 const playerSelection = getPlayerSelection();
 const computerSelection = getComputerChoice();
 
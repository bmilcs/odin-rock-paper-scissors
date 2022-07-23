// Test to see script.js is being loaded:
console.log("Welcome to Bryan Miller's Rock Paper Scissors Project");

// Function: Randomly return Rock, Paper or Scissors
function getComputerChoice() {
  // Create an array with values rock, paper, Scissors
  let computerChoice = ["Rock", "Paper", "Scissors"];

  // Generate a random number from 0 to array's max length (overkill, but wanting to practice)
  let randomNumber = getRandomInt(0, computerChoice.length);

  // Return value of the random number index in the array
  return computerChoice[randomNumber];
}

// Function to generate a random number between 0 to Array Length
function getRandomInt(min, max) {
  // Generate a random number between two values:
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

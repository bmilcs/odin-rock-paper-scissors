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

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to Title Case
  playerSelection = toTitleCase(playerSelection);

  // If player & computer select the same thing, it's a tie
  // If player = rock, computer = scissors, player wins
  // If player = rock & computer = paper, computer wins
  // If player = scissors & computer = rock, computer wins
  // If player = scissors & computer = paper, player wins
  // If player = paper & computer = rock, player wins
  // If player = paper & computer = scissors, player wins

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}!`;

    // If player = rock
  } else if (playerSelection === "Rock") {
    switch (computerSelection) {
      case "Scissors":
        console.log("You Win! Rock beats Scissors.");
        break;
      case "Paper":
        console.log("You Lose! Paper beats Rock.");
        break;
    }
  }

  // Debugging: Return choices
  return "Comp: " + computerSelection + " | You: " + playerSelection;
}

// Function: Convert string to title case (from exercises)
function toTitleCase(string) {
  // Convert string to lower case
  let titleCase = string.toLowerCase();
  // Get first letter of string
  let firstLetter = titleCase.charAt();
  // Replace first character of string with capitalized version
  return titleCase.replace(/^./, firstLetter.toUpperCase());
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, getComputerChoice()));

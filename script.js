// Display game title to console
console.log("Welcome to Bryan Miller's Rock Paper Scissors Project\n\n");

//
// Function: Randomly return Rock, Paper or Scissors
//

function getComputerChoice() {
  // Create an array with values rock, paper, Scissors
  let computerChoice = ["Rock", "Paper", "Scissors"];

  // Generate a random number from 0 to array's max length (overkill, but wanting to practice)
  let randomNumber = getRandomInt(0, computerChoice.length);

  // Return value of the random number index in the array
  return computerChoice[randomNumber];
}

//
// Function: Generate a random number between 0 to Array Length
//

function getRandomInt(min, max) {
  // Generate a random number between two values:
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//
// Function: Play a single round of Rock Paper Scissors
//

function playRound(playerSelection, computerSelection) {
  // Debugging: Return choices
  console.log(
    "Player:\t\t" + playerSelection + "\nComputer:\t" + computerSelection
  );

  // If player & computer select the same thing, it's a tie
  if (playerSelection === computerSelection)
    return `It's a tie! You both chose ${playerSelection}!`;
  else if (
    // If the player has a winning combination, declare him the winner:
    (playerSelection === "Rock" && computerSelection == "Scissors") ||
    (playerSelection === "Scissors" && computerSelection == "Paper") ||
    (playerSelection === "Paper" && computerSelection == "Rock")
  )
    return `You Win!\t${playerSelection} beats ${computerSelection}!`;
  // If the player didn't win & it isn't a tie, declare the computer the winner:
  else return `You Lose!\t${computerSelection} beats ${playerSelection}`;
}

//
// Function: Convert string to title case (from exercises)
//

function toTitleCase(string) {
  // Convert string to lower case
  let titleCase = string.toLowerCase();
  // Get first letter of string
  let firstLetter = titleCase.charAt();
  // Replace first character of string with capitalized version
  return titleCase.replace(/^./, firstLetter.toUpperCase());
}

//
// Function: Play a 5 round game of rock, paper, scissors
//

function game() {
  // Declare playerScore variable
  // Declare computerScore variable
  // Declare playerSelection variable
  // While gameCount is less than 5(-1)
  // Wipe playerSelection variable clean
  // While playerSelection isn't an invalid value, prompt user for a selection, assign value to playerSelection and convert to Title Case
  // Invoke playRound with playerSelection & getComputerChoice() function & assign return value to a variable
  playRound(playerSelection, getComputerChoice()
  // If return value of a game contains You Win, increment playerScore
  // If return value of a game contains You Lose, increment computerScore
  // Print the final score
  // If playerScore = computerScore, declare a tie
  // Else If playerScore > computerScore, declare player a winner
  // Else declare the computer the winner
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

game();

// Display game title to console
console.log("Welcome to Bryan Miller's Rock Paper Scissors Project\n\n");

let buttons = Array.from(document.getElementsByTagName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    console.log(playRound(button.id, getComputerChoice()));
  });
});

// Function: Randomly return Rock, Paper or Scissors for Computer's Selection
function getComputerChoice() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
  let randomNumber = getRandomInt(0, computerChoice.length);
  return computerChoice[randomNumber];
}

// Function: Generate a random number between 2 values
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Function: Play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Debugging: Return choices
  console.log(
    "Player:\t\t" + playerSelection + "\nComputer:\t" + computerSelection
  );

  if (playerSelection === computerSelection)
    return `It's a tie! You both chose ${playerSelection}!`;
  else if (
    // If the player has a winning combination, declare them the winner:
    (playerSelection === "Rock" && computerSelection == "Scissors") ||
    (playerSelection === "Scissors" && computerSelection == "Paper") ||
    (playerSelection === "Paper" && computerSelection == "Rock")
  )
    return `You Win!\t${playerSelection} beats ${computerSelection}!`;
  // If the player didn't win & it isn't a tie, declare the computer the winner:
  else return `You Lose!\t${computerSelection} beats ${playerSelection}`;
}

// Function: Convert string to title case (from exercises)
function toTitleCase(string) {
  if (string === "") {
    return;
  }
  let titleCase = string.toLowerCase();
  let firstLetter = titleCase.charAt();
  return titleCase.replace(/^./, firstLetter.toUpperCase());
}

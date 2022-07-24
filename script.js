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
    // If the player has a winning combination, declare them the winner:
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
  // If string is empty, return
  if (string === "") {
    return;
  }

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
  // Declare playerScore variable & assign value of 0
  let playerScore = 0;
  // Declare computerScore variable & assign value of 0
  let computerScore = 0;
  // Declare playerSelection variable
  let playerSelection;
  // Declare gameResult
  let gameResult;

  // While gameCount is less than 5
  for (let gameCount = 0; gameCount < 5; gameCount++) {
    // Wipe playerSelection variable clean
    playerSelection = "";
    // While playerSelection isn't a valid value
    while (
      playerSelection != "Rock" &&
      playerSelection != "Paper" &&
      playerSelection != "Scissors"
    ) {
      // Prompt user for a selection, assign value to playerSelection and convert to Title Case
      playerSelection = toTitleCase(
        prompt(
          `Make a selection for game #${
            gameCount + 1
          }.\n\nRock, Paper or Scissors?`
        )
      );
    }

    // Invoke playRound with playerSelection & getComputerChoice() parameters & assign return value to result variable
    result = playRound(playerSelection, getComputerChoice());

    // Print game results
    console.log(result);
    // If return value of a game contains You Win, increment playerScore
    if (result.includes("You Win")) playerScore++;
    // Else if return value of a game contains You Lose, increment computerScore
    else if (result.includes("You Lose")) computerScore++;
  }

  // Print the final score
  console.log(
    `Final Score:\nPlayer:\t\t${playerScore}\nComputer:\t${computerScore}`
  );

  // If playerScore = computerScore, declare a tie
  if (playerScore === computerScore)
    console.log(`It's a Tie! You both won ${playerScore} out of 5 games!`);
  // Else If playerScore > computerScore, declare player a winner
  else if (playerScore > computerScore)
    console.log(`You Win! You won by ${playerScore - computerScore} game(s)!`);
  // Else declare the computer the winner
  else
    console.log(
      `You Lose! You lost by ${computerScore - playerScore} game(s)!`
    );
}

game();

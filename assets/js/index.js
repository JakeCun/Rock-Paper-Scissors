// JavaScript code in script.js

// Function to play the game when a player makes a choice
function playGame(playerChoice) {
    // Get a random choice for the computer
    const computerChoice = generateComputerChoice();

    // Determine the winner of the game
    const winner = determineWinner(playerChoice, computerChoice);

    // Display the choices and result
    displayChoices(playerChoice, computerChoice);
    displayResult(winner);
}

// Function to generate a random choice for the computer
function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner of the game
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to display the choices made by the player and computer
function displayChoices(playerChoice, computerChoice) {
    // You can customize this part based on your layout
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
}

// Function to display the result of the game
function displayResult(winner) {
    const resultElement = document.getElementById('result');

    if (winner === 'draw') {
        resultElement.textContent = 'It\'s a draw!';
    } else {
        resultElement.textContent = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins!`;
    }
}

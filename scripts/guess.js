function playGuessingGame() {
	let secret = Math.floor(Math.random() * 10 + 1);
	console.log(secret);
	let guesses = 0;
	let guessCount = 3;
	let playerGuess;

	while (guesses < guessCount) {
		playerGuess = prompt("Pick a number between 1 and 10");

		if (playerGuess == secret) {
			//player wins
			gameOver = true;
			alert("You won!!");
		} else {
			if (playerGuess < secret) {
				alert("too low!");
			} else {
				alert("too high!");
			}
		}
		guesses = guesses + 1;
	}

	if (!gameOver) {
		alert("You lose!");
	}
}

// listen for button clicks

let guessButton = document.getElementById("guess-game");

guessButton.addEventListener("click", () => {
	playGuessingGame();
});

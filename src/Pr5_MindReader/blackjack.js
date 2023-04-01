/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Blackjack
 * 
 * Computer creates a random number between 17 and 25. The player is dealt a
 * two-card hand and adds together the value of the cards. Whoever has a higher
 * score that is less than 21 wins. Otherwise it is a draw. The player gets
 * cards between 1 and 11.
 * 
 * @see https://en.wikipedia.org/wiki/Blackjack
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	for (let i = 0; i < 10; i++) {
		let humanScore = await getHumanScore();
		let houseScore = rgen.nextInt(17, 25);

		println("you: " + humanScore + " | house: " + houseScore);
		if (humanScore > 21) {
			println("House wins.");
		} else if (houseScore > 21) {
			println("You win.");
		} else if (humanScore > houseScore) {
			println("You win.");
		} else if (humanScore == houseScore) {
			println("Tie.");
		} else {
			println("House wins.");
		}
	}
}

async function getHumanScore() {
	let score = rgen.nextInt(1, 11);
	while (true) {
		println("Your current score is: " + score);
		let choice = await readLine("Do you want another card (Y/N)? ");
		if (choice.toUpperCase() == "N")
			break;
		score += rgen.nextInt(1, 11);
	}
	return score;
}
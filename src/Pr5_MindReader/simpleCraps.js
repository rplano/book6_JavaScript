/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: SimpleCraps
 * 
 * Craps is a dice game in which the players make wagers on the outcome of the
 * roll, or a series of rolls, of a pair of dice. In SimpleCraps we have the
 * following bets: <br/>
 * - odd <br/>
 * - even <br/>
 * - high (4,5,6) <br/>
 * - low (1,2,3) <br/>
 * 
 * @see https://en.wikipedia.org/wiki/Craps
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const STARTING_MONEY = 100;
const WAGER_AMOUNT = 10;
const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	let money = STARTING_MONEY;
	while (money > 0) {
		println("You have €" + money + ".");

		let bet = await readLine("Enter your bet: ");

		let outcome = roleTheDice();

		if (isResultWinning(outcome, bet)) {
			println("The number is " + bet + ", you win.");
			money += WAGER_AMOUNT;
		} else {
			println("The number is not " + bet + ", you lose.");
			money -= WAGER_AMOUNT;
		}
	}
	println("You lost.");
}

function roleTheDice() {
	let rnd = rgen.nextInt(1, 6);
	println("The dice shows " + rnd + ".");
	return rnd;
}

function isResultWinning(result, bet) {
	if (bet == "odd") {
		return (result % 2) == 1;
	} else if (bet == "even") {
		return (result % 2) == 0;
	} else if (bet == "low") {
		return (1 <= result) && (result <= 3);
	} else if (bet == "high") {
		return (4 <= result) && (result <= 6);
	}
	return false;
}
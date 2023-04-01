/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: NumberGuessConsole
 * 
 * The computer generates a random number and the user has to guess it. The
 * important part about this example is that two developers can work
 * simultaneously on the code using the NumberGuessLogic interface. It is
 * demonstration of coding by contract.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	// let logic = new NumberGuessLogic();
	let logic = new NumberGuessLogicImpl();
	await startGuessingGame(logic);

}

async function startGuessingGame(logic) {
	if (logic instanceof NumberGuessLogic) {
		while (true) {
			let guess = await readInt("Enter guess: ");
			if (logic.makeGuess(guess) == 0)
				break;
			if (logic.makeGuess(guess) == 1) {
				println("Number is smaller.");
			} else {
				println("Number is higher.");
			}

		}
		println("You won!");
	} else {
		println("'logic' is not of type NumberGuessLogic!");
	}
}

// interface or abstract class
class NumberGuessLogic {

	constructor() {
		// if we need 'this' in constructor of subclass, then super() must be called,
		// hence we can not throw an Error here:
		// throw new Error('NumberGuessLogic is interface, can not be instantiated!');
	}

	/**
	 * guess should be number between 0 and 99 <br/>
	 * return 0 if guess was correct <br/>
	 * return +1 if guess was higher <br/>
	 * return -1 if guess was lower
	 * 
	 * @param guess
	 * @return
	 */
	makeGuess(guess) {
		throw new Error('Method is abstract, needs to be implemented!');
	}
}


// implementation of interface
class NumberGuessLogicImpl extends NumberGuessLogic {

	constructor() {
		super();
		const rgen = new RandomGenerator();
		this.number = rgen.nextInt(0, 99);
	}

	/**
	 * guess should be number between 0 and 99 return 0 if guess was correct
	 * return +1 if guess was higher return -1 if guess was lower
	 * 
	 * @param guess
	 * @return
	 */
	makeGuess(guess) {
		if (guess == this.number) {
			return 0;
		}
		if (guess > this.number) {
			return +1;
		} else {
			return -1;
		}
	}
}
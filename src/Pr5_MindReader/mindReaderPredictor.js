/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: MindReaderPredictor
 * 
 * This is the same program as the MindReader program but now uses AI to make
 * its predications.
 * 
 * Time series prediction; rudimentary AI technique in the flavor of case-based
 * reasoning based on maps. The program builds a "user profile" in making its
 * predictions. Until a sufficiently rich profile is built (in the map) it will
 * make random guesses.
 * 
 * The program builds a map capturing the users guessing pattern. The key of the
 * map is the last four guesses made by the user. The value is a count of the
 * number of times either heads or tails is picked by the user given a
 * particular pattern of last 4 guesses.
 * 
 * The user needs to pick either heads or tails. Before the user makes his/her
 * pick the program will make a prediction as to whether the user is going to
 * pick head or tail. The programs prediction is hidden from the user until he
 * makes his actual pick. Once the user makes his pick the programs prediction
 * is revealed. If the program correctly predicted the users pick it gets a
 * point otherwise if the program misses the user gets a point. Who ever
 * (program or user) gets 25 points first is deemed the winner.
 * 
 * @see: http://nifty.stanford.edu/2007/raja-mindreader/
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

/**
 * A simple data container for heads and tails counts.
 */
class HTCounter {
	constructor() {
		this.heads = 0;
		this.tails = 0;
	}

	toString() {
		return "HTCounter [heads=" + this.heads + ", tails=" + this.tails + "]";
	}
}


const NUMBER_OF_GUESSES = 4;
const rgen = new RandomGenerator();

class MindReaderPredictor {

	/**
	 * Constructor initializes data structures.
	 */
	constructor() {
		/** we want to remember the last four guesses of the user */
		this.lastGuesses = "";
		/** map that keeps track of all the old guesses of the user */
		this.guessingPattern = new HashMap(); // ({}); //new HashMap < String, HTCounter > ();
	}

	/**
	 * Adds a new guess from the human to the map of previous guesses.
	 * 
	 * @param humanGuess
	 *            a char, either 'h' or 't' for head or tail.
	 */
	addNewGuess(humanGuess) {
		this.lastGuesses += humanGuess;
		if (this.lastGuesses.length > NUMBER_OF_GUESSES) {
			let key = this.lastGuesses.substring(0, NUMBER_OF_GUESSES);

			let counter = new HTCounter();
			if (this.guessingPattern.containsKey(key)) {
				counter = this.guessingPattern.get(key);
			}

			if (humanGuess == 'h') {
				counter.heads++;
			} else {
				counter.tails++;
			}
			this.guessingPattern.put(key, counter);

			// update lastGuesses
			this.lastGuesses = this.lastGuesses.substring(1);
		}
	}

	/**
	 * Return the prediction of the computer. If historical data is available
	 * return the most likely answer, if not return a random guess.
	 * 
	 * @return a char, either 'h' or 't' for head or tail.
	 */
	makePrediction() {
		// first check if we have history
		if (this.guessingPattern.containsKey(this.lastGuesses)) {
			return this.makeGuessBasedOnHistoricalData();
		} else {
			return this.makeRandomGuess();
		}
	}

	/**
	 * Looks in the map of what the answers of the user were in the past, and
	 * based on that returns the most likely answer.
	 * 
	 * @return a char, either 'h' or 't' for head or tail.
	 */
	makeGuessBasedOnHistoricalData() {
		let counter = this.guessingPattern.get(this.lastGuesses);
		if (counter.heads > counter.tails) {
			return 'h';
		} else {
			return 't';
		}
	}

	/**
	 * Returns randomly, either 'h' or 't'.
	 * 
	 * @return a char, either 'h' or 't' for head or tail.
	 */
	makeRandomGuess() {
		if (rgen.nextBoolean()) {
			return 'h';
		} else {
			return 't';
		}
	}
}
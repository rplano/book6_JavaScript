/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: MindReader
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

include("Pr5_MindReader/mindReaderPredictor.js");

const POINTS_TO_WIN = 25;

let computerGuess;
let humanGuess;
let computerScore = 0;
let humanScore = 0;
let predictor;

async function setup() {
	createConsole();

	computerScore = 0;
	humanScore = 0;
	predictor = new MindReaderPredictor();
	println("Welcome to MindReader!");

	while ((computerScore < POINTS_TO_WIN) && (humanScore < POINTS_TO_WIN)) {
		computerMakePrediction();
		await humanMakePick();
		revealPrediction();
	}
	displayWinner();
}

function displayWinner() {
	if (computerScore >= POINTS_TO_WIN) {
		println("I won!");
	} else {
		println("You won!");
	}
}

function revealPrediction() {
	if (computerGuess == humanGuess) {
		println("Yes!. I too predicted " + computerGuess);
		computerScore++;
	} else {
		println("No. I predicted " + computerGuess);
		humanScore++;
	}
	println("Score: " + computerScore + " | " + humanScore + "");
}

async function humanMakePick() {
	while (true) {
		let guess = await readLine("What is your guess [h/t] ? ");
		if (guess.toLowerCase() == "h") {
			humanGuess = 'h';
			break;
		} else if (guess.toLowerCase() == "t") {
			humanGuess = 't';
			break;
		} else {
			println("You must enter either h or t.  Please try again.");
		}
	}
	predictor.addNewGuess(humanGuess);
	//print(predictor.guessingPattern);
}

function computerMakePrediction() {
	computerGuess = predictor.makePrediction();
}
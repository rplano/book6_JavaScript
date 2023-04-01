/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Hangman
 * 
 * Implement the classic game of Hangman as a console program.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const rgen = new RandomGenerator();

let guessWord;
let hintWord;

async function setup() {
	createConsole();

	println("Welcome to Hangman");

	guessWord = pickGuessWord();
	hintWord = createHintWord();

	// game loop
	let counter = 0;
	while (true) {
		counter++;
		println(hintWord);
		let c = await readChar();
		if (guessWord.includes("" + c)) {
			buildNewHintWord(c);
		}
		if (!hintWord.includes("-"))
			break;
	}
	println(hintWord);
	println("It took you " + counter + " guesses");
}

function buildNewHintWord(c) {
	let temp = "";
	for (let i = 0; i < hintWord.length; i++) {
		if (guessWord.charAt(i) == c) {
			temp += c;
		} else {
			temp += hintWord.charAt(i);
		}
	}
	hintWord = temp;
}

async function readChar() {
	while (true) {
		let w = await readLine("Guess a character: ");
		if (w.length > 0)
			return w.charAt(0);
	}
}

function createHintWord() {
	let hintWord = "";
	for (let i = 0; i < guessWord.length; i++) {
		hintWord += "-";
	}
	return hintWord;
}

function pickGuessWord() {
	let words = ["dog", "fish", "chicken", "cat", "mother"];
	let index = rgen.nextInt(0, words.length - 1);
	return words[index];
}
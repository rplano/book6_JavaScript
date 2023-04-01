/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: RandomText
 * 
 * Creates a text out of random words.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	let sentence = createRandomSentence();
	println(sentence);
}

function createRandomSentence() {
	let sentence = "";
	let nrOfWordsInSentence = rgen.nextInt(2, 5);
	for (let i = 0; i < nrOfWordsInSentence; i++) {
		sentence += createRandomWord() + " ";
	}
	sentence += createRandomWord() + ".";
	return sentence;
}

function createRandomWord() {
	let word = "";
	let nrOfCharsInWord = rgen.nextInt(3, 8);
	for (let i = 0; i < nrOfCharsInWord; i++) {
		word += String.fromCharCode('a'.charCodeAt(0) + rgen.nextInt(26));
	}
	return word;
}
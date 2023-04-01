/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: VocabularyTrainer
 * 
 * Checks if you learned your vocabulary, and lists the words you did not know.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let vocabulary = new HashMap();
let unknownWords = new ArrayList();

async function setup() {
	createConsole();

	readWordsFromFile("Pr8_Stocks/vocabulary.txt");
	await doTraining();
	listUnknownWords();
}

function listUnknownWords() {
	println("\nYou need to study these words:");
	for (const word of unknownWords.values()) {
		println(word + ": " + vocabulary.get(word));
	}
}

async function doTraining() {
	for (const word of vocabulary.keySet()) {
		let correct = vocabulary.get(word).toLowerCase();
		let guess = await readLine("What is the translation of " + word + "? ");
		if (guess.length == 0)
			break;
		guess = guess.toLowerCase();
		if (guess == correct) {
			println("good job!");
		} else {
			println("sorry, not correct");
			unknownWords.add(word);
		}
	}
}

function readWordsFromFile(fileName) {
	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		putWordsInHashMap(line);
	}

	// close file
	fr.close();
}

function putWordsInHashMap(line) {
	const words = line.split(",");
	vocabulary.put(words[0], words[1]);
}
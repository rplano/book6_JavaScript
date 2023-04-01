/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: WordCount
 * 
 * Reads a file and counts how many lines, words, and characters are in it.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let counterLines = 0;
	let counterWords = 0;
	let counterChars = 0;

	// open file
	let fr = new Utils.FileReader("Pr8_Stocks/Faust.txt");

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		counterLines++;
		counterWords += countWords(line);
		counterChars += line.length;
	}

	// close file
	fr.close();

	println("lines = " + counterLines);
	println("words = " + counterWords);
	println("chars = " + counterChars);
}

function countWords(line) {
	let words = line.split(" ");
	return words.length;
}
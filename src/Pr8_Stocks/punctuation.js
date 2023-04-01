/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Punctuation
 * 
 * A console program displaying punctuation as a histogram. Can be used to
 * identify language and or authorship.
 * 
 * @see Charting Literary Classics’ Punctuation, From Austen to Twain,
 *      www.wired.com/2016/02/charting-punctuation-usage-in-literary-classics/
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const punctuation = ";:'\",!?.";

let histogramData = new Array(punctuation.length).fill(0);
let totalNrOfPunctuations = 0;

async function setup() {
	createConsole(12, 32);

	let fileName = await readLine("Enter file to analyze (Pr8_Stocks/TomSawyer.txt): ");
	readData(fileName);
	printHistogram();
}

function readData(fileName) {
	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		analyzeForPunctuation(line);
	}

	// close file
	fr.close();
}

function analyzeForPunctuation(line) {
	for (let i = 0; i < line.length; i++) {
		let c = line.charAt(i);
		if (punctuation.includes(c)) {
			let index = punctuation.indexOf(c);
			histogramData[index]++;
			totalNrOfPunctuations++;
		}
	}
}

function printHistogram() {
	for (let i = 0; i < histogramData.length; i++) {
		print("" + punctuation.charAt(i) + ": ");
		let nrOfStars = histogramData[i] * 40 / totalNrOfPunctuations;
		println(convertToStars(nrOfStars));
	}
}

function convertToStars(i) {
	let stars = "";
	for (let j = 0; j < i; j++) {
		stars += "*";
	}
	return stars;
}
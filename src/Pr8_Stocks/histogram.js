/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Histogram
 * 
 * A console program that reads the scores of students from a file and displays
 * the result as a histogram.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let histogramData = new Array(11).fill(0);

async function setup() {
	createConsole(12, 32);

	readData();
	printHistogram();
}

function readData() {
	// open file
	let fr = new Utils.FileReader("Pr8_Stocks/scores.txt");

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		let score = parseInt(line);
		putScoreInHistogram(score);
	}

	// close file
	fr.close();
}

function putScoreInHistogram(score) {
	const idx = Math.trunc(score / 10);
	histogramData[idx]++;
}

function printHistogram() {
	for (let i = 0; i < histogramData.length - 1; i++) {
		print("" + i + "0-" + i + "9: ");
		println(convertToStars(histogramData[i]));
	}
	print("100  : ");
	println(convertToStars(histogramData[histogramData.length - 1]));
}

function convertToStars(i) {
	let stars = "";
	for (let j = 0; j < i; j++) {
		stars += "*";
	}
	return stars;
}
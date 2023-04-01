/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: BuildIndex
 * 
 * Reads a text file and counts unique words, after filtering by length, ending
 * and plural. Writes result to a csv file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let words;

async function setup() {
	createConsole();

	readTextAndBuildIndex("Pr8_Stocks/TomSawyer.txt");
	words = words.sort();
	// print(words);
	writeIndexToCSV();
}

function writeIndexToCSV() {
	// open file
	let fw = new Utils.FileWriter("index.csv");

	// write to file, one string at a time
	for (let word of words.keySet()) {
		let count = words.get(word);
		fw.append(word + "," + count + "\n");
		println(word + "," + count);
	}

	// close file 
	fw.close();
}

function readTextAndBuildIndex(fileName) {
	words = new HashMap();

	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		let st = new StringTokenizer(line,
			"[]\"',;:.!?()-/ \t\n\r\f");
		while (st.hasMoreTokens()) {
			let word = st.nextToken();
			word = word.toLowerCase();
			word = filterStringsLessThan(word, 8);
			word = filterBadEndings(word);
			word = filterPlural(word);
			addWordToHashMap(word);
		}
	}

	// close file
	fr.close();
}

function filterPlural(word) {
	if (word != null) {
		if (word.endsWith("s")) {
			word = word.substring(0, word.length - 1);
		}
		return word;
	}
	return null;
}

// private String[] badEndings = { "ly", "ial", "ive", "ous", "ed" };
function filterBadEndings(word) {
	if (word != null) {
		let w = word.toLowerCase();
		if (!w.endsWith("ly") && !w.endsWith("ial") && !w.endsWith("ive")
			&& !w.endsWith("ous") && !w.endsWith("ed")) {
			return word;
		}
	}
	return null;
}

function filterStringsLessThan(word, len) {
	if (word != null && word.length >= len) {
		return word;
	}
	return null;
}

function addWordToHashMap(word) {
	if (word != null) {
		if (words.containsKey(word)) {
			let count = words.get(word);
			words.put(word, ++count);
		} else {
			words.put(word, 1);
		}
	}
}

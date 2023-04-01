/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Languages
 * 
 * Translates from English into 14 languages.
 * 
 * @see http://introcs.cs.princeton.edu/java/data/
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let languages;
let dictionary = new HashMap(); // = new TreeMap<String, List<String>>();

async function setup() {
	createConsole();

	readDictionaryFromFile();

	printLanguages();
	lang = await readInt("Enter language: ");
	while (true) {
		let english = await readLine("Enter English word: ");
		if (english.length == 0)
			break;
		let word = doTranslation(english.toLowerCase(), lang);  // translate() is used!!!
		println(word);
	}

	println("Done.");
}

function doTranslation(english, lang) {
	let words = dictionary.get(english);
	if (words != null) {
		return words.get(lang);
	}
	return null;
}

function printLanguages() {
	for (let i = 0; i < languages.size(); i++) {
		print("" + i + ": " + languages.get(i) + ", ");
	}
	println();
}

function readDictionaryFromFile() {

	// open file
	let fr = new Utils.FileReader("Pr8_Stocks/languages.csv");

	// first line contains languages:
	let languageLine = fr.readLine();
	languages = parseLine(languageLine);

	// next lines contain word tuplets:
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		let translations = parseLine(line);
		dictionary.put(translations.get(0), translations);
	}

	// close file
	fr.close();
}

function parseLine(line) {
	let translations = new ArrayList();
	while (true) {
		let begin = line.indexOf("\"");
		if (begin < 0)
			break;
		let end = line.indexOf("\"", begin + 1);
		if (end < 0) {
			console.log("***** this should never happen! *****");
		}
		let s = line.substring(begin + 1, end);
		line = line.substring(end + 1);
		translations.add(s);
	}
	return translations;
}
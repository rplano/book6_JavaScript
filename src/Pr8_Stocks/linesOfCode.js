/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: LinesOfCode
 * 
 * A console program that counts the Lines of Code (LoC) of a given program and
 * lists topics covered in program.
 * 
 * Note: program depends on the server you are using, this is for Visual Studio Code
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const searchWords = ["Console", "Canvas", "GUI",
	"FileReader", "FileWriter",
	"ActionEvent", "KeyEvent", "MouseEvent", "RandomGenerator",
	"ArrayList", "HashMap", "StringTokenizer", "Color", "AudioClip"];

let classification;

async function setup() {
	createConsole();

	classifyFile("Pr8_Stocks/languages.js");
	print('\n');

	// let grandParentFileList = readDir("..");
	// print(grandParentFileList);

	let parentFileList = readDir("Pr8_Stocks");
	// print(parentFileList);

	for (const parent of parentFileList) {
		if (parent.endsWith('js')) {
			// print(parent);
			classifyFile(parent);
		}
	}
}

function readDir(fileName) {
	let files = [];

	// open file
	let fr = new Utils.FileReader(fileName);

	classification = new HashSet();
	let lineCount = 0;

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		let matches = line.match(/href="(.*?)"/g);
		if (matches != null) {
			let file = String(matches);
			file = file.substring(6, file.length - 1);
			// println(file);
			if (file.startsWith('/src/')) {
				files.push(file);
			}
		}
	}

	// close file
	fr.close();

	return files;
}

function classifyFile(fileName) {
	// open file
	let fr = new Utils.FileReader(fileName);

	classification = new HashSet();
	let lineCount = 0;

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		lineCount++;
		checkImport(line);
		if (line.includes("[]")) {
			classification.add("Array");
		}
	}

	print(fileName + ": " + lineCount + "; ");
	print(classification.toString().substring(7));
	println();

	// close file
	fr.close();
}

function checkImport(line) {
	for (const word of searchWords) {
		if (line.includes(word)) {
			classification.add(word);
		}
	}
}

function removeJavaEnding(word) {
	let l = word.length();
	return word.substring(0, l - 5);
}
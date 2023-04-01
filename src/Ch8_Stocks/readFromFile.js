/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 1. ReadFromFile
 * 
 * ConsoleProgram that reads data from a file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let fileName = await readLine('Enter file to read (Ch8_Stocks/Faust.txt): ');

	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		println(line);
	}

	// close file
	fr.close();
}
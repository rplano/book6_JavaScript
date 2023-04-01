/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 1. WriteToStorage
 * 
 * ConsoleProgram that writes data to a file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// important: your browser settings must allow access to local storage!
async function setup() {
	createConsole();

	// open file
	let fw = new StorageWriter('test.txt');
	// clear file
	fw.clear();

	// write to file, one string at a time
	println('Enter text to write (\'.\' to quit): ');
	while (true) {
		let line = await readLine('');
		if (line == '.')
			break;
		fw.append(line + '\n');
	}
}
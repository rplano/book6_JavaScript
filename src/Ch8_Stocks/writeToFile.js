/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 2. WriteToFile
 * 
 * ConsoleProgram that writes data to a file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// check in your download folder for the file
async function setup() {
	createConsole();

	// open file
	let fw = new Utils.FileWriter("test.txt");

	// write to file, one string at a time
	println("Enter text to write ('.' to quit): ");
	while (true) {
		let line = await readLine("");
		if (line == '.')
			break;
		fw.append(line + "\n");
	}

	// close file
	fw.close();
}
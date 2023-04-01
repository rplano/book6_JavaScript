/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 2. ReadFromStorage
 * 
 * ConsoleProgram that reads data from a file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// important: your browser settings must allow access to local storage!
 async function setup() {
	createConsole();

	let fileName = await readLine("Enter file to read (test.txt): ");

	// open file
	let sr = new StorageReader(fileName);

	let line = sr.read();
	println(line);
}
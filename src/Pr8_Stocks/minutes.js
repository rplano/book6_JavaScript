/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Minutes
 * 
 * A program that can be used to take minutes of a meeting. The minutes are
 * stored in the file "minutes.txt".
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	println("Welcome to Minutes!");
	println("(to quit hit enter)");

	// open file
	let fw = new Utils.FileWriter("minutes.txt");

	// write to file, one string at a time
	while (true) {
		let line = await readLine(">");
		if (line == "")
			break;
		fw.append(line + "\n");
	}

	// close file 
	fw.close();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: CreateFileWithRandomNumbers
 * 
 * A program that creates random numbers and stores them in a file.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const rgen = new RandomGenerator();

async function setup() {
	createConsole();

	println("Create file with random numbers");
	println("-------------------------------");
	let fileName = await readLine("Enter file name: ");
	let low = await readInt("Enter lowest number: ");
	let high = await readInt("Enter highest number: ");
	let count = await readInt("How many numbers do you want: ");

	// open file
	let fw = new Utils.FileWriter(fileName);

	// write to file, one number at a time
	for (let i = 0; i < count; i++) {
		fw.append(rgen.nextInt(low, high+1) + "\n");
	}

	// close file
	fw.close();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: ExamStatistics
 * 
 * A simple ConsoleProgram that lets the user enter exam scores and calculates
 * max, min, average.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SENTINEL = -1;
const MAX_SIZE = 100;
const MAX_SCORE = 100;

async function setup() {
	createConsole();

	let scores = [];

	println("Enter grades: ");
	let counter = 0;
	let max = 0;
	let min = MAX_SCORE;
	let sum = 0;
	while (true) {
		let score = await readInt("?");
		if (score == SENTINEL)
			break;
		if (score > max)
			max = score;
		if (score < min)
			min = score;
		sum += score;
		scores[counter++] = score;
	}

	// statistics:
	println("Number of exams:" + counter);
	println("Lowest grade: " + min);
	println("Highest grade: " + max);
	println("Average: " + sum / counter);
}
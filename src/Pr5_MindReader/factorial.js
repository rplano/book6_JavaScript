/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Factorial
 * 
 * Calculate the factorial of a given number. Print all factorials from 1 to 200.
 * What is wrong?
 * 
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole(20,32);

	for (let i = 0; i < 200; i++) {
		println("Factorial " + i + " is: " + calculateFactorial(i));
	}
}

function calculateFactorial(n) {
	let factorial = 1;
	for (let i = 1; i <= n; i++) {
		factorial *= i;
	}
	return factorial;
}
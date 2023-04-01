/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Calculator
 * 
 * A Console program that repeatedly takes two numbers and adds them.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	while (true) {
		println("This program adds two numbers.");
		let n1 = await readInt("Enter number one: ");
		let n2 = await readInt("Enter number two: ");
		let sum = n1 + n2;
		println("The sum is: " + sum);
	}
}

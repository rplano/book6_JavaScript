/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: EvenOdd
 * 
 * A Console program that prints the numbers 0 through 10, and prints if the
 * number is even or odd.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const MAX_NUM = 10;

	println("i : i % 2 : even/odd");
	for (let i = 0; i < MAX_NUM; i++) {
		print(i + " : " + i % 2);
		if ((i % 2) == 0) {
			println(" : even");
		} else {
			println(" : odd");
		}
	}
}
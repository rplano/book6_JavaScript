/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Squares
 * 
 * A Console program that prints the squares of the numbers 1 through 10.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const MAX_NUM = 10;

	for (let i = 1; i < MAX_NUM; i++) {
		println(i * i);
	}
}
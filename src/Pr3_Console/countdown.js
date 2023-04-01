/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Countdown
 * 
 * A Console program that counts down from 10 to 0 and prints the values to the
 * console.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	for (let i = 5; i >= 0; i--) {
		println(i);
	}
}
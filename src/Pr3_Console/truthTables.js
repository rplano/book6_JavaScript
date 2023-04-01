/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: TruthTables
 * 
 * A Console program that prints the truth tables for boolean operations &&, || and ^.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	println("|in1|in2|out|");
	for (let in1 = 0; in1 <= 1; in1++) {
		for (let in2 = 0; in2 <= 1; in2++) {
			let b1 = (in1 != 0);
			let b2 = (in2 != 0);
			let b3 = b1 ^ b2;
			if (b3) {
				println("| " + in1 + " | " + in2 + " | 1 |");
			} else {
				println("| " + in1 + " | " + in2 + " | 0 |");
			}
		}
	}
}
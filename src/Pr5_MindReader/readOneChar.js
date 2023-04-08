/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: ReadOneChar
 * 
 * Reads one and exactly one character.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let c = await readOneChar("Enter Y or N: ");
	println("You entered: " + c);
}

async function readOneChar(msg) {
	let s;
	while (true) {
		s = await readLine(msg);
		if (s.length === 1)
			break;
		println("You idiot, you must enter only one character:");
	}
	let c = s.charAt(0);
	return c;
}
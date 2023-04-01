/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: CountUpperCase
 * 
 * Counts the upper case characters of a string.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let s = await readLine("Enter string: ");
	let counter = 0;
	for (let i = 0; i < s.length; i++) {
		if (isUpperCase(s.charAt(i))) {
			counter++;
		}
	}
	println("The string has " + counter + " upper case chars.");
}

function isUpperCase(c) {
	if (c >= 'A' && c <= 'Z') {
		return true;
	} else {
		return false;
	}
}
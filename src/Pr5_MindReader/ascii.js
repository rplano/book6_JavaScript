/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: ASCII
 * 
 * Print ASCII characters from 32 to 128.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	printASCIITable();
}

function toUpperCase(klein) {
	return klein.toUpperCase();
}

function isUpperCase(c) {
	if (c >= 'A' && c <= 'Z') {
		return true;
	} else {
		return false;
	}
}

function printASCIITable() {
	for (let i = 32; i < 128; i++) {
		if (i % 32 == 0) {
			println();
		}
		let char = String.fromCharCode(i);
		print(char);
	}
}
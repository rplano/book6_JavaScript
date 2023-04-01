/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Abjad
 * 
 * Remove all vowels from a string.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let originalText = await readLine("Enter text: ");
	let consonantText = removeVowels(originalText);
	println(consonantText);
}

function removeVowels(originalText) {
	let temp = "";
	for (let i = 0; i < originalText.length; i++) {
		let c = originalText.charAt(i);
		if (!isVowel(c)) {
			temp += c;
		}
	}
	return temp;
}

function isVowel(c) {
	switch (c.toLowerCase()) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return true;
		default:
			return false;
	}
}
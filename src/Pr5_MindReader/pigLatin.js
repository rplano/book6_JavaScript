/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: PigLatin
 * 
 * Translates an English sentence to a Pig Latin.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const vowels = "aeiou";

async function setup() {
	createConsole();

	let english = await readLine("Enter English text: ");
	let pigLatin = translateFromEnglishToPigLatin(english.toLowerCase());
	println(pigLatin);
}

function translateFromEnglishToPigLatin(english) {
	let yodish = "";
	let st = new StringTokenizer(english);
	while (st.hasMoreTokens()) {
		yodish += translateWord(st.nextToken()) + " ";
	}
	return yodish;
}

function translateWord(word) {
	let pig = "";
	let firstChar = "" + word.charAt(0);
	if (vowels.includes(firstChar)) {
		pig = word + "ay";
	} else {
		pig = word.substring(1) + firstChar + "ay";
	}
	return pig;
}
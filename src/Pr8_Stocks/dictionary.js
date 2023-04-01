/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Dictionary
 * 
 * A German-English dictionary with 3 word pairs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let dictionary;

async function setup() {
	createConsole();

	initialzeDictionary();

	while (true) {
		let german = await readLine("Enter german word: ");
		let english = dictionary.get(german.toLowerCase());
		println(english);
	}
}

function initialzeDictionary() {
	dictionary = new HashMap();
	dictionary.put("hund", "dog");
	dictionary.put("katze", "cat");
	dictionary.put("fisch", "fish");
}
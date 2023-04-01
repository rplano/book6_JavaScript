/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: 2. StringTokenizerExample
 * 
 * Demonstrates the use of the StringTokenizer.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let sentence = "hi there what's up?";
	let toki = new StringTokenizer(sentence, " .,?");
	while (toki.hasMoreTokens()) {
		println(toki.nextToken());
	}
}
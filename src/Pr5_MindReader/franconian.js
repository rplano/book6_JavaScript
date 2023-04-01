/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Franconian
 * 
 * Translate from German to Franconian.
 * 
 * @see Dialekte in Bayern - Handreichung für den Unterricht,
 *      www.km.bayern.de/download/12707_broschuere_dialekt_2013_k.pdf
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let german = await readLine("Enter German text: ");
	let franconian = translateGermanToFraenkisch(german.toLowerCase());
	println(franconian);
}

function translateGermanToFraenkisch(german) {
	let franconian = "";
	for (let i = 0; i < german.length; i++) {
		let c = german.charAt(i);
		franconian += translateChar(c);
	}
	return franconian;
}

function translateChar(c) {
	switch (c) {
		case 't':
			return 'd';
		case 'k':
			return 'g';
		case 'p':
			return 'b';
		default:
			return c;
	}
}
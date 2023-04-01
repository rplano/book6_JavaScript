/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: YodaTalk
 * 
 * This is a translator from English to Yodish.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let english = await readLine("Enter English text: ");
	let yodish = translateFromEnglishToYodish(english);
	println(yodish);
}

function translateFromEnglishToYodish(english) {
	let st = new StringTokenizer(english);
	let s = st.nextToken();
	let v = st.nextToken();
	let p = st.nextToken();
	let yodish = p + ", " + s + " " + v;
	return yodish;
}
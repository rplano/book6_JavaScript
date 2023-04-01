/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: urlReaderTester
 * 
 * Only works with same origin web server.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let urlReader = new URLReader('http://localhost:5500/');
	let text = urlReader.read();
	println(text);
}
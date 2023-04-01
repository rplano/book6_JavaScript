/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: RandomGeneratorTester
 * 
 * This class tests the self-written RandomGenerator.
 * 
 * To test this use http://localhost:5500/src/Pr5_MindReader/generic.html?name=randomGeneratorTesterAdvanced
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

async function loadClassFromFile() {
	let code = await httpGet('http://localhost:5500/src/Pr5_MindReader/randomGenerator.js');
	return eval('(' + code + ')');
}

async function setup() {
	createConsole();

	let MyRandomGenerator = await loadClassFromFile();
	let rgen = new MyRandomGenerator();

	for (let i = 0; i < 10; i++) {
		print(rgen.nextInt(10) + ",");
	}
	println();

	for (let i = 0; i < 10; i++) {
		print(rgen.nextInt(1, 6) + ",");
	}
	println();

	for (let i = 0; i < 10; i++) {
		print(rgen.nextBoolean() + ",");
	}
	println();

	for (let i = 0; i < 10; i++) {
		println(rgen.nextColor());
	}
}
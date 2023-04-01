/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: 1. StringExample
 * 
 * Demonstrates the use of strings.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let s1 = "Hello";
	let s2 = "world";
	let s3 = "!";
	let s4 = " ";
	let s5 = "";

	let s6 = s1 + s4 + s2 + s3;
	println(s6);
}
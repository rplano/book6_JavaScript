/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: 3. Immutability
 * 
 * Demonstrates the strings are immutable.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let s1 = "Hello";
	s1.toUpperCase();
	println(s1);

	s1 = s1.toUpperCase();
	println(s1);
}
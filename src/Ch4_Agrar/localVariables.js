/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 4. LocalVariables
 * 
 * Draw a target using three ovals.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let feet = await readDouble("Enter feet: ");
	feetToInches(feet);
	println(feet);
}

function feetToInches(feet) {
	feet = 42;
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 3. ConvertFeetToInches
 * 
 * Draw a target using three ovals.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let feet = await readDouble("Enter feet: ");
	let inches = feetToInches(feet);
	println(feet + " feet are " + inches + " inches.");
}

function feetToInches(feet) {
	let inches = 12 * feet;
	return inches;
}
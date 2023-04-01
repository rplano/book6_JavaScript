/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Temperature
 * 
 * A Console program that converts Fahrenheit to Celsius.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let f = await readInt("Enter temperature in Fahrenheit: ");
	let c = (5.0 / 9.0) * (f - 32);
	println("Temperature in Celsius is: " + c);
}
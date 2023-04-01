/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: YearlyRate
 * 
 * A Console program that calculates your yearly rate on a loan, given credit
 * amount, length of loan and interest rate.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let k = await readDouble("Enter credit amount (5000): ");
	let n = await readInt("Enter how many years (5): ");
	let z = await readDouble("Enter interest rate (0.05): ");
	let q = 1.0 + z;
	let qn = Math.pow(q, n);
	let y = k * qn * (q - 1) / (qn - 1);
	println("Yearly rate is: " + y);
}
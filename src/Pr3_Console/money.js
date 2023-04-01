/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Money
 * 
 * A Console program that takes an amount in cents, and outputs it in euros and
 * cents. Test it with the following entries: 120, 90, 100, 102, 002.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const MAX_NUM = 10;

	let money = await readInt("Enter amount in cents: ");
	let cents = money % 100;
	let euros = Math.trunc(money / 100);
	println("The amount is " + euros + "," + cents + " Euro.");
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: BigMoney
 * 
 * A Console program that pretty prints numbers up to 100 million. Test it with
 * the following entries 100123345, 100123305, 05.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const MAX_NUM = 10;

	let money = await readInt("Enter amount in cents: ");
	println("The amount is " + formatNumericString(money) + " Euro.");
}

function formatNumericString(money) {
	let cents = money % 100;
	let euros = Math.trunc(money / 100);
	let millions = Math.trunc(euros / 1000000);
	let thousands = Math.trunc((euros % 1000000) / 1000);
	let ones = (euros % 1000);

	let sMoney = "" + millions + "." + padWithZero("" + thousands, 3)
		+ "." + padWithZero("" + ones, 3) + ","
		+ padWithZero("" + cents, 2);
	return sMoney;
}

function padWithZero(s, length) {
	while (s.length < length) {
		s = '0' + s;
	}
	return s;
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: LeapYear
 * 
 * Ask the user to enter a year and find out if a give year is a leap year.
 * Simply use the method provided. Try to understand how it works.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let yearOfBirth = await readInt("Enter your year of birth: ");
	if (isLeapYear(yearOfBirth)) {
		println("You were born in a leap year.");
	} else {
		println("The year you were born was not a leap year.");
	}
}

function isLeapYear(y) {
	return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
}

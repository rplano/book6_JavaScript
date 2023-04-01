/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 1. MonthName
 * 
 * A simple ConsoleProgram that swaps two entries in an array of int.
 * 
 * @see Music and mathematics,
 *      en.wikipedia.org/wiki/Mathematics_of_musical_scales
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const monthName = [
	"January", "February", "March", "April",
	"May", "June", "July", "August", "September", "October",
	"November", "December"];

async function setup() {
	createConsole();

	let monthNr = await readInt("Enter number of month (1=January): ");
	println(monthName[monthNr - 1]);
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: Time
 * 
 * A Console program that prints the time in hour, minutes and seconds. For
 * testing purposes you should try the following test entries: 5, 61, 85, 3600,
 * 3601.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const MAX_NUM = 10;

	let secondsSinceMidnight = await readInt("Enter time in seconds since midnight: ");
	let seconds = secondsSinceMidnight % 60;
	let minutesSinceMidnight = Math.trunc(secondsSinceMidnight / 60);
	let hours =  Math.trunc(minutesSinceMidnight / 60);
	let minutes = minutesSinceMidnight % 60;
	let time = "" + padWithZeros("" + hours) + ":"
		+ padWithZeros("" + minutes) + ":" + padWithZeros("" + seconds);
	println("Time is: " + time);
}

function padWithZeros(s) {
	while (s.length < 2) {
		s = '0' + s;
	}
	return s;
}
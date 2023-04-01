/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Swap
 * 
 * A simple ConsoleProgram that swaps two entries in an array of int.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createConsole();
	frameRate(5);

	let arr = [0, 2, 4, 6];
	swap(arr);

	for (let i = 0; i < arr.length; i++) {
		print(arr[i] + ", ");
	}
}

function swap(arr) {
	let tmp = arr[1];
	arr[1] = arr[2];
	arr[2] = tmp;
}
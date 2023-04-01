/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Moire
 * 
 * Draws a simple Moire pattern.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;
const NR_OF_LINES = 11;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	let dX = WIDTH / (NR_OF_LINES - 1);
	let dY = HEIGHT / (NR_OF_LINES - 1);

	for (let i = 0; i < NR_OF_LINES; i++) {
		for (let j = 0; j < NR_OF_LINES; j++) {
			let line = new GLine(i * dX, 0, j * dY, HEIGHT);
			add(line);
		}
	}

	for (let i = 0; i < NR_OF_LINES; i++) {
		for (let j = 0; j < NR_OF_LINES; j++) {
			let line = new GLine(0, i * dX, HEIGHT, j * dY);
			add(line);
		}
	}

}

function draw() {
	update();
}
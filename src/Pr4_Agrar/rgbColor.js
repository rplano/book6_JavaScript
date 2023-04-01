/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: RGBColor
 * 
 * This program draws the RGB color room.
 * 
 * @see https://en.wikipedia.org/wiki/HSL_and_HSV
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 200;
const CELL_COLOR_STEP = WIDTH / 6; // + 1;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	for (let x = 0; x < WIDTH; x++) {
		let choice = Math.trunc(x / CELL_COLOR_STEP);
		drawColorLines(choice, x);
	}
}

function drawColorLines(choice, x) {
	let r = x % CELL_COLOR_STEP;

	// pick color
	let col = Color.WHITE;
	switch (choice) {
		case 0:
			col = color(255, r * 255 / CELL_COLOR_STEP, 0);
			break;
		case 1:
			col = color(255 - r * 255 / CELL_COLOR_STEP, 255, 0);
			break;
		case 2:
			col = color(0, 255, r * 255 / CELL_COLOR_STEP);
			break;
		case 3:
			col = color(0, 255 - r * 255 / CELL_COLOR_STEP, 255);
			break;
		case 4:
			col = color(r * 255 / CELL_COLOR_STEP, 0, 255);
			break;
		case 5:
			col = color(255, 0, 255 - r * 255 / CELL_COLOR_STEP);
			break;
	}

	// draw line
	let line = new GLine(x, 0, x, HEIGHT);
	line.setColor(col);
	add(line);
}

function draw() {
	update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Piano
 * 
 * Draw the keys of a piano.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 300;
const HEIGHT = 150;
const HEIGHT_OFFSET = 1;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	// draw 8 white keys
	for (let i = 0; i < 7; i++) {
		let whiteKeys = new GRect(WIDTH / 7, HEIGHT - HEIGHT_OFFSET);
		add(whiteKeys, i * WIDTH / 7, 0);
	}

	// draw 3 + 2 black keys
	for (let i = 0; i < 3; i++) {
		let blackKeys = new GRect(WIDTH / 12, HEIGHT / 2);
		blackKeys.setFilled(true);
		add(blackKeys, i * WIDTH / 7 + WIDTH / 7 / 2 + 10, 0);
	}
	for (let i = 0; i < 2; i++) {
		let blackKeys = new GRect(WIDTH / 12, HEIGHT / 2);
		blackKeys.setFilled(true);
		add(blackKeys, i * WIDTH / 7 + 9 * WIDTH / 7 / 2 + 10, 0);
	}
}

function draw() {
  update();
}
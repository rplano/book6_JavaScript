/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: RandomSquares
 * 
 * Draws randomly colored and sized rectangles.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;

// instance variables
let rgen = new RandomGenerator();

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);
}

function draw() {
	// create randomly sized rect
	let width = rgen.nextDouble(0, WIDTH / 2);
	let height = rgen.nextDouble(0, HEIGHT / 2);
	let rect = new GRect(width, height);

	// set random color of rect
	rect.setFilled(true);
	rect.setFillColor(rgen.nextColor());

	// put rect at random position
	let x = rgen.nextDouble(-WIDTH / 2, WIDTH);
	let y = rgen.nextDouble(-HEIGHT / 2, HEIGHT);
	add(rect, x, y);

	update();
}
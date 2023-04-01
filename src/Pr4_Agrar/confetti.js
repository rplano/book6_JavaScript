/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Confetti
 * 
 * Draw confetti on the screen.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 200;
const SIZE = 20;

// instance variables
let rgen = new RandomGenerator();

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);
}

function draw() {
	// create randomly sized rect
	let width = rgen.nextDouble(SIZE / 2, SIZE);
	let rect = new GOval(width, width);

	// set random color of rect
	rect.setFilled(true);
	rect.setFillColor(rgen.nextColor());

	// put rect at random position
	let x = rgen.nextDouble(-WIDTH / 2, WIDTH);
	let y = rgen.nextDouble(-HEIGHT / 2, HEIGHT);
	add(rect, x, y);

	update();
}
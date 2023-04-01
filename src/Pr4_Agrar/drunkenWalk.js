/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: DrunkenWalk
 * 
 * Draws the path of drunken Karel.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;
const STEP_SIZE = 15;

// instance variables
let rgen = new RandomGenerator();
let x0 = WIDTH / 2;
let y0 = HEIGHT / 2;
let x1 = x0;
let y1 = y0;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);
}

function draw() {
	let walk = new GLine(x0, y0, x1, y1);
	add(walk);
	x1 = x0;
	y1 = y0;
	x0 += rgen.nextInt(-STEP_SIZE, STEP_SIZE);
	y0 += rgen.nextInt(-STEP_SIZE, STEP_SIZE);

	update();
}
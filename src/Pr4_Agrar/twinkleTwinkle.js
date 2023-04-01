/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: TwinkleTwinkle
 * 
 * Draw a random star map.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 200;
const DELAY = 500;

// instance variables
let rgen = new RandomGenerator();

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);
	setBackground(Color.BLACK);
}

function draw() {
	let x = rgen.nextInt(WIDTH);
	let y = rgen.nextInt(HEIGHT);
	let size = rgen.nextInt(1, 4);
	let star = new GOval(size, size);
	star.setColor(Color.WHITE);
	star.setFilled(true);
	add(star, x, y);

	update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: AsteroidCreator
 * 
 * Draws an asteroid at the location where the mouse was pressed.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let rgen = new RandomGenerator();

function setup() {
	createCanvas(300, 200);
	frameRate(5);
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;
	let size = rgen.nextInt(10, 50);
	let asteroid = new GRect(size, size);
	add(asteroid, x, y);
}

function draw() {
	update();
}
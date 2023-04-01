/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 6. Builder
 * 
 * Draw little blocks at the position the mouse was pressed.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;
const BLOCK_SIZE = 25;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;
	x = Math.trunc(x / BLOCK_SIZE) * BLOCK_SIZE;
	y = Math.trunc(y / BLOCK_SIZE) * BLOCK_SIZE;

	let block = new GRect(BLOCK_SIZE, BLOCK_SIZE);
	block.setColor(Color.RED);
	block.setFilled(true);
	block.setFillColor(Color.YELLOW);
	add(block, x, y);
}

function draw() {
	update();
}
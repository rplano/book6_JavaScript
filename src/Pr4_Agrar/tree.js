/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Tree
 * 
 * This program uses recursion to draw a tree.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;
const SCALE_LEFT = 0.70;
const SCALE_MIDDLE = 0.50;
const SCALE_RIGHT = 0.70;
const ANGLE_MIDDLE = 10;
const ANGLE_LEFT = 20 + ANGLE_MIDDLE;
const ANGLE_RIGHT = -20 + ANGLE_MIDDLE;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	drawTree(6);
}

function drawTree(n) {
	let x = WIDTH / 2;
	let y = HEIGHT;
	let length = 70;
	let angle = 90;
	drawBranches(n, x, y, length, angle);
}

function drawBranches(n, x, y, length, angle) {
	// stemm
	drawLine(x, y, length, angle);

	if (n > 0) {
		// branches
		let x1 = x + (int)(length * Math.cos(-angle * Math.PI / 180.0));
		let y1 = y + (int)(length * Math.sin(-angle * Math.PI / 180.0));
		n--;
		drawBranches(n, x1, y1, length * SCALE_LEFT, angle + ANGLE_LEFT);
		drawBranches(n, x1, y1, length * SCALE_MIDDLE, angle + ANGLE_MIDDLE);
		drawBranches(n, x1, y1, length * SCALE_RIGHT, angle + ANGLE_RIGHT);
	}
}

function drawLine(x, y, length, angle) {
	let x1 = x + (int)(length * Math.cos(-angle * Math.PI / 180.0));
	let y1 = y + (int)(length * Math.sin(-angle * Math.PI / 180.0));
	let line = new GLine(x, y, x1, y1);
	add(line);
}

function draw() {
	update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 7. MouseTracker
 * 
 * Draws a label with the mouse position at the position where the mouse is.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 200;

// instance variables
let lbl;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(25);

	lbl = new GLabel("");
	lbl.setFont('Arial');
	lbl.setFontSize(20);
	add(lbl, 0, 0);
}

function mouseMoved() {
	let x = mouseX;
	let y = mouseY;
	lbl.setLabel("x=" + x + ",y=" + y);
	lbl.setLocation(x, y);
}

function draw() {
	update();
}
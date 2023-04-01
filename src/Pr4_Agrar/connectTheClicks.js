/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: ConnectTheClicks
 * 
 * A simple drawing program. As the user clicks on the screen, the program
 * connects the clicks through lines.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let x0 = -1;
let y0 = -1;

function setup() {
	createCanvas(300, 300);
	frameRate(5);
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;
	if (x0 > -1) {
		let line = new GLine(x0, y0, x, y);
		add(line);
	}
	x0 = x;
	y0 = y;
}

function draw() {
	update();
}
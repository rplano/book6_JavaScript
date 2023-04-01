/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 2. FourGOvals
 * 
 * A simple GraphicsProgram drawing four GOvals on the screen, demonstrating how
 * to use an array.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 300);
	frameRate(5);

	let circles = [];
	circles[0] = new GOval(100, 66, 50, 50);
	circles[1] = new GOval(100, 116, 50, 50);
	circles[2] = new GOval(150, 66, 50, 50);
	circles[3] = new GOval(150, 116, 50, 50);
	add(circles[0]);
	add(circles[1]);
	add(circles[2]);
	add(circles[3]);
}

function draw() {
	update();
}
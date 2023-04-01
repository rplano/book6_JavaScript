/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Smiley
 * 
 * Write a simple GraphicsProgram that uses GRect, GOval and GLine, maybe also
 * GArc. Use setFilled(), setColor() and setFillColor(). Draw a ’Smiley’ that
 * includes two eyes, a nose and a mouth.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	let face = new GOval(100, 100);
	face.setFilled(true);
	face.setFillColor(Color.YELLOW);
	add(face, 100, 30);

	let leftEye = new GOval(10, 10);
	leftEye.setColor(Color.GREEN);
	add(leftEye, 125, 55);
	let rightEye = new GOval(10, 10);
	rightEye.setColor(Color.RED);
	add(rightEye, 175, 55);

	let mouth = new GArc(50, 60, 225, 90);
	add(mouth, 130, 80);
}

function draw() {
	update();
}
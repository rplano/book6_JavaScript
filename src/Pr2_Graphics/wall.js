/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Wall
 * 
 * Draw a brick wall using rects.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function setup() {
	createCanvas(300, 150);
	frameRate(5);

	for (let j = 0; j < 3; j++) {
		drawRowOfNBricks(j);
	}
}

function drawRowOfNBricks(j) {
	let x = 70; // beginning x position of wall
	let y = 105 + j * 15; // beginning y position of wall
	for (let i = 0; i < 5; i++) {
		let brick = new GRect(30, 15);
		add(brick, x, y);
		x = x + 30;
	}
}

function draw() {
	update();
}
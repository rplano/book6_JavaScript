/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Stairs
 * 
 * Draw stairs using rects.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	for (let i = 0; i < 10; i++) {
		drawOneRowOfStones(i);
	}
}

function drawOneRowOfStones(n) {
	let x = -15;
	let y = 0 + 15 * n;
	for (let i = 0; i < n; i++) {
		x += 30;
		let stone = new GRect(30, 15);
		add(stone, x, y);
	}
}

function draw() {
	update();
}
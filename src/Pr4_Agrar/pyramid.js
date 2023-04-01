/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Pyramid
 * 
 * Draws a pyramid.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 200);

	for (let i = 0; i < 10; i++) {
		drawOneRowOfStones(i);
	}
}

function drawOneRowOfStones(n) {
	let x = 120 - 30 / 2 * n;
	let y = 3 + 15 * n;
	for (let i = 0; i < n; i++) {
		x += 30;
		let stone = new GRect(30, 15);
		add(stone, x, y);
	}
}

function draw() {
	update();
}
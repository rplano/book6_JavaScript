/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Stairs
 * 
 * This program draws stairs.
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
	let x = -15;
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
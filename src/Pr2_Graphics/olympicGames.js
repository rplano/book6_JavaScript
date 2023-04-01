/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: OlympicGames
 * 
 * Draw the olympic rings using a ovals.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 5;
const SIZE = 70;
const SEP = 10;

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	let x = 30;
	let y = 25;
	drawRing(x, y, Color.BLUE);
	x += SIZE + SEP;
	drawRing(x, y, Color.BLACK);
	x += SIZE + SEP;
	drawRing(x, y, Color.RED);
	x = 30 + SIZE / 2 + SEP / 2;
	y += SIZE / 2;
	drawRing(x, y, Color.YELLOW);
	x += SIZE + SEP;
	drawRing(x, y, Color.GREEN);
}

function drawRing(x, y, col) {
	for (let i = 0; i < WIDTH; i++) {
		let ring1 = new GOval(SIZE - i * 2, SIZE - i * 2);
		ring1.setColor(col);
		add(ring1, x++, y++);
	}
}

function drawRing2(x, y, col) {
	print(x+','+ y+','+ col);
	let ring1 = new GOval(SIZE, SIZE);
	ring1.setColor(col);
	ring1.setFilled(true);
	ring1.setFillColor(col);
	add(ring1, x, y);
	let ring = new GOval(SIZE - WIDTH * 2, SIZE - WIDTH * 2);
	ring.setColor(Color.WHITE);
	ring.setFilled(true);
	ring.setFillColor(Color.WHITE);
	add(ring, x + WIDTH, y + WIDTH);
}

function draw() {
  update();
}
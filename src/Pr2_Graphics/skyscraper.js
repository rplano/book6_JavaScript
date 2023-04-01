/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Skyscraper
 * 
 * Draw a skyscraper using a rects.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 200);
	frameRate(5);

	setBackground(Color.DARK_GRAY);

	let house = new GRect(100, 200);
	house.setFilled(true);
	house.setFillColor(Color.BLACK);

	add(house, 120, 20);
	for (let i = 0; i < 6*8; i++) {
		if (Math.random() < 0.3) {
			addWindow(i % 6 * 15 + 127, Math.trunc(i / 6) * 25 + 28);
		}
	}
}

function addWindow(x, y) {
	let window = new GRect(10, 20);
	window.setFilled(true);
	window.setFillColor(Color.YELLOW);
	add(window, x, y);
}

function draw() {
	update();
}
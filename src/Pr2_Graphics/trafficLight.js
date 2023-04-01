/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: TrafficLight
 * 
 * Draw a traffic light using a rect and ovals.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 30;
const OFFSET = 10;

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	let housing = new GRect(SIZE + OFFSET, (SIZE + OFFSET) * 3);
	housing.setFilled(true);
	let pos = 30;
	add(housing, pos + 100, pos - 15);

	let x = pos + 100 + OFFSET / 2;
	let y = pos + OFFSET - 15;
	drawLight(x, y, Color.RED);
	y += SIZE + OFFSET / 2;
	drawLight(x, y, Color.YELLOW);
	y += SIZE + OFFSET / 2;
	drawLight(x, y, Color.GREEN);
}

function drawLight(x, y, col) {
	let light = new GOval(SIZE, SIZE);
	light.setColor(col);
	light.setFilled(true);
	light.setFillColor(col);
	add(light, x, y);
}

function draw() {
	update();
}
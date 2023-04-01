/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: TrafficLight
 * 
 * Draw an animated traffic light.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const SIZE = 30;
const OFFSET = 10;

// instance variables
let redLight;
let yellowLight;
let greenLight;
let currentLight = 0;

function setup() {
	createCanvas(300, 200);
	frameRate(1);

	let pos = 30;

	let housing = new GRect(SIZE + OFFSET, (SIZE + OFFSET) * 3);
	housing.setFilled(true);
	add(housing, pos + 100, pos + 10);

	let x = pos + 100 + OFFSET / 2;
	let y = pos + OFFSET + 10;
	redLight = new GOval(SIZE, SIZE);
	drawLight(redLight, x, y, Color.RED);
	y += SIZE + OFFSET / 2;
	yellowLight = new GOval(SIZE, SIZE);
	drawLight(yellowLight, x, y, Color.YELLOW);
	y += SIZE + OFFSET / 2;
	greenLight = new GOval(SIZE, SIZE);
	drawLight(greenLight, x, y, Color.GREEN);
}

function switchLight() {
	if (currentLight == 0) {
		redLight.setFillColor(Color.RED);
		yellowLight.setFillColor(Color.BLACK);
		greenLight.setFillColor(Color.BLACK);
	} else if (currentLight == 1) {
		redLight.setFillColor(Color.RED);
		yellowLight.setFillColor(Color.YELLOW);
		greenLight.setFillColor(Color.BLACK);
	} else {
		redLight.setFillColor(Color.BLACK);
		yellowLight.setFillColor(Color.BLACK);
		greenLight.setFillColor(Color.GREEN);
	}
	currentLight++;
	currentLight = currentLight % 3;
}

function drawLight(light, x, y, col) {
	light.setFilled(true);
	light.setFillColor(col);
	add(light, x, y);
}

function draw() {
	switchLight();
	update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: SevenSegmentDisplay
 * 
 * A GraphicsProgram that uses SevenSegmentDisplay.
 * 
 * @see https://en.wikipedia.org/wiki/Seven-segment_display
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 40;
const HEIGHT = 80;
const LED_WIDTH = 6;

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	addSegments();
}

function addSegments() {
	let x = (300 - WIDTH) / 2;
	let y = 20;

	let upperFrontVertical = new GRect(LED_WIDTH, HEIGHT / 2);
	upperFrontVertical.setColor(Color.RED);
	upperFrontVertical.setFilled(true);
	add(upperFrontVertical, x + 0, y + LED_WIDTH);

	let upperBackVertical = new GRect(LED_WIDTH, HEIGHT / 2);
	upperBackVertical.setColor(Color.RED);
	upperBackVertical.setFilled(true);
	add(upperBackVertical, x + WIDTH + LED_WIDTH, y + LED_WIDTH);

	let lowerFrontVertical = new GRect(LED_WIDTH, HEIGHT / 2);
	lowerFrontVertical.setColor(Color.RED);
	lowerFrontVertical.setFilled(true);
	add(lowerFrontVertical, x + 0, y + HEIGHT / 2 + 2 * LED_WIDTH);

	let lowerBackVertical = new GRect(LED_WIDTH, HEIGHT / 2);
	lowerBackVertical.setColor(Color.RED);
	lowerBackVertical.setFilled(true);
	add(lowerBackVertical, x + WIDTH + LED_WIDTH, y + HEIGHT / 2 + 2
		* LED_WIDTH);

	let upperHorizontal = new GRect(WIDTH, LED_WIDTH);
	upperHorizontal.setColor(Color.RED);
	upperHorizontal.setFilled(true);
	add(upperHorizontal, x + LED_WIDTH, y + 0);

	let middleHorizontal = new GRect(WIDTH, LED_WIDTH);
	middleHorizontal.setColor(Color.RED);
	middleHorizontal.setFilled(true);
	add(middleHorizontal, x + LED_WIDTH, y + HEIGHT / 2 + LED_WIDTH);

	let lowerHorizontal = new GRect(WIDTH, LED_WIDTH);
	lowerHorizontal.setColor(Color.RED);
	lowerHorizontal.setFilled(true);
	add(lowerHorizontal, x + LED_WIDTH, y + HEIGHT + 2 * LED_WIDTH);
}

function draw() {
	update();
}
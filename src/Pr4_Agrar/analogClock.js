/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: AnalogClock
 * 
 * Draws an animated analog clock.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const FPS = 25;
const SIZE = 300;
const FUDGE = 2;
const WIDTH = SIZE + FUDGE;
const HEIGHT = SIZE + FUDGE;

// instants variables
let hoursHand;
let minutesHand;
let secondsHand;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(FPS);

	drawFace();
	drawDigits();
	hoursHand = new GLine(SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2, 3);
	add(hoursHand);
	minutesHand = new GLine(SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2, 2);
	add(minutesHand);
	secondsHand = new GLine(SIZE / 2, SIZE / 2, SIZE / 2, SIZE / 2);
	add(secondsHand);
}

function draw() {
	drawHands();
	update();
}

function drawHands() {
	let time = new Date();
	drawHours(time.getHours());
	drawMinutes(time.getMinutes());
	drawSeconds(time.getSeconds());
}

function drawHours(hours) {
	hours = hours % 12;
	let radians = 2 * Math.PI * hours / 12;
	let lengthHourHand = 150;
	let x = SIZE / 2 + Math.sin(radians) * lengthHourHand / 2;
	let y = SIZE / 2 - Math.cos(radians) * lengthHourHand / 2;
	hoursHand.setEndPoint(x, y);
}

function drawMinutes(minutes) {
	let radians = 2 * Math.PI * minutes / 60;
	let lengthMinuteHand = 200;
	let x = SIZE / 2 + Math.sin(radians) * lengthMinuteHand / 2;
	let y = SIZE / 2 - Math.cos(radians) * lengthMinuteHand / 2;
	minutesHand.setEndPoint(x, y);
}

function drawSeconds(seconds) {
	let radians = 2 * Math.PI * seconds / 60;
	let lengthSecondHand = 250;
	let x = SIZE / 2 + Math.sin(radians) * lengthSecondHand / 2;
	let y = SIZE / 2 - Math.cos(radians) * lengthSecondHand / 2;
	secondsHand.setEndPoint(x, y);
}

function drawDigits() {
	for (let i = 1; i <= 12; i++) {
		let digit = new GLabel("" + i);
		digit.setFont('Times');
		digit.setFontSize(24);
		let radians = 2 * Math.PI * i / 12;
		let radius = SIZE - 40;
		let x = -6 + SIZE / 2 + Math.sin(radians) * radius / 2;
		let y = 10 + SIZE / 2 - Math.cos(radians) * radius / 2;
		add(digit, x, y);
	}
}

function drawFace() {
	let face = new GOval(SIZE, SIZE);
	add(face);
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Mandelbrot
 * 
 * A GraphicsProgram that draws the Mandelbrot set.
 * 
 * @see https://en.wikipedia.org/wiki/Mandelbrot_set
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 400;
const HEIGHT = 400;

const MAX_ITERATION = 1000;

const RAINBOW_COLOR_STEP = 10; // 10 * 6
const RAINBOW_NR_OF_COLORS = 10 * 6;
let RAINBOW_COLORS = [];

let xMin = -2.0;
let xMax = 1.0;
let yMin = -1.5;
let yMax = 1.5;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(1);

	initColorTable();

	let xStep = (xMax - xMin) / WIDTH;
	let yStep = (yMax - yMin) / HEIGHT;
	for (let x = xMin; x < xMax; x += xStep) {
		let i = 0;
		for (let y = yMin; y < yMax; y += yStep) {
			let col = fun(x, y);
			// println(i+","+(i % RAINBOW_NR_OF_COLORS));
			setPixel(x, y, col);
		}
	}
}

function draw() {
	update();
	// noLoop();
}

function fun(x0, y0) {
	let x = 0.0;
	let y = 0.0;
	let iteration = 0;
	while (x * x + y * y < 4 && iteration < MAX_ITERATION) {
		let xtemp = x * x - y * y + x0;
		y = 2 * x * y + y0;
		x = xtemp;
		iteration++;
	}
	return RAINBOW_COLORS[iteration % RAINBOW_NR_OF_COLORS];
}

function setPixel(x, y, color) {
	let i = (int)(((x - xMin) * WIDTH) / (xMax - xMin));
	let j = (int)(((y - yMin) * HEIGHT) / (yMax - yMin));
	let r = new GRect(1, 1);
	r.setColor(color);
	add(r, i, j);
}

function initColorTable() {
	let i = 0;
	for (let r = 0; r < RAINBOW_COLOR_STEP; r++) {
		RAINBOW_COLORS[i] = color(r * 255 / RAINBOW_COLOR_STEP, 255, 0);
		i++;
	}
	for (let g = RAINBOW_COLOR_STEP; g > 0; g--) {
		RAINBOW_COLORS[i] = color(255, g * 255 / RAINBOW_COLOR_STEP, 0);
		i++;
	}
	for (let b = 0; b < RAINBOW_COLOR_STEP; b++) {
		RAINBOW_COLORS[i] = color(255, 0, b * 255 / RAINBOW_COLOR_STEP);
		i++;
	}
	for (let r = RAINBOW_COLOR_STEP; r > 0; r--) {
		RAINBOW_COLORS[i] = color(r * 255 / RAINBOW_COLOR_STEP, 0, 255);
		i++;
	}
	for (let g = 0; g < RAINBOW_COLOR_STEP; g++) {
		RAINBOW_COLORS[i] = color(0, g * 255 / RAINBOW_COLOR_STEP, 255);
		i++;
	}
	for (let b = RAINBOW_COLOR_STEP; b > 0; b--) {
		RAINBOW_COLORS[i] = color(0, 255, b * 255 / RAINBOW_COLOR_STEP);
		i++;
	}
	// RAINBOW_COLORS[i] = new Color(0, 255, 0);
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Mandelbrot
 * 
 * A GraphicsProgram that draws the Mandelbrot set.
 * 
 * This one tries to use web workers.
 * 
 * @see https://en.wikipedia.org/wiki/Mandelbrot_set
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 400;
const HEIGHT = 400;

const NR_OF_WORKERS = 3; // try 1,2,4,8
const NR_OF_COLORS = 60;

let xMin = -2.0;
let xMax = 1.0;
let yMin = -1.5;
let yMax = 1.5;

let startTime;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(1);

	noStroke();
	colorMode(HSB, NR_OF_COLORS, 100, 100)

	let xStep = (xMax - xMin) / WIDTH;
	let yStep = (yMax - yMin) / HEIGHT;

	let xHalf = (xMax - xMin) / NR_OF_WORKERS;
	startTime = millis();
	for (let xStart = xMin; xStart < xMax; xStart += xHalf) {
		var myWorker = new Worker('PrX_Advanced/mandelbrotWorker.js');
		myWorker.addEventListener('message', function (e) {
			// print('msg: ', e.data);
			let xArr = e.data;
			drawMandelbrot(xStep, yStep, xStart, xHalf, xArr);
		}, false);
		myWorker.postMessage([xStep, yStep, xStart, xHalf]);
	}
}

function drawMandelbrot(xStep, yStep, _xMin, _xHalf, xArr) {
	for (let x = _xMin; x < _xMin + _xHalf; x += xStep) {
		let yArr = xArr.pop();
		for (let y = yMin; y < yMax; y += yStep) {
			let c = yArr.pop();
			let i = (int)(((x - xMin) * WIDTH) / (xMax - xMin));
			let j = (int)(((y - yMin) * HEIGHT) / (yMax - yMin));
			let col = color(c, 100, 100);
			set(i, j, col);
		}
	}
	updatePixels();
	print('time: ' + (millis() - startTime) + 'ms');
}

function draw() {
	noLoop();
}

const MAX_ITERATION = 10000;
const NR_OF_COLORS = 60;

let xMin = -2.0;
let xMax = 1.0;
let yMin = -1.5;
let yMax = 1.5;

self.addEventListener('message', function (e) {

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
		return iteration % NR_OF_COLORS;
	}

	function calculateMandelbrot(xStep, yStep, _xMin, _xHalf) {
		let xArr = [];
		for (let x = _xMin + _xHalf; x >= _xMin; x -= xStep) {
			let yArr = [];
			for (let y = yMin; y < yMax; y += yStep) {
				let col = fun(x, y);
				// let c = color(col, 100, 100);
				yArr.push(col);
			}
			xArr.push(yArr);
		}
		return xArr;
	};

	var findSolutions = function (xStep, yStep, xStart, xHalf) {
		let xArr = calculateMandelbrot(xStep, yStep, xStart, xHalf);
		return xArr;
	};
	let sol = findSolutions(e.data[0], e.data[1], e.data[2], e.data[3]);
	self.postMessage(sol);

	// var message = e.data + 'to myself!';
	// self.postMessage(message);
	// self.close();

}, false);
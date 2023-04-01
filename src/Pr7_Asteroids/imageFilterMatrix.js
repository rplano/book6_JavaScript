/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: ImageFilterMatrix
 * 
 * A GraphicsProgram that matrices for image manipulation. We learn how to use
 * filter to sharpen, blur or emboss images.
 * 
 * @see http://docs.gimp.org/en/plug-in-convmatrix.html
 * @see http://lodev.org/cgtutor/filtering.html
 * 
 *      Image: Taj_Mahal_(Edited).jpeg <br/>
 *      Image Author: Yann; edited by Jim Carter <br/>
 *      Image License: Creative Commons Attribution-Share Alike 4.0 <br/>
 *      Link: https://en.wikipedia.org/wiki/File:Taj_Mahal_(Edited).jpeg <br/>
 * 
 *      Image: Mona_Lisa.jpg <br/>
 *      Link:
 *      https://en.wikipedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,
 *      _from_C2RMF_retouched.jpg <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 200;
const SCALE = 0.5;

let identityFilter = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
let identityFactor = 1;

let sharpenFilter = [[0, -1, 0], [-1, 5, -1], [0, -1, 0]];
let sharpenFactor = 1;

let blurFilter = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
let blurFactor = 9;

let edgeEnhanceFilter = [[1, 0, 0], [0, 1, 0], [0, 0, -1]];
let edgeEnhanceFactor = 1;

let edgeDetectFilter = [[1, 2, 1], [2, -12, 2], [1, 2, 1]];
let edgeDetectFactor = 1;

let embossFilter = [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]];
let embossFactor = 1;

let imag;	// can not be called image, because of function image()!!!
let array = [];
let array2 = [];
let currentFilter;
let currentFactor;

async function setup() {
	createCanvas(2 * SIZE, SIZE);
	frameRate(5);

	imag = new GImage("Pr7_Asteroids/Taj_Mahal_(Edited).jpeg");
	// imag = new GImage("Pr7_Asteroids/Mona_Lisa.jpg");
	imag.scale(SCALE);
	add(imag, 0, 0);

	// array = image.getPixelArray();
	// currentFilter = identityFilter;
	// currentFactor = identityFactor;
	// currentFilter = sharpenFilter;
	// currentFactor = sharpenFactor;
	// currentFilter = blurFilter;
	// currentFactor = blurFactor;
	// currentFilter = edgeEnhanceFilter;
	// currentFactor = edgeEnhanceFactor;
	currentFilter = edgeDetectFilter;
	currentFactor = edgeDetectFactor;
	// currentFilter = embossFilter;
	// currentFactor = embossFactor;
	print('1');
	let filterImage = await applyFilter();
	print('2');
	filterImage.scale(SCALE);
	add(filterImage, SIZE, 0);
}

async function applyFilter() {
	// important: we need to wait until pixels are available
	array = await imag.getPixelArray();

	let width = imag.width;
	let height = imag.height;

	for (let i = 0; i < height - 2; i++) {
		for (let j = 0; j < width - 2; j++) {
			applyFilterToPixel(i, j, width);
		}
	}

	let xored = new GImage(width, height);
	xored.setPixelArray(array2);
	return xored;
}

function applyFilterToPixel(x, y, width) {
	let r = 0;
	let g = 0;
	let b = 0;
	for (let i = 0; i <= 2; i++) {
		for (let j = 0; j <= 2; j++) {
			let n = ((x + i) * width + (y + j)) * 4;
			r += array[n + 0] * currentFilter[j][i];
			g += array[n + 1] * currentFilter[j][i];
			b += array[n + 2] * currentFilter[j][i];
		}
	}

	let nn = (x * width + y) * 4;
	array2[nn + 0] = checkBounds(r / currentFactor);
	array2[nn + 1] = checkBounds(g / currentFactor);
	array2[nn + 2] = checkBounds(b / currentFactor);
	array2[nn + 3] = 255;
}

// make sure value is between 0 and 255
function checkBounds(xx) {
	if (xx < 0) {
		xx = 0;
	} else if (xx > 255) {
		xx = 255;
	}
	return xx;
}

function draw() {
	update();
}
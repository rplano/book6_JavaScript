/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: ColorImage
 * 
 * A GraphicsProgram that does color reduction using modulo.
 * 
 * Image: Mona_Lisa.jpg <br/>
 * Link: https://en.wikipedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,
 * _from_C2RMF_retouched.jpg <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 200;
const SCALE = 0.5;
const NR_OF_COLORS = 2; // actually 3*2 
const FACTOR = 256 / NR_OF_COLORS;

async function setup() {
	createCanvas(2*SIZE, SIZE);
	frameRate(5);

	let image = new GImage2("Pr7_Asteroids/Mona_Lisa.jpg");
	image.scale(SCALE);
	add(image, 0, 0);

	let colorImage = await createReducedColorImage(image);
	colorImage.scale(SCALE);
	add(colorImage, SIZE, 0);
}

async function createReducedColorImage(image) {
	// important: we need to wait until pixels are available
	let pixels = await image.getPixelArray(); 

	let width = image.width;
	let height = image.height;

	let pixelsReduced = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let i = (y * width + x) * 4;
			let r = pixels[i + 0];
			let g = pixels[i + 1];
			let b = pixels[i + 2];
			let alpha = pixels[i + 3];

			r = Math.trunc(r / FACTOR) * FACTOR;
			g = Math.trunc(g / FACTOR) * FACTOR;
			b = Math.trunc(b / FACTOR) * FACTOR;

			pixelsReduced[i + 0] = r;
			pixelsReduced[i + 1] = g;
			pixelsReduced[i + 2] = b;
			pixelsReduced[i + 3] = alpha;
		}
	}

	let img = new GImage2(width, height);
	img.setPixelArray(pixelsReduced);
	return img;
}

function draw() {
	update();
}
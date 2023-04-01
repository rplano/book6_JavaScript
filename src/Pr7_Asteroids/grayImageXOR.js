/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: GrayImageXOR
 * 
 * A GraphicsProgram that takes two images and does an XOR operation twice.
 * 
 * Image: Taj_Mahal_(Edited).jpeg <br/>
 * Image Author: Yann; edited by Jim Carter <br/>
 * Image License: Creative Commons Attribution-Share Alike 4.0 <br/>
 * Link: https://en.wikipedia.org/wiki/File:Taj_Mahal_(Edited).jpeg <br/>
 * 
 * Image: Mona_Lisa.jpg <br/>
 * Link: https://en.wikipedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,
 * _from_C2RMF_retouched.jpg <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createCanvas(400, 400);
	frameRate(5);

	let image1 = new GImage("Pr7_Asteroids/Taj_Mahal_(Edited).jpeg");
	let grayImage1 = await createGrayImage(image1);

	let image2 = new GImage("Pr7_Asteroids/Mona_Lisa.jpg");
	let grayImage2 = await createGrayImage(image2);

	grayImage1.scale(0.5);
	add(grayImage1, 0, 0);
	grayImage2.scale(0.5);
	add(grayImage2, 200, 0);

	let xorImage12 = await doImage1XORImage2(grayImage1, grayImage2);
	xorImage12.scale(0.5);
	add(xorImage12, 0, 200);

	let xorImage122 = await doImage1XORImage2(xorImage12, grayImage1);
	xorImage122.scale(0.5);
	add(xorImage122, 200, 200);
}

async function doImage1XORImage2(grayImage1, grayImage2) {
	let pixels1 = await grayImage1.getPixelArray();
	let pixels2 = await grayImage2.getPixelArray();

	let width = grayImage1.width;
	let height = grayImage1.height;

	let xorPixels = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let i = (y * width + x) * 4;
			let i1 = pixels1[i];
			let i2 = pixels2[i];
			let xr = i1 ^ i2; // try |,&,+,...
			xorPixels[i + 0] = xr;
			xorPixels[i + 1] = xr;
			xorPixels[i + 2] = xr;
			xorPixels[i + 3] = 255;
		}
	}

	let xored = new GImage(width, height);
	xored.setPixelArray(xorPixels);
	return xored;
}

async function createGrayImage(image) {
	// important: we need to wait until pixels are available
	let pixels = await image.getPixelArray();

	let width = image.width;
	let height = image.height;

	let pixelsGray = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let i = (y * width + x) * 4;
			let red = pixels[i + 0];
			let green = pixels[i + 1];
			let blue = pixels[i + 2];
			let alpha = pixels[i + 3];
			let lum = Math.trunc(0.21 * red + 0.72 * green + 0.07 * blue);
			pixelsGray[i + 0] = lum;
			pixelsGray[i + 1] = lum;
			pixelsGray[i + 2] = lum;
			pixelsGray[i + 3] = alpha;
		}
	}

	let gray = new GImage(width, height);
	gray.setPixelArray(pixelsGray);
	return gray;
}

function draw() {
	update();
}
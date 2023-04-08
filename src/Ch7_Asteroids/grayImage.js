/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 4. GrayImage
 * 
 * A GraphicsProgram converting a color image to gray image.
 * 
 * Image: Taj_Mahal_(Edited).jpeg <br/>
 * Image Author: Yann; edited by Jim Carter <br/>
 * Image License: Creative Commons Attribution-Share Alike 4.0 <br/>
 * Link: https://en.wikipedia.org/wiki/File:Taj_Mahal_(Edited).jpeg <br/>
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createCanvas(400, 200);
	frameRate(5);

	// let image = new GImage2(200, 200, "Ch7_Asteroids/Taj_Mahal_(Edited).jpeg");
	let image = new GImage2("Ch7_Asteroids/Taj_Mahal_(Edited).jpeg");
	image.scale(0.25);
	add(image, 0, 0);

	let grayImage = await createGrayImage(image);
	// let grayImage = await createInvertedImage(image);
	grayImage.scale(0.25);
	add(grayImage, 200, 0);
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

	let gray = new GImage2(width, height);
	gray.setPixelArray(pixelsGray);
	return gray;
}

async function createInvertedImage(image) {
	// important: we need to wait until pixels are available
	let pixels = await image.getPixelArray(); 

	let width = image.width;
	let height = image.height;

	let pixels2 = [];
	// invert colors
	for (let i = 0; i < pixels.length; i += 4) {
			pixels2[i + 0] = 255- pixels[i + 0];
			pixels2[i + 1] = 255- pixels[i + 1];
			pixels2[i + 2] = 255- pixels[i + 2];
			pixels2[i + 3] = pixels[i + 3];
	}

	let gray = new GImage2(width, height);
	gray.setPixelArray(pixels2);
	return gray;
}

function draw() {
	update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: FlippedImage
 * 
 * A GraphicsProgram flips a given image upside down.
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

	let image = new GImage("Pr7_Asteroids/Taj_Mahal_(Edited).jpeg");
	image.scale(0.5);
	add(image, 0, 0);

	let flippedImage = await flipVertical(image);
	flippedImage.scale(0.5);
	add(flippedImage, 200, 0);
}

async function flipVertical(image) {
	// important: we need to wait until pixels are available
	let pixels = await image.getPixelArray();

	let width = image.width;
	let height = image.height;

	let pixelsFlipped = [];
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let i = (y * width + x) * 4;
			let j = ((height - y) * width + x) * 4;
			pixelsFlipped[j + 0] = pixels[i + 0];
			pixelsFlipped[j + 1] = pixels[i + 1];
			pixelsFlipped[j + 2] = pixels[i + 2];
			pixelsFlipped[j + 3] = pixels[i + 3];
		}
	}

	let flipped = new GImage(width, height);
	flipped.setPixelArray(pixelsFlipped);
	return flipped;
}

function draw() {
	update();
}
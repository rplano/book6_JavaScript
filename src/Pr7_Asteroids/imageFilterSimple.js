/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: ImageFilterSimple
 * 
 * A GraphicsProgram that does simple image manipulation. We learn how to use
 * filter to sharpen, blur or emboss images.
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

const SIZE = 200;
const SCALE = 0.5;

async function setup() {
	createCanvas(2*SIZE, SIZE);
	frameRate(5);

	let image = new GImage2("Pr7_Asteroids/Mona_Lisa.jpg");
	// let image = new GImage2("Pr7_Asteroids/Taj_Mahal_(Edited).jpeg");
	// add(image, 0, 0);

	let grayImage = await createGrayImage(image);
	grayImage.scale(SCALE);
	add(grayImage, 0, 0);

	let sharpImage = await createSharpImage(grayImage);
	sharpImage.scale(SCALE);
	add(sharpImage, SIZE, 0);
}

async function createSharpImage(image) {
	// important: we need to wait until pixels are available
	let pixels = await image.getPixelArray(); 

	let w = image.width;
	let h = image.height;

	// sharpen image
	let r = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]];

	let pixelsGray = [];
	for (let y = 1; y < h - 1; y++) {
		for (let x = 1; x < w - 1; x++) {

			for (let j = -1; j <= 1; j++) {
				for (let i = -1; i <= 1; i++) {
					let n = ((y + j) * w + (x + i)) * 4;
					r[i + 1][j + 1] = pixels[n + 0];
				}
			}
			
			// http://docs.gimp.org/en/plug-in-convmatrix.html
			// http://lodev.org/cgtutor/filtering.html

			// identity
			// let fact = 1;
			// let xx = r[0][0];
			// subtract
			let fact = 10;
			let xx = r[1][1] - r[0][1];
			// edge
			// let fact = 8;
			// let xx = +0 * r[0][0] + 1 * r[0][1] + 0 * r[0][2] + 1 * r[1][0] - 4 * r[1][1] + 1 * r[1][2] + 0 * r[2][0] +
			// 	1 * r[2][1] + 0 * r[2][2];
			// sharpen
			// let fact = 1;
			// let xx = (+0 * r[0][0] - 1 * r[0][1] + 0 * r[0][2] - 1 * r[1][0] + 5 * r[1][1] - 1 * r[1][2] + 0 * r[2][0] -
			// 	1 * r[2][1] + 0 * r[2][2]);
			// blur
			// let fact = 1 / 9;
			// let xx = r[1][1] + r[0][0] + r[0][1] + r[0][2] + r[1][0] + r[1][2] + r[2][0] + r[2][1] + r[2][2];
			// emboss
			// let fact = 1;
			// let xx = -2 * r[0][0] - 1 * r[0][1] - 0 * r[0][2] - 1 * r[1][0] + 1 * r[1][1] +
			// 	1 * r[1][2] + 0 * r[2][0] + 1 * r[2][1] + 2 * r[2][2];

			// make sure color values are between 0 and 255
			xx *= fact;
			if (xx < 0) {
				xx = 0;
			} else if (xx > 255) {
				// print('>');
				xx = 255;
			}

			let nn = (y * w + x) * 4;
			pixelsGray[nn + 0] = xx;
			pixelsGray[nn + 1] = xx;
			pixelsGray[nn + 2] = xx;
			pixelsGray[nn + 3] = 255;
		}
	}

	let gray = new GImage2(w, h);
	gray.setPixelArray(pixelsGray);
	return gray;
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

function draw() {
	update();
}
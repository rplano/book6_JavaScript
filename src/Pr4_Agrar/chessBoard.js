/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: ChessBoard
 * 
 * A GraphicsProgram that draws a checker board on the screen using GRects.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 300);
	frameRate(5);

	const NROWS = 8;
	const NCOLUMNS = 8;

	let x = 0;
	let y = 0;
	let width = 300 / NCOLUMNS;
	for (let j = 0; j < NROWS; j++) {
		for (let i = 0; i < NCOLUMNS; i++) {
			let field = new GRect(width, width);
			if (((i + j) % 2) == 0) {
				field.setFilled(true);
			}
			add(field, x, y);
			x = x + width;
		}
		y = y + width;
		x = 0;
	}
}

function draw() {
	update();
}
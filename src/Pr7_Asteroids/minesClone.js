/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: MinesClone
 * 
 * MinesClone: randomly distribute 10 mines over an 8x8 playing field. Use
 * checkForMinesAt(x,y) to check for mines. It returns a char with the digit
 * ' ', '1', ... or 'M'. Start a timer at the beginning of the game. Use
 * JOptionPane to give user feedback how long it took. Challenge: play the real
 * game of mines, you will notice when you click on an empty field the
 * surrounding tiles will be uncovered.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

class MinesConstant { }
MinesConstant.FIELD_SIZE = 8;
MinesConstant.PIXEL_PER_TILE = 50;

/** Width and height of application window in pixels */
MinesConstant.APPLICATION_WIDTH = MinesConstant.FIELD_SIZE * MinesConstant.PIXEL_PER_TILE;
MinesConstant.APPLICATION_HEIGHT = MinesConstant.FIELD_SIZE * MinesConstant.PIXEL_PER_TILE;

/** Number of mines in the game */
MinesConstant.NUMBER_OF_MINES = 10;

/** Array of colors for the mine count labels */
MinesConstant.LABEL_COLORS = [Color.BLUE, Color.GREEN,
Color.RED, Color.ORANGE, Color.MAGENTA, Color.CYAN, Color.PINK,
Color.YELLOW];


/** Playing field is represented by an 8x8 array of chars */
let field = makeArray(MinesConstant.FIELD_SIZE, MinesConstant.FIELD_SIZE);

function makeArray(d1, d2) {
	var arr = [];
	for (let i = 0; i < d2; i++) {
		arr.push(new Array(d1));
	}
	return arr;
}

/** Runs the MinesClone program. */
function setup() {
	createCanvas(MinesConstant.APPLICATION_WIDTH, MinesConstant.APPLICATION_HEIGHT);
	frameRate(5);

	initialzeField();
	field = MinesHelper.countMines(field);
	drawInitialField();
	// drawWholeField();
}

function draw() {
	update();
}

/**
 * Initialize the whole field with NUMBER_OF_MINES being randomly
 * distributed.
 */
function initialzeField() {
	let rgen = new RandomGenerator();
	for (let i = 0; i < MinesConstant.NUMBER_OF_MINES; i++) {
		let x = rgen.nextInt(0, MinesConstant.FIELD_SIZE - 1);
		let y = rgen.nextInt(0, MinesConstant.FIELD_SIZE - 1);
		field[x][y] = 'M';
	}
}

/**
 * Draws the whole field, showing all the information.
 */
function drawWholeField() {
	for (let i = 0; i < MinesConstant.FIELD_SIZE; i++) {
		for (let j = 0; j < MinesConstant.FIELD_SIZE; j++) {
			drawOneTile(i, j);
		}
	}
}

/**
 * Draws at the position i,j an image of a mine ("mine.png"), if there is
 * one or the empty field image ("empty.png") overlayed with a GLabel
 * displaying the number of neighboring mines.
 */
function drawOneTile(i, j) {
	// let obj = getElementAt(i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
	// removeObj(obj);
	let img;
	switch (field[i][j]) {
		case 'M':
			img = new GImage("Pr7_Asteroids/mine.png");
			add(img, i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
			break;
		case '0':
			img = new GImage("Pr7_Asteroids/empty.png");
			add(img, i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
			break;
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
			img = new GImage("Pr7_Asteroids/empty.png");
			add(img, i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
			addLabelToTile(i, j, field[i][j], MinesConstant.LABEL_COLORS[field[i][j] - '1']);
			break;
		default:
			img = new GImage("Pr7_Asteroids/initial.png");
			add(img, i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
	}
}

function addLabelToTile(i, j, nr, col) {
	let nrLbl = new GLabel("" + nr);
	nrLbl.setColor(col);
	nrLbl.setFont("SansSerif-32");
	add(nrLbl, i * MinesConstant.PIXEL_PER_TILE + 15, j * MinesConstant.PIXEL_PER_TILE + 35);
}

/**
 * Draws the initial field, with all fields showing the "initial.png" image.
 */
function drawInitialField() {
	for (let i = 0; i < MinesConstant.FIELD_SIZE; i++) {
		for (let j = 0; j < MinesConstant.FIELD_SIZE; j++) {
			let img = new GImage("Pr7_Asteroids/initial.png");
			add(img, i * MinesConstant.PIXEL_PER_TILE, j * MinesConstant.PIXEL_PER_TILE);
		}
	}
}

function discoverEmtpyTiles(x, y) {
	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if ((x + i >= 0) && (x + i < MinesConstant.FIELD_SIZE)) {
				if ((y + j >= 0) && (y + j < MinesConstant.FIELD_SIZE)) {
					drawOneTile(x + i, y + j);
					if (field[x + i][y + j] == '0') {
						// if ( (i!=0) && (j!=0) ) {
						// discoverEmtpyTiles(x,y);
						// }
					}
				}
			}
		}
	}
}

function mouseClicked() {
	let x = Math.trunc(mouseX / MinesConstant.PIXEL_PER_TILE);
	let y = Math.trunc(mouseY / MinesConstant.PIXEL_PER_TILE);
	// if (e.getButton() == MouseEvent.BUTTON3) {
	if (mouseButton === LEFT) {
		let obj = getElementAt(x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
		removeObj(obj);
		if (field[x][y] == 'M') {
			drawWholeField();
			let img = new GImage("Pr7_Asteroids/exploded.png");
			add(img, x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);

			// 	IODialog dia = getDialog();
			// dia.println("You lost!");
			print("You lost!");
		} else if (field[x][y] == '0') {
			// drawOneTile(x, y);
			discoverEmtpyTiles(x, y);
		} else {
			drawOneTile(x, y);
		}
	}
}

/**
 * Optional: when mouse is pressed show the "initial_pressed.png" image
 */
function mousePressed() {
	let x = Math.trunc(mouseX / MinesConstant.PIXEL_PER_TILE);
	let y = Math.trunc(mouseY / MinesConstant.PIXEL_PER_TILE);
	let obj = getElementAt(x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
	removeObj(obj);
	let img = new GImage("Pr7_Asteroids/initial_pressed.png");
	add(img, x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
}

/**
 * Optional: when mouse is released show again the "initial.png" image
 */
function mouseReleased() {
	let x = Math.trunc(mouseX / MinesConstant.PIXEL_PER_TILE);
	let y = Math.trunc(mouseY / MinesConstant.PIXEL_PER_TILE);
	if (mouseButton === LEFT) {
		let obj = getElementAt(x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
		removeObj(obj);
		let img = new GImage("Pr7_Asteroids/initial.png");
		add(img, x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
	} else if (mouseButton === CENTER) {
		let obj = getElementAt(x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
		removeObj(obj);
		let img = new GImage("Pr7_Asteroids/marked.png");
		add(img, x * MinesConstant.PIXEL_PER_TILE, y * MinesConstant.PIXEL_PER_TILE);
	}
}

/**
 * MinesHelper: a helper class for MinesClone that given a field with mines,
 * counts all the mines.
 */
class MinesHelper  {

	/**
	 * It is advantageous to keep a reference to the field, otherwise we would
	 * have to pass it to the countMinesSurroundingTile() method every time.
	 */
	static field;

	/**
	 * This method goes through all tiles of a given field and counts the mines
	 * surrounding the given tile. If the tile is a mine, no counting needs to
	 * be done. <br>
	 * Pre-condition: the field f has only the chars 'M' and ' ' (space) in it. <br>
	 * Post-condition: the field f now has the chars 'M' (mine) or ' ' (no mines
	 * neighboring), '1' (one mine neighboring), '2' (two mines neighboring),
	 * etc.
	 * 
	 * @param f
	 *            a 2D field of chars.
	 */
	static countMines(f) {
		field = f;
		for (let i = 0; i < MinesConstant.FIELD_SIZE; i++) {
			for (let j = 0; j < MinesConstant.FIELD_SIZE; j++) {
				if (field[i][j] != 'M') {
					let nrOfMines = MinesHelper.countMinesSurroundingTile(i, j);
					field[i][j] = '' + nrOfMines;
				}
			}
		}
		// print(field[4][4]);
		return field;
	}

	/**
	 * Counts the mines surrounding a given tile.
	 * 
	 * @param x
	 *            the x position of the tile.
	 * @param y
	 *            the y position of the tile.
	 * @return the number of mines surrounding the given tile.
	 */
	static countMinesSurroundingTile(x, y) {
		let nrOfMines = 0;
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				if ((x + i >= 0) && (x + i < MinesConstant.FIELD_SIZE)) {
					if ((y + j >= 0) && (y + j < MinesConstant.FIELD_SIZE)) {
						if (field[x + i][y + j] == 'M')
							nrOfMines++;
					}
				}
			}
		}
		return nrOfMines;
	}
}
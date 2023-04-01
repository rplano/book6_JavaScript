/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: BattleShip
 * 
 * A simple version of the BattleShip game.
 * 
 * @see https://en.wikipedia.org/wiki/Battleship_(game)
 * @see http://www.learn4good.com/games/board/battleship.htm computer puts ships
 *      at random positions AircraftCarrier 5 Battleship 4 Submarine 3 Destroyer
 *      3 PatrolBoat 2
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 300;
const OFFSET = 46;
const BOARD_SIZE = 10;
const STEP = SIZE / BOARD_SIZE;
const rgen = new RandomGenerator();

// AircraftCarrier 5, Battleship 4, Submarine 3, Destroyer 3, PatrolBoat 2
// the order is important, because we want to first place the large ships
const SHIP_SIZES = [5, 4, 3, 3, 2];

let board = makeArray(BOARD_SIZE, BOARD_SIZE);

function makeArray(d1, d2) {
	var arr = [];
	for (let i = 0; i < d2; i++) {
		arr.push(new Array(d1));
	}
	return arr;
}

function setup() {
	createCanvas(SIZE, SIZE);
	frameRate(5);

	drawLines();
	initBoard();
	// drawBoard();
}

function draw() {
	update();
}

function mousePressed() {
	let i = Math.trunc(mouseX / STEP);
	let j = Math.trunc(mouseY / STEP);
	showLabelAt(i, j);
}

function drawBoard() {
	for (let i = 0; i < BOARD_SIZE; i++) {
		for (let j = 0; j < board.length; j++) {
			showLabelAt(i, j);
		}
	}
}

function showLabelAt(i, j) {
	let lbl = new GLabel("" + board[i][j]);
	if (board[i][j] === undefined) {
		lbl = new GLabel(".");
	}
	lbl.setFont("SansSerif-bold-24");
	let x = i * STEP + 7;
	let y = j * STEP + 24;
	add(lbl, x, y);
}

function initBoard() {
	for (let j = 0; j < SHIP_SIZES.length; j++) {
		placeShip(j + 1, SHIP_SIZES[j]);
	}
	// // random
	// for (int k = 0; k < 20; k++) {
	// int i = rgen.nextInt(0, BOARD_SIZE - 1);
	// int j = rgen.nextInt(0, BOARD_SIZE - 1);
	// board[i][j] = rgen.nextInt(0, 5);
	// }
}

// the order is important, because we want to first place the large ships
function placeShip(shipNr, shipSize) {
	let locationOK = false;
	while (!locationOK) {
		let i = rgen.nextInt(0, BOARD_SIZE - shipSize - 1);
		let j = rgen.nextInt(0, BOARD_SIZE - shipSize - 1);
		let directionRight = rgen.nextBoolean();
		if (directionRight) {
			let isOK = true;
			for (let k = 0; k < shipSize; k++) {
				if (board[i][j + k] > 0) {
					isOK = false;
				}
			}
			if (isOK) {
				for (let k = 0; k < shipSize; k++) {
					board[i][j + k] = shipSize;
				}
				locationOK = true;
			}
		} else {
			let isOK = true;
			for (let k = 0; k < shipSize; k++) {
				if (board[i + k][j] > 0) {
					isOK = false;
				}
			}
			if (isOK) {
				for (let k = 0; k < shipSize; k++) {
					board[i + k][j] = shipSize;
				}
				locationOK = true;
			}

		}
	}
}

function drawLines() {
	let x = STEP;
	for (let i = 0; i < BOARD_SIZE; i++) {
		let verticalLine = new GLine(x, 0, x, SIZE);
		add(verticalLine);
		let horizontalLine = new GLine(0, x, SIZE, x);
		add(horizontalLine);
		x += STEP;
	}
}
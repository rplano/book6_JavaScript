/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: TicTacToe
 * 
 * Draw the UI for the TicTacToe game.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("Pr4_Agrar/ticTacToeLogic.js");

// constants
const WIDTH = 300;
const HEIGHT = 300;
const CELL_WIDTH = 100;

// instance variables
let currentPlayer = 1;
let tttl;


function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	tttl = new TicTacToeLogic();

	let background = new GImage("Pr4_Agrar/TicTacToe_background.png");
	background.scale(0.5);
	add(background, 0, 0);
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;
	let i = Math.trunc(x / CELL_WIDTH);
	let j = Math.trunc(y / CELL_WIDTH);

	if (tttl.isMoveAllowed(currentPlayer, i, j)) {
		displayPlayer(i, j, currentPlayer);
	}

	if (tttl.isGameOver()) {
		displayGameOver();
	}
}

function displayGameOver() {
	let lbl = new GLabel("Player " + currentPlayer + " lost!");
	lbl.setColor(Color.RED);
	lbl.setFont('Arial');
	lbl.setFontSize(36);
	// lbl.setLocation((WIDTH - lbl.getWidth()) / 2, HEIGHT / 2);
	lbl.setLocation((WIDTH - lbl.getWidth(drawingContext)) / 2, HEIGHT / 2);
	add(lbl);
}

function displayPlayer(i, j, player2) {
	if (currentPlayer == 1) {
		let img = new GImage("Pr4_Agrar/TicTacToe_X.png");
		img.scale(0.5);
		add(img, i * CELL_WIDTH, j * CELL_WIDTH);
		currentPlayer = 2;
	} else {
		let img = new GImage("Pr4_Agrar/TicTacToe_O.png");
		img.scale(0.5);
		add(img, i * CELL_WIDTH, j * CELL_WIDTH);
		currentPlayer = 1;
	}
}

function draw() {
	update();
}
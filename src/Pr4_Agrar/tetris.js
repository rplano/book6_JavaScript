/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Tetris
 * 
 * Play a simple version of Tetris.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const BRICK_SIZE = 30;
const WIDTH = BRICK_SIZE * 10;
const HEIGHT = BRICK_SIZE * 11 - 1;

// instance variables
let rgen = new RandomGenerator();
let brick;
let vy = BRICK_SIZE;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(1);

	createNewBrick();
}

function draw() {
	moveBrick();
	checkForCollision();
	update();
}

function keyPressed() {
	switch (keyCode) {
		case UP_ARROW:
			// move up
			break;
		case DOWN_ARROW:
			// move down
			brick.move(0, BRICK_SIZE);
			break;
		case LEFT_ARROW:
			// move left
			brick.move(-BRICK_SIZE, 0);
			break;
		case RIGHT_ARROW:
			// move right
			brick.move(BRICK_SIZE, 0);
			break;
	}
}

function checkForCollision() {
	// check bottom
	if (brick.getY() > HEIGHT - brick.getHeight()) {
		createNewBrick();
	}
	// check for other bricks
	let obj = getElementAt(brick.getX() + 1,
		brick.getY() + brick.getHeight());
	if ((obj != null) && (obj != brick)) {
		createNewBrick();
		return;
	}
	obj = getElementAt(brick.getX() + brick.getWidth() - 1, brick.getY()
		+ brick.getHeight());
	if ((obj != null) && (obj != brick)) {
		createNewBrick();
		return;
	}
}

function moveBrick() {
	brick.move(0, vy);
}

function createNewBrick() {
	switch (rgen.nextInt(0, 3)) {
		case 0:
			brick = new GRect(WIDTH / 2, 0, BRICK_SIZE, BRICK_SIZE * 2);
			break;
		case 1:
			brick = new GRect(WIDTH / 2, 0, BRICK_SIZE * 2, BRICK_SIZE);
			break;
		case 2:
			brick = new GRect(WIDTH / 2, 0, BRICK_SIZE * 2, BRICK_SIZE * 2);
			break;
		default:
			brick = new GRect(WIDTH / 2, 0, BRICK_SIZE, BRICK_SIZE);
			break;
	}
	brick.setFilled(true);
	brick.setFillColor(rgen.nextColor());
	add(brick);
	//brick.sendToBack();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Agrar
 * 
 * The objective of the game is to grow a cell by swallowing pellets.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

/** Width and height of application window in pixels */
const WIDTH = 500;
const HEIGHT = 500;

const FPS = 25;
const MOUSE_MOVE_SPEED = 10;

/** Radius of the ball in pixels */
const BALL_RADIUS = 20;
const FOOD_RADIUS = 10;

const BACKGROUND_IMAGE_NAME = "Pr4_Agrar/background_grid.png";

const rgen = new RandomGenerator();

let backgroundImage;
let cell;
let xMouse = 0;
let yMouse = 0;

/** Runs the Agar.io program. */
function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(FPS);

	// create and add ball
	cell = new GOval(BALL_RADIUS, BALL_RADIUS);
	cell.setFilled(true);
	cell.setFillColor(Color.RED);
	this.add(cell, WIDTH / 2, HEIGHT / 2);

	// add a big background image
	backgroundImage = new GImage(BACKGROUND_IMAGE_NAME);
	backgroundImage.scale(3);
	// this.add(backgroundImage);
}

function draw() {
	moveCell();
	createRandomFood();
	checkForCollision();
	update();
}

function checkForCollision() {
	let w = cell.getWidth();
	let h = cell.getHeight();
	for (let x = cell.getX(); x < cell.getX() + w; x += FOOD_RADIUS) {
		for (let y = cell.getY(); y < cell.getY() + h; y += FOOD_RADIUS) {
			let collisonObject = getElementAt(x, y);
			if ((collisonObject != null) && (collisonObject != cell)) {
				cell.setSize(w + 1, h + 1);
				removeObj(collisonObject);
				collisonObject = null;
			}
		}
	}
}

function createRandomFood() {
	if (rgen.nextInt(10) < 2) { // only do it 20 percent of the time
		let food = new GOval(FOOD_RADIUS, FOOD_RADIUS);
		food.setFilled(true);
		food.setFillColor(rgen.nextColor());
		add(food, rgen.nextInt(3 * WIDTH) - WIDTH, rgen.nextInt(HEIGHT));
		sendToBack(food);
	}
}

function moveCell() {
	// get distance between mouse and ball
	let dx = xMouse - cell.getX() - cell.getWidth() / 2;
	let dy = yMouse - cell.getY() - cell.getHeight() / 2;
	// scale
	dx /= MOUSE_MOVE_SPEED;
	dy /= MOUSE_MOVE_SPEED;
	// move ball
	cell.move(dx, dy);
}

function mouseMoved() {
	xMouse = mouseX;
	yMouse = mouseY;
}
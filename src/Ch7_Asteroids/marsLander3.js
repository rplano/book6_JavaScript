/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 7a. MarsLander3
 * 
 * A simulation of landing on the mars.  Demonstrating composition.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const APP_WIDTH = 300;
const APP_HEIGHT = 300;

const SPACE_SHIP_SIZE = 40;
const GRAVITY = 1;

// instance variables
let spaceShip;
let vy = 0;
let vx = 0;
let isDead = false;

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(5);

	spaceShip = new GSmiley(SPACE_SHIP_SIZE);
	add(spaceShip, (APP_WIDTH - SPACE_SHIP_SIZE) / 2, SPACE_SHIP_SIZE);
}

function draw() {
	if (spaceShip != null) {
		moveSpaceShip();
		checkForCollision();
	} else {
		displayGameOver();
		noLoop();
	}
	update();
}

function moveSpaceShip() {
	vy += GRAVITY;
	spaceShip.move(vx, vy);
}

function checkForCollision() {
	let y = spaceShip.getY();
	if (y > (APP_HEIGHT - SPACE_SHIP_SIZE)) {
		if (vy > 5) {
			isDead = true;
		}
		spaceShip = null;
	}
}

function keyPressed() {
	switch (keyCode) {
		case 38: // up
			vy--;
			break;
		case 40: // down
			vy++;
			break;
	}
}

function displayGameOver() {
	if (isDead) {
		displayGameOverMessage("You're dead!");
	} else {
		displayGameOverMessage("You survived!");
	}
}

function displayGameOverMessage(msg) {
	let lbl = new GLabel(msg);
	lbl.setColor(Color.RED);
	lbl.setFont('Arial');
	lbl.setFontSize(36);
	lbl.setLocation((APP_WIDTH - lbl.getWidth()) / 2, APP_HEIGHT / 2);
	add(lbl);
}


class GSmiley extends GCompound {

	constructor(SIZE) {
		super();

		let face = new GOval(SIZE, SIZE);
		face.setFilled(true);
		face.setFillColor(Color.YELLOW);
		this.add(face);

		let leftEye = new GOval(SIZE / 10, SIZE / 10);
		leftEye.setColor(Color.GREEN);
		this.add(leftEye, SIZE / 4, SIZE / 4);
		let rightEye = new GOval(SIZE / 10, SIZE / 10);
		rightEye.setColor(Color.RED);
		this.add(rightEye, 3 * SIZE / 4, SIZE / 4);

		let mouth = new GArc(SIZE / 2, SIZE / 2, 225, 90);
		this.add(mouth, 0.3 * SIZE, 0.3 * SIZE);
	}
}
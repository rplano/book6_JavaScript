/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: 5. MarsLander
 * 
 * A simulation of landing on the mars.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const APP_WIDTH = 300;
const APP_HEIGHT = 300;

const SPACE_SHIP_SIZE = 20;
const GRAVITY = 1;

// instance variables
let spaceShip;
let vy = 0;
let vx = 0;
let isDead = false;

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(5);

	spaceShip = new GPolygon();
	spaceShip.addVertex(0, -SPACE_SHIP_SIZE);
	spaceShip.addVertex(-2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
	spaceShip.addVertex(0, SPACE_SHIP_SIZE / 2);
	spaceShip.addVertex(2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
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


class GSpaceShip extends GPolygon {

	constructor(x, y) {
		super(x, y);
		super.addVertex(0, -SPACE_SHIP_SIZE);
		super.addVertex(-2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
		super.addVertex(0, SPACE_SHIP_SIZE / 2);
		super.addVertex(2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
	}
}
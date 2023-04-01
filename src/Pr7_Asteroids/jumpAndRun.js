/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: JumpAndRun
 * 
 * Inspired by "Geometry Dash". Shows how to use arrays. Only die if you collide
 * with GOval.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const APP_WIDTH = 400;
const APP_HEIGHT = 200;

const GRAVITY = 1;

const BALL_DIAM = 30;
const BALL_OFFSET = 2;
const X_START = APP_WIDTH / 2;
const Y_START = APP_HEIGHT - BALL_DIAM - BALL_OFFSET;

const rgen = new RandomGenerator();

let alive = true;
let ballVel = 0.0;
let backgroundVel = 2.0;

let ball;
let movingObject = new Array(Math.trunc(400 / BALL_DIAM + 1)); //new GObject[400 / BALL_DIAM + 1];
let world = "  RRRR  O   RO  OOO  R";


function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(20);

	createBall();
	createNewObjects();

	function createBall() {
		ball = new GOval(BALL_DIAM, BALL_DIAM);
		ball.setFilled(true);
		ball.setFillColor(Color.PINK);
		add(ball, X_START, Y_START);
	}

	function createNewObjects() {
		for (let i = 0; i < movingObject.length; i++) {
			// print(world.charAt(i));
			switch (world.charAt(i)) {
				case 'R':
					let rect = new GRect(APP_WIDTH + i * BALL_DIAM, Y_START, BALL_DIAM, BALL_DIAM);
					rect.setColor(rgen.nextColor());
					rect.setFilled(true);
					rect.setFillColor(rgen.nextColor());
					movingObject[i] = rect;
					add(movingObject[i]);
					break;
				case 'O':
					let oval = new GOval(APP_WIDTH + i * BALL_DIAM, Y_START, BALL_DIAM, BALL_DIAM);
					oval.setColor(rgen.nextColor());
					oval.setFilled(true);
					oval.setFillColor(rgen.nextColor());
					movingObject[i] = oval;
					add(movingObject[i]);
					break;
				default:
					movingObject[i] = null;
					break;
			}
		}
	}
}

function draw() {
	if (alive) {
		moveBall();
		moveObjects();
		checkForCollision();
		update();
	} else {
		print('Game over!');
		noLoop();
	}
}

function keyPressed() {
	if (ball.getY() >= APP_HEIGHT - BALL_DIAM - BALL_OFFSET) {
		ballVel = -15.0;
	}
	// sitting on top of a Rect
	if (ball.getY() ==X_START, APP_HEIGHT - 2*BALL_DIAM - BALL_OFFSET && ballVel == 0.0) {
		ballVel = -10.0;
	}
}

function moveBall() {
	// increase yVelocity due to gravity on each cycle
	ball.move(0, ballVel);
	ballVel = ballVel + GRAVITY;
}

function moveObjects() {
	for (let i = 0; i < movingObject.length; i++) {
		if (movingObject[i] != null) {
			movingObject[i].move(-backgroundVel, 0);
			if (movingObject[i].getX() < -BALL_DIAM) {
				movingObject[i].setLocation(APP_WIDTH, APP_HEIGHT - BALL_DIAM
					- BALL_OFFSET);
				// backgroundVel += 0.3;
			}
		}
	}
}

function checkForCollision() {
	checkForCollisionWithFloor();
	checkForCollisionWithObjects();
}

function checkForCollisionWithObjects() {
	let obj = getElementAt(ball.getX() + BALL_DIAM / 2, ball.getY()
		+ BALL_DIAM + 1);
	if ((obj != null)) {
		if (obj instanceof GRect) {
			ballVel = 0.0;
			ball.setLocation(X_START, APP_HEIGHT - 2*BALL_DIAM - BALL_OFFSET);
		} else {
			alive = false;
		}
	}
}

function checkForCollisionWithFloor() {
	if (ball.getY() >= APP_HEIGHT - BALL_DIAM - BALL_OFFSET) {
		ballVel = 0.0;
		ball.setLocation(X_START, APP_HEIGHT - BALL_DIAM - BALL_OFFSET);
	}
}
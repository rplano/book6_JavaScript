/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: FlappyBall
 * 
 * Inspired by its big cousin. ToDo: dont touch floor!
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const APP_WIDTH = 400;
const APP_HEIGHT = 400;

const GRAVITY = 1;

const WALL_WIDTH = 30;

const BALL_DIAM = 30;
const BALL_OFFSET = 2;
const X_START = APP_WIDTH / 2;
const Y_START = 100;

const rgen = new RandomGenerator();

let alive = true;
let wallCounter = 0;
let ballVel = 0.0;
let wallVel = 1.5;
let ball;
let upperWall;
let lowerWall;

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(20);

	createBall();
	createNewWall();

	function createBall() {
		ball = new GOval(BALL_DIAM, BALL_DIAM);
		ball.setFilled(true);
		ball.setFillColor(Color.PINK);
		add(ball, X_START, Y_START);
	}
}

function draw() {
	if (alive) {
		moveBall();
		moveWall();
		checkForCollision();
		update();
	} else {
		print('Game over!');
		noLoop();
	}
}

/** Update and move ball */
function moveBall() {
	// increase yVelocity due to gravity on each cycle
	ball.move(0, ballVel);
	ballVel = ballVel + GRAVITY;
}

function moveWall() {
	upperWall.move(-wallVel, 0);
	lowerWall.move(-wallVel, 0);
	if (upperWall.getX() < -BALL_DIAM) {
		removeObj(upperWall);
		removeObj(lowerWall);
		createNewWall();
		wallCounter++;
		wallVel += 0.3;
	}
}

function keyPressed() {
	ballVel = -3.0;
}

function checkForCollision() {
	checkForCollisionWithFloor();
	checkForCollisionWithWall();
}

function checkForCollisionWithWall() {
	let obj = getElementsAt(ball.getX() + BALL_DIAM, ball.getY());
	for (let i = 0; i < obj.length; i++) {
		if ((obj[i] === lowerWall) || (obj[i] === upperWall)) {
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

function createNewWall() {
	let middle = rgen.nextInt(2 * BALL_DIAM, APP_HEIGHT - 2 * BALL_DIAM);
	upperWall = new GRect(APP_WIDTH, 0, WALL_WIDTH, middle - BALL_DIAM);
	upperWall.setFilled(true);
	upperWall.setFillColor(rgen.nextColor());
	add(upperWall);
	lowerWall = new GRect(APP_WIDTH, middle + BALL_DIAM, WALL_WIDTH, APP_HEIGHT);
	lowerWall.setFilled(true);
	lowerWall.setFillColor(rgen.nextColor());
	add(lowerWall);
}
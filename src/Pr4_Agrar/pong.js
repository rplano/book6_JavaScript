/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Pong
 * 
 * A simple version of the game of Pong, a little like ping-pong.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 400;
const HEIGHT = 300;
const BALL_SIZE = 20;
const PADDLE_SEPARATION = 10;
const PADDLE_VY = 20;
const PADDLE_HEIGHT = 50;
const PADDLE_WIDTH = 10;

// instance variables
let ball;
let leftPaddle;
let rightPaddle;

let vx = 2;
let vy = 3;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(25);

	setBackground(Color.BLACK);

	ball = new GOval(WIDTH / 2, HEIGHT / 2, BALL_SIZE, BALL_SIZE);
	ball.setColor(Color.WHITE);
	ball.setFilled(true);
	add(ball);

	leftPaddle = new GRect(PADDLE_SEPARATION, HEIGHT / 2,
		PADDLE_WIDTH, PADDLE_HEIGHT);
	leftPaddle.setColor(Color.WHITE);
	leftPaddle.setFilled(true);
	add(leftPaddle);

	rightPaddle = new GRect(WIDTH - PADDLE_SEPARATION - 10,
		HEIGHT / 2, PADDLE_WIDTH, PADDLE_HEIGHT);
	rightPaddle.setColor(Color.WHITE);
	rightPaddle.setFilled(true);
	add(rightPaddle);

	printHelp();
}

function draw() {
	moveBall();
	checkForCollision();

	update();
}

function printHelp() {
	print("Use 'p/l' for right paddle, and 'q/a' for left paddle.");
}

function keyPressed() {
	switch (key) {
		case 'p': // right paddle up
			rightPaddle.move(0, -PADDLE_VY);
			break;
		case 'l': // right paddle down
			rightPaddle.move(0, PADDLE_VY);
			break;
		case 'q': // left paddle up
			leftPaddle.move(0, -PADDLE_VY);
			break;
		case 'a': // left paddle down
			leftPaddle.move(0, PADDLE_VY);
			break;
	}
}

function checkForCollision() {
	checkForCollisionWithWall();
	checkForCollisionWithPaddle(leftPaddle);
	checkForCollisionWithPaddle(rightPaddle);
}

function checkForCollisionWithPaddle(paddle) {
	let x = ball.getX();
	let y = ball.getY();

	let obj = getElementAt(x, y);
	if ((obj !== undefined) && (obj === paddle)) {
		vx = -vx;
		return;
	}
	obj = getElementAt(x, y + BALL_SIZE);
	if ((obj !== undefined) && (obj === paddle)) {
		vx = -vx;
		return;
	}
	obj = getElementAt(x + BALL_SIZE, y);
	if ((obj !== undefined) && (obj === paddle)) {
		vx = -vx;
		return;
	}
	obj = getElementAt(x + BALL_SIZE, y + BALL_SIZE);
	if ((obj !== undefined) && (obj === paddle)) {
		vx = -vx;
		return;
	}
}

function checkForCollisionWithWall() {
	let x = ball.getX();
	let y = ball.getY();
	if ((y < 0) || (y > HEIGHT)) {
		vy = -vy;
	}
	if ((x < 0) || (x > WIDTH)) {
		ball.setLocation(WIDTH / 2, HEIGHT / 2);
	}
}

function moveBall() {
	ball.move(vx, vy);
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 5. Billiards
 * 
 * Animate a ball moving around inside the screen area.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const WIDTH = 300;
const HEIGHT = 300;
const BALL_SIZE = 20;

// instance variables
let ball;
let lbl;
let vx = 4;
let vy = -3;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(25);

	setBackground(Color.GREEN);

	ball = new GOval(BALL_SIZE, BALL_SIZE);
	ball.setFilled(true);
	add(ball, WIDTH / 2, HEIGHT / 2);

	lbl = new GLabel("8");
	lbl.setColor(Color.WHITE);
	lbl.setFont('Arial');
	lbl.setFontSize(20);
	add(lbl, WIDTH / 2 + 5, HEIGHT / 2 + 17);
}

function draw() {
	moveBall();
	checkForCollisionsWithWall();
	update();
}

function moveBall() {
	ball.move(vx, vy);
	lbl.move(vx, vy);
}

function checkForCollisionsWithWall() {
	let x = ball.getX();
	let y = ball.getY();
	if ((x < 0) || (x > WIDTH)) {
		vx = -vx;
	}
	if ((y < 0) || (y > HEIGHT)) {
		vy = -vy;
	}
}
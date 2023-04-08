/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: GeometryRun
 * 
 * A jump-and-run game where you try to escape incoming geometric objects.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const APP_WIDTH = 400;
const APP_HEIGHT = 200;
const GRAVITY = 2;

const NR_OF_OBSTACLES = 3;
const OBSTACLES_SIZE = 40;
const OBSTACLES_SPEED = 5;

const DASH_SIZE = 39;
const DASH_JUMP = 20;
const DASH_X_POS = APP_WIDTH / 2;
const DASH_Y_POS = APP_HEIGHT - 1 * OBSTACLES_SIZE;

const rgen = new RandomGenerator();

let obstacles = [];
let runner;

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(20);

	createObstacles();
	createRunner();

	function createObstacles() {
		obstacles = [];
		for (let i = 0; i < NR_OF_OBSTACLES; i++) {
			let x = rgen.nextInt(APP_WIDTH);
			let y = APP_HEIGHT - 1 * OBSTACLES_SIZE;
			obstacles[i] = new GeometryObstacle();
			obstacles[i].vx = -OBSTACLES_SPEED;
			add(obstacles[i], x, y);
		}
	}

	function createRunner() {
		runner = new Geometry();
		runner.setFilled(true);
		runner.setColor(Color.GREEN);
		add(runner, DASH_X_POS, DASH_Y_POS);
	}
}

function draw() {
	moveObstacles();
	moveDash();
	checkForCollision();
	update();
}

function moveDash() {
	if (runner.getY() < DASH_Y_POS) {
		runner.vy += GRAVITY;
		runner.move();
	} else {
		runner.vy = 0;
		runner.setLocation(DASH_X_POS, DASH_Y_POS);
	}
}

function checkForCollision() {
	checkForCollisionWithWall();
	checkForCollisionWithGeometry();
}

function checkForCollisionWithGeometry() {
	let obj = getElementAt(runner.getX() + DASH_SIZE / 2, runner.getY()
		+ DASH_SIZE + 1);
	// print(obj);
	if (obj !== undefined) {
		print('Game over!');
		noLoop();
	}
}

function checkForCollisionWithWall() {
	for (let i = 0; i < obstacles.length; i++) {
		if (obstacles[i].getX() < 0) {
			obstacles[i].setLocation(APP_WIDTH, obstacles[i].getY());
		}
	}
}

function keyPressed() {
	if (keyCode == 32) {
		runner.vy -= DASH_JUMP;
		runner.move();
	}
}

function moveObstacles() {
	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].move();
	}
}

class Geometry extends GOval {

	constructor() {
		super(DASH_SIZE, DASH_SIZE);
		this.vx = 0;
		this.vy = 0;
	}

	move() {
		super.move(this.vx, this.vy);
	}
}

class GeometryObstacle extends GRect {

	constructor() {
		super(OBSTACLES_SIZE, OBSTACLES_SIZE);
		this.vx = 0;
		this.vy = 0;
	}

	move() {
		super.move(this.vx, this.vy);
	}
}
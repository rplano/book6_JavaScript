/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: ConnectTwoMovingPoints
 * 
 * A GraphicsProgram that connects two moving points through lines.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const SIZE = 300;
const WIDTH = SIZE;
const HEIGHT = SIZE;
const V_MAX = 10;
const DELAY = 30;
const NR_OF_LINES = 20;
const rgen = new RandomGenerator();

// instance variables
let lines = Array(NR_OF_LINES);
let linePointer = 0;
let p1;
let p2;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(25);
	setBackground(Color.BLACK);

	p1 = new Point();
	p2 = new Point();
}

function draw() {
	p1.move();
	p2.move();
	checkForCollisionWithWall(p1);
	checkForCollisionWithWall(p2);
	drawConnection(p1, p2);

	update();
}

function drawConnection(_p1, _p2) {
	if (lines[linePointer] !== undefined) {
		removeObj(lines[linePointer]);
	}
	let line = new GLine(_p1.x, _p1.y, _p2.x, _p2.y);
	line.setColor(Color.GREEN);
	add(line);
	lines[linePointer] = line;
	linePointer++;
	linePointer = linePointer % NR_OF_LINES;
}

function checkForCollisionWithWall(p) {
	if (p.x < 0 || p.x > WIDTH) {
		p.vx = -p.vx;
	}
	if (p.y < 0 || p.y > HEIGHT) {
		p.vy = -p.vy;
	}
}

class Point {

	constructor() {
		this.x = rgen.nextInt(WIDTH);
		this.y = rgen.nextInt(HEIGHT);
		this.vx = rgen.nextInt(-V_MAX, V_MAX);
		this.vy = rgen.nextInt(-V_MAX, V_MAX);
	}

	move() {
		this.x += this.vx;
		this.y += this.vy;
	}
}
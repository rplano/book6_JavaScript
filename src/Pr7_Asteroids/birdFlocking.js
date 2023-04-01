/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: BirdFlocking
 * 
 * A GraphicsProgram that simulates a flock of birds.
 * 
 * @see http://www.vergenet.net/~conrad/boids/pseudocode.html
 * @see http://gpolo.github.io/birdflocking/
 * @see https://en.wikipedia.org/wiki/Flocking_(behavior)#Flocking_rules
 *      Flocking rules. Basic models of flocking behavior are controlled by
 *      three simple rules: Separation - avoid crowding neighbors (short range
 *      repulsion) Alignment - steer towards average heading of neighbors
 *      Cohesion - steer towards average position of neighbors (long range
 *      attraction)
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

class BirdFlocking { }
BirdFlocking.COHESION = 50;
BirdFlocking.ALIGNMENT = 500;
BirdFlocking.SEPARATION = 4;
BirdFlocking.SEPARATION_FACTOR = 100;
BirdFlocking.DAMPENING_FACTOR = 0.8;

const SIZE = 300;

const NR_OF_BIRDS = 20;
const BIRD_SIZE = 5;
const BIRD_SPEED = 1.0;
const BIRD_INITIAL_SEPERATION = 50;

const rgen = new RandomGenerator();

let birds;
let mousePointer;
let posMouseX = SIZE / 2;
let posMouseY = SIZE / 2;

function setup() {
	createCanvas(SIZE, SIZE);
	frameRate(20);

	mousePointer = new GOval(BIRD_SIZE, BIRD_SIZE);
	mousePointer.setFilled(true);
	mousePointer.setColor(Color.RED);
	add(mousePointer, posMouseX, posMouseY);

	birds = [];
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		birds[i] = new GBird(BIRD_SIZE);
		birds[i].vx = rgen.nextDouble(-BIRD_SPEED, +BIRD_SPEED);
		birds[i].vy = rgen.nextDouble(-BIRD_SPEED, +BIRD_SPEED);
		let x = SIZE / 2
			+ rgen.nextInt(-BIRD_INITIAL_SEPERATION,
				BIRD_INITIAL_SEPERATION);
		let y = SIZE / 2
			+ rgen.nextInt(-BIRD_INITIAL_SEPERATION,
				BIRD_INITIAL_SEPERATION);
		add(birds[i], x, y);
	}
}

function draw() {
	applyCohesion();
	applyAlignment();
	applySeparation();
	moveBirds();
	checkForCollisions();
	// getKinteticEnergy();
	update();
}

// function mousePressed() {
function mouseMoved() {
	posMouseX = mouseX;
	posMouseY = mouseY;
	mousePointer.setLocation(posMouseX, posMouseY);
}

function moveBirds() {
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		birds[i].move();
	}
}

function checkForCollisions() {
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		let x = birds[i].getX();
		if (x < 0 || x > SIZE) {
			// x += SIZE;
			// x = x % SIZE;
			birds[i].vx = -birds[i].vx;
		}
		let y = birds[i].getY();
		if (y < 0 || y > SIZE) {
			// y += SIZE;
			// y = y % SIZE;
			birds[i].vy = -birds[i].vy;
		}
		birds[i].setLocation(x, y);
	}
}

function getKinteticEnergy() {
	let energy = 0;
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		birds[i].vx *= BirdFlocking.DAMPENING_FACTOR;
		birds[i].vy *= BirdFlocking.DAMPENING_FACTOR;
		energy += birds[i].vx * birds[i].vx + birds[i].vy * birds[i].vy;
	}
	// print(energy);
}

function applyAlignment() {
	let avgVx = 0;
	let avgVy = 0;
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		avgVx += birds[i].vx;
		avgVy += birds[i].vy;
	}
	avgVx /= NR_OF_BIRDS;
	avgVy /= NR_OF_BIRDS;

	// alignment
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		let dVx = (birds[i].vx - avgVx) / BirdFlocking.ALIGNMENT;
		let dVy = (birds[i].vy - avgVy) / BirdFlocking.ALIGNMENT;
		// System.out.println(dVx+","+dVy);
		birds[i].vx -= dVx;
		birds[i].vy -= dVy;
	}
}

function applyCohesion() {
	let avgX = posMouseX;
	let avgY = posMouseY;
	// print('avgX'+avgX);
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		avgX += birds[i].getX();
		avgY += birds[i].getY();
	}
	// print('avgX'+avgX);
	avgX /= (NR_OF_BIRDS + 1);
	avgY /= (NR_OF_BIRDS + 1);
	// print('avgX'+avgX);

	// cohesion
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		let dx = (birds[i].getX() - avgX) / BirdFlocking.COHESION;
		let dy = (birds[i].getY() - avgY) / BirdFlocking.COHESION;
		birds[i].vx -= dx;
		birds[i].vy -= dy;
		// print('birds[i].vy'+birds[i].vy);
	}
}

function applySeparation() {
	let vx = 0;
	let vy = 0;
	for (let i = 0; i < NR_OF_BIRDS; i++) {
		let cb = birds[i];
		for (let j = 0; j < NR_OF_BIRDS; j++) {
			if (cb !== birds[j]) {
				let dx = birds[j].getX() - cb.getX();
				let dy = birds[j].getY() - cb.getY();
				// System.out.println(getDistance(dx,dy));
				if (getDistance(dx, dy) < BirdFlocking.SEPARATION) {
					vx -= dx / BirdFlocking.SEPARATION_FACTOR;
					vy -= dy / BirdFlocking.SEPARATION_FACTOR;
				}
			}
		}
		// apply separation
		// System.out.println(vx+","+vy);
		cb.vx += vx;
		cb.vy += vy;
	}
}

function getDistance(dx, dy) {
	let r2 = dx * dx + dy * dy;
	return Math.sqrt(r2);
	// return r2;
}

class GBird extends GOval {

	constructor(size) {
		super(size, size);
		this.vx;
		this.vy;
	}

	// move() {
	// 	print('this.vx'+this.vx);
	// 	super.move(this.vx, this.vy);
	// }

	move(avgX, avgY, avgVx, avgVy) {
		if (avgX !== undefined && avgY !== undefined && avgVx !== undefined && avgVy !== undefined) {
			// cohesion
			let dx = (super.getX() - avgX) / BirdFlocking.COHESION;
			let dy = (super.getY() - avgY) / BirdFlocking.COHESION;
			this.vx -= dx;
			this.vy -= dy;

			// alignment
			let dVx = (this.vx - avgVx) / BirdFlocking.ALIGNMENT;
			let dVy = (this.vy - avgVy) / BirdFlocking.ALIGNMENT;
			// System.out.println(dVx+","+dVy);
			this.vx -= dVx;
			this.vy -= dVy;
		}

		super.move(this.vx, this.vy);
	}
}
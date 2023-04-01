/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Planets
 * 
 * A GraphicsProgram that simulates motion of planets.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 400;

const SUN_MASS = 100;
const SUN_SPEED = 0.15;
const EARTH_MASS = 20;
const EARTH_SPEED = -0.85;
const MOON_MASS = 5;
const MOON_SPEED = 0.2;

let sun;
let earth;
let moon;

function setup() {
	createCanvas(SIZE, SIZE);
	frameRate(20);

	// create sun
	sun = new GPlanet(SUN_MASS);
	sun.setFilled(true);
	sun.setColor(Color.YELLOW);
	sun.vy = SUN_SPEED;
	add(sun, (SIZE - SUN_MASS) / 2, (SIZE - SUN_MASS) / 2);

	// create earth
	earth = new GPlanet(EARTH_MASS);
	earth.setFilled(true);
	earth.setColor(Color.BLUE);
	earth.vy = EARTH_SPEED;
	add(earth, (SIZE - EARTH_MASS) / 2 + 150, (SIZE - EARTH_MASS) / 2);

	// create moon
	moon = new GPlanet(MOON_MASS);
	moon.setFilled(true);
	moon.setColor(Color.GREEN);
	moon.vy = MOON_SPEED;
	add(moon, (SIZE - MOON_MASS) / 2 + 130, (SIZE - MOON_MASS) / 2);
}

function draw() {
	sun.move();
	earth.move();
	moon.move();
	calculateNewVelocities(sun, earth);
	calculateNewVelocities(sun, moon);
	calculateNewVelocities(earth, moon);
	update();
}

function calculateNewVelocities(p1, p2) {
	// mx*a = m1*m2/r^2
	// v=a*t
	let x1 = p1.getX() + p1.getWidth() / 2;
	let y1 = p1.getY() + p1.getHeight() / 2;
	let x2 = p2.getX() + p2.getWidth() / 2;
	let y2 = p2.getY() + p2.getHeight() / 2;
	let dx = x1 - x2;
	let dy = y1 - y2;
	let r2 = dx * dx + dy * dy;
	let r = Math.sqrt(r2);
	let a = 1.0 / r2;
	let dvx = a * dx / r;
	let dvy = a * dy / r;
	p2.vx += p1.getWidth() * dvx;
	p2.vy += p1.getWidth() * dvy;
	p1.vx -= p2.getWidth() * dvx;
	p1.vy -= p2.getWidth() * dvy;
}

class GPlanet extends GOval {

	constructor(size) {
		super(size, size);
		this.vx = 0;
		this.vy = 0;
	}

	move() {
		super.move(this.vx, this.vy);
	}
}

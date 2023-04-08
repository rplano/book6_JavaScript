/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: SpeedRace
 * 
 * A GraphicsProgram based on the arcade classic SpeedRace.
 * 
 * @see https://en.wikipedia.org/wiki/Tomohiro_Nishikado#Speed_Race
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 300;
const OFFSET = 46;

const DELAY = 50;

const NR_OF_CARS = 5;
const CAR_SPEED = 5;
const CAR_HEIGHT = 40;
const CAR_WIDTH = 20;

const NR_OF_LANES = 5;
const LANE_LENGTH = SIZE / ((NR_OF_LANES - 1) * 2);
const LANE_WIDTH = 10;

const rgen = new RandomGenerator();

let car;
let otherCars = [];
let middleLane = [];

function setup() {
	createCanvas(SIZE, SIZE);
	frameRate(25);
	setBackground(Color.BLACK);

	drawRoad();
	drawMiddleLane();
	createOtherCars();
	createMyCar();

	function createMyCar() {
		car = new GRect(CAR_WIDTH, CAR_HEIGHT);
		car.setFilled(true);
		car.setFillColor(Color.RED);
		add(car, (SIZE - CAR_WIDTH) / 2, SIZE - 50 - OFFSET);
	}

	function createOtherCars() {
		for (let i = 0; i < NR_OF_CARS; i++) {
			otherCars[i] = new GRect(CAR_WIDTH, CAR_HEIGHT);
			otherCars[i].setFilled(true);
			otherCars[i].setFillColor(rgen.nextColor());
			let x = (SIZE - CAR_WIDTH) / 2 + rgen.nextInt(-5, 5) * CAR_WIDTH;
			let y = rgen.nextInt(-10, 0) * CAR_HEIGHT;
			add(otherCars[i], x, y);
		}
	}

	function drawMiddleLane() {
		for (let i = 0; i < NR_OF_LANES; i++) {
			middleLane[i] = new GRect(LANE_WIDTH, LANE_LENGTH);
			middleLane[i].setFilled(true);
			middleLane[i].setFillColor(Color.WHITE);
			add(middleLane[i], (SIZE - LANE_WIDTH) / 2, (i - 1) * 2 * LANE_LENGTH);
		}
	}

	function drawRoad() {
		let leftRoad = new GRect(50, SIZE);
		leftRoad.setFilled(true);
		leftRoad.setFillColor(Color.LIGHT_GRAY);
		add(leftRoad, 0, 0);
		let rightRoad = new GRect(50, SIZE);
		rightRoad.setFilled(true);
		rightRoad.setFillColor(Color.LIGHT_GRAY);
		add(rightRoad, 200 + 50, 0);
	}
}

function draw() {
	moveRoad();
	moveCars();
	checkForCollisionCarsWithWall();
	update();
}

function checkForCollisionCarsWithWall() {
	for (let i = 0; i < NR_OF_CARS; i++) {
		if (otherCars[i].getY() > SIZE) {
			let x = (SIZE - CAR_WIDTH) / 2 + rgen.nextInt(-5, 5) * CAR_WIDTH;
			let y = rgen.nextInt(-10, 0) * CAR_HEIGHT;
			otherCars[i].setLocation(x, y);
		}
	}
}

function moveCars() {
	for (let i = 0; i < NR_OF_CARS; i++) {
		otherCars[i].move(0, CAR_SPEED);
	}
}

function moveRoad() {
	for (let i = 0; i < NR_OF_LANES; i++) {
		middleLane[i].move(0, CAR_SPEED);
		let x = middleLane[i].getX();
		let y = middleLane[i].getY() + LANE_LENGTH;
		middleLane[i].setLocation(x, y % SIZE - LANE_LENGTH);
	}
}

function keyPressed() {
	switch (keyCode) {
		case LEFT_ARROW:
			// move left
			car.move(-5, 0);
			break;
		case RIGHT_ARROW:
			// move right
			car.move(5, 0);
			break;
	}
}
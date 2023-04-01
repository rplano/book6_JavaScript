/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: CityAtNight
 * 
 * A GraphicsProgram that reuses GHouse from Skyscraper to draw a city at night.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const APP_WIDTH = 400;
const APP_HEIGHT = 300;
const rgen = new RandomGenerator();

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(1);
	setBackground(Color.DARK_GRAY);

	for (let i = 0; i < 8; i++) {
		let cols = rgen.nextInt(4, 6);
		let rows = rgen.nextInt(4, 8);
		let x = rgen.nextInt(-40, APP_WIDTH - 40); // 120
		let y = rgen.nextInt(APP_HEIGHT / 4, APP_HEIGHT / 2); // 30
		let h = new GSkyscraper(rows, cols);
		add(h, x, y);
	}
}

function draw() {
	update();
	noLoop();
}

const Y_OFFSET = 1;
const WINDOW_WIDTH = 10;
const WINDOW_HEIGHT = 20;
const WINDOW_SEPERATION = 5;
class GSkyscraper extends GCompound {

	constructor(rows, cols) {
		super();

		// add house
		let house = new GRect((WINDOW_WIDTH + WINDOW_SEPERATION) * cols,
			(WINDOW_HEIGHT + WINDOW_SEPERATION) * rows + Y_OFFSET / 2);
		house.setColor(Color.DARK_GRAY);
		house.setFilled(true);
		house.setFillColor(Color.BLACK);
		this.add(house);

		// add windows
		for (let i = 0; i < rows * cols; i++) {
			if (Math.random() < 0.3) {
				this.addWindow(i % cols * (WINDOW_WIDTH + WINDOW_SEPERATION) + 0
					+ WINDOW_SEPERATION / 2, Math.trunc(i / cols)
					* (WINDOW_HEIGHT + WINDOW_SEPERATION) + 0
					+ WINDOW_SEPERATION / 2 + Y_OFFSET);
			}
		}
	}

	addWindow(x, y) {
		let window = new GRect(WINDOW_WIDTH, WINDOW_HEIGHT);
		window.setFilled(true);
		window.setFillColor(Color.YELLOW);
		this.add(window, x, y);
	}
}
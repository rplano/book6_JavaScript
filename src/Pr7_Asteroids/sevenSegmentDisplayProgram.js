/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: SevenSegmentDisplayProgram
 * 
 * A GraphicsProgram that uses SevenSegmentDisplay.
 * 
 * @see https://en.wikipedia.org/wiki/Seven-segment_display
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const LED_WIDTH = 6;
const X_OFFSET = 50;
let counter = 0;
let ssd1;
let ssd2;

function setup() {
	createCanvas(200, 100);
	frameRate(1);

	ssd1 = new SevenSegmentDisplay(40, 80, LED_WIDTH);
	add(ssd1, X_OFFSET + LED_WIDTH, LED_WIDTH);
	ssd2 = new SevenSegmentDisplay(40, 80, LED_WIDTH);
	add(ssd2);
	ssd2.move(X_OFFSET + 40 + 3 * LED_WIDTH, LED_WIDTH);
}

function draw() {
	let tens = Math.trunc(counter / 10);
	ssd1.displayNumber(tens);
	let ones = Math.trunc(counter % 10);
	ssd2.displayNumber(ones);
	counter++;
	update();
}

class SevenSegmentDisplay extends GCompound {

	constructor(width, height, ledWidth) {
		super();
		this.width = width - 2 * ledWidth;
		this.height = height - 4 * ledWidth;
		this.ledWidth = ledWidth;

		this.colorOn = Color.RED;
		this.colorOff = Color.WHITE;

		this.upperHorizontal;
		this.middleHorizontal;
		this.lowerHorizontal;

		this.upperFrontVertical;
		this.upperBackVertical;
		this.lowerFrontVertical;
		this.lowerBackVertical;

		this.addSegments();
	}

	// 4 A
	// 0 1 F B
	// 5 G
	// 2 3 E C
	// 6 D
	displayNumber(c) {
		c = '' + c;
		this.turnAllSegmentsOff();
		switch (c) {
			case '0':
				const code0 = [1, 1, 1, 1, 1, 0, 1];
				this.turnSegmentsOn(code0);
				break;
			case '1':
				const code1 = [0, 1, 0, 1, 0, 0, 0];
				this.turnSegmentsOn(code1);
				break;
			case '2':
				const code2 = [0, 1, 1, 0, 1, 1, 1];
				this.turnSegmentsOn(code2);
				break;
			case '3':
				const code3 = [0, 1, 0, 1, 1, 1, 1];
				this.turnSegmentsOn(code3);
				break;
			case '4':
				const code4 = [1, 1, 0, 1, 0, 1, 0];
				this.turnSegmentsOn(code4);
				break;
			case '5':
				const code5 = [1, 0, 0, 1, 1, 1, 1];
				this.turnSegmentsOn(code5);
				break;
			case '6':
				const code6 = [1, 0, 1, 1, 0, 1, 1];
				this.turnSegmentsOn(code6);
				break;
			case '7':
				const code7 = [0, 1, 0, 1, 1, 0, 0];
				this.turnSegmentsOn(code7);
				break;
			case '8':
				const code8 = [1, 1, 1, 1, 1, 1, 1];
				this.turnSegmentsOn(code8);
				break;
			case '9':
				const code9 = [1, 1, 2, 1, 1, 1, 2];
				this.turnSegmentsOn(code9);
				break;

			default:
				break;
		}
	}

	turnAllSegmentsOff() {
		this.upperFrontVertical.setColor(this.colorOff);
		this.upperBackVertical.setColor(this.colorOff);
		this.lowerFrontVertical.setColor(this.colorOff);
		this.lowerBackVertical.setColor(this.colorOff);
		this.upperHorizontal.setColor(this.colorOff);
		this.middleHorizontal.setColor(this.colorOff);
		this.lowerHorizontal.setColor(this.colorOff);
	}

	// 4
	// 0 1
	// 5
	// 2 3
	// 6
	turnSegmentsOn(code) {
		if (code[0] == 1) {
			this.upperFrontVertical.setColor(this.colorOn);
		}
		if (code[1] == 1) {
			this.upperBackVertical.setColor(this.colorOn);
		}
		if (code[2] == 1) {
			this.lowerFrontVertical.setColor(this.colorOn);
		}
		if (code[3] == 1) {
			this.lowerBackVertical.setColor(this.colorOn);
		}
		if (code[4] == 1) {
			this.upperHorizontal.setColor(this.colorOn);
		}
		if (code[5] == 1) {
			this.middleHorizontal.setColor(this.colorOn);
		}
		if (code[6] == 1) {
			this.lowerHorizontal.setColor(this.colorOn);
		}
	}

	addSegments() {
		this.upperFrontVertical = new GRect(this.ledWidth, this.height / 2);
		this.upperFrontVertical.setFilled(true);
		this.add(this.upperFrontVertical, 0, this.ledWidth);

		this.upperBackVertical = new GRect(this.ledWidth, this.height / 2);
		this.upperBackVertical.setFilled(true);
		this.add(this.upperBackVertical, this.width + this.ledWidth, this.ledWidth);

		this.lowerFrontVertical = new GRect(this.ledWidth, this.height / 2);
		this.lowerFrontVertical.setFilled(true);
		this.add(this.lowerFrontVertical, 0, this.height / 2 + 2 * this.ledWidth);

		this.lowerBackVertical = new GRect(this.ledWidth, this.height / 2);
		this.lowerBackVertical.setFilled(true);
		this.add(this.lowerBackVertical, this.width + this.ledWidth, this.height / 2 + 2 * this.ledWidth);

		this.upperHorizontal = new GRect(this.width, this.ledWidth);
		this.upperHorizontal.setFilled(true);
		this.add(this.upperHorizontal, this.ledWidth, 0);

		this.middleHorizontal = new GRect(this.width, this.ledWidth);
		this.middleHorizontal.setFilled(true);
		this.add(this.middleHorizontal, this.ledWidth, this.height / 2 + this.ledWidth);

		this.lowerHorizontal = new GRect(this.width, this.ledWidth);
		this.lowerHorizontal.setFilled(true);
		this.add(this.lowerHorizontal, this.ledWidth, this.height + 2 * this.ledWidth);
	}

}

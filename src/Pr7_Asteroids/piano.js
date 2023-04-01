/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Piano
 * 
 * A GraphicsProgram that simulates a piano, plays tunes based on mouse click.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("./libraries/p5.sound.min.js");

const WIDTH = 300;
const HEIGHT = 200;
const HEIGHT_OFFSET = 1;

const songFileNames = "FGABCDE";
let soundFiles = [];
let keys = [];

// sounds must be preloaded
function preload() {
	for (let i = 0; i < songFileNames.length; i++) {
		let soundName = songFileNames.charAt(i) + '4';
		let fileName = 'Pr7_Asteroids/music/' + soundName + '.wav';
		soundFiles[i] = loadSound(fileName);
	}
}

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	let keyCounter = 0;

	// draw 8 white keys
	for (let i = 0; i < 7; i++) {
		keys[keyCounter] = new GRect(WIDTH / 7, HEIGHT - HEIGHT_OFFSET);
		add(keys[keyCounter], i * WIDTH / 7, 0);
		keyCounter++;
	}

	// draw 3 + 2 black keys
	for (let i = 0; i < 3; i++) {
		keys[keyCounter] = new GRect(WIDTH / 12, HEIGHT / 2);
		keys[keyCounter].setFilled(true);
		add(keys[keyCounter], i * WIDTH / 7 + WIDTH / 7 / 2 + 10, 0);
		keyCounter++;
	}
	for (let i = 0; i < 2; i++) {
		keys[keyCounter] = new GRect(WIDTH / 12, HEIGHT / 2);
		keys[keyCounter].setFilled(true);
		add(keys[keyCounter], i * WIDTH / 7 + 9 * WIDTH / 7 / 2 + 10, 0);
		keyCounter++;
	}
}

function mousePressed() {
	let x = mouseX;
	let y = mouseY;
	let obj = getElementAt(x, y);
	if (obj !== undefined) {
		for (let i = 0; i < songFileNames.length; i++) {
			if (obj == keys[i]) {
				print(songFileNames.charAt(i) + ",");
				currentSong = soundFiles[i];
				currentSong.play();
			}
		}
	}
}

function draw() {
	update();
}
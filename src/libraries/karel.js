/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: simulate Karel using JavaScript.
 * This is P5JS code, which means it starts in setup(), and drawing is done in draw()
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 * @version 0.04
 */

"use strict";

const FPS = 1;
const SIZE = 50;
const THICK = 2;

let APP_WIDTH = 400;
let APP_HEIGHT = 400;

// karel
let karel;
let karelStartX = 0;
let karelStartY = 0;
let karelDir = 0;
let karelIsAlive = true;
let karelImages = [];

// code
let codeLines = [];
let codePointer = 0;
let simulationRun = false;

// world
let world0;
// const world0 = [
// 	"+---------+",
// 	"|0 0 0 0 0|",
// 	"|      - -|",
// 	"|0 0 1|0 0|",
// 	"+---------+"
// ];
let world;
let beepers;

// p5js: handles asynchronous loading
function preload() {
	// pre-load Karel images:
	for (let i = 0; i < 4; i++) {
		let img = loadImage('../libraries/Karel' + i + '.png');
		karelImages.push(img);
	}
}

// p5js: we draw here
function draw() {
	// print(codeLines[codePointer]);
	eval(codeLines[codePointer]);
	codePointer++;
	if (codePointer >= codeLines.length) {
		noLoop();
	}
	update();
}
 
// p5js: we start here
function setup() {
	// get name of karel program to load:
	const scriptTag = document.querySelector("#karel");
	const karelProgram = scriptTag.title;
	// print('karelProgram: ' + karelProgram);

	const codeElement = window.parent.document.getElementById("code");
	let karelCode = codeElement.value;
	// print('code: ' + code);

	readWorld(karelProgram + '.w');
	// printWorld();
	if (!locateKarel()) {
		throw Error("Could not locate Karel in world '" + karelProgram + ".w'");
	}

	// create canvas and position in center:
	APP_HEIGHT = Math.trunc(world0.length / 2) * SIZE + 2;
	APP_WIDTH = Math.trunc(world0[0].length / 2) * SIZE + 2;
	// print(APP_WIDTH + ', ' + APP_HEIGHT);
	const cnv = createCanvas(APP_WIDTH, APP_HEIGHT);
	var x = (window.innerWidth - APP_WIDTH) / 2;
	var y = (window.innerHeight - APP_HEIGHT) / 2;
	cnv.position(x, y);
	frameRate(FPS);

	// create karel
	karel = new GImage2(0, APP_HEIGHT - SIZE, '../libraries/Karel0.png');

	// load code
	let code;
	if (karelCode !== undefined && karelCode.length < 10) {
		code = readCode(karelProgram + '.js');
	} else {
		code = karelCode;
	}
	code += '; run();';
	// print('code: ' + code);

	// catch infinite loops caused by while-loops
	const regex = /(while\s*)\(([ a-zA-Z\(\)]+)\)\s*\{/g;
	code = code.replaceAll(regex, " $1 ( $2 ) { catchInfiniteLoops();");
	// print(code);

	// run simulation:
	codeLines.push(';');
	// let code = 'function run() {\n  move(); \n  turnLeft(); \n  move(); \n  turnRight(); \n  move();\n} \n\nfunction turnRight() { \n  turnLeft();\n  turnLeft();\n  turnLeft();\n}; run();';
	simulationRun = true;
	reset();
	try {
		eval(code);
	} catch (e) {
		if (e instanceof InfiniteLoopError) {
			print(e);
		} else {
			print(e);
		}
	}
	// print('code: ' + codeLines);

	// run real version:
	simulationRun = false;
	reset();

	drawKarel();
	drawDotsAndBeepers();
	drawWorld();
}

class InfiniteLoopError extends Error {
	constructor(msg) {
		super(msg);
	}
}

let infiniteLoopCounter = 0;
function catchInfiniteLoops() {
	infiniteLoopCounter++;
	if (infiniteLoopCounter > 200) {
		throw new InfiniteLoopError("Most likely infinite loop!");
	}
}

function readWorld(fileName) {
	world0 = [];
	let fr = new Utils.FileReader(fileName);
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		world0.push(line);
	}
	fr.close();
}

function locateKarel() {
	for (let i = 1; i < world0.length; i += 2) {
		let pos = world0[i].indexOf('K');
		if (pos > -1) {
			// print(world0[i]+","+pos+","+i);
			karelStartX = Math.trunc(pos / 2);
			karelStartY = Math.trunc(i / 2);
			//  print(karelX+","+karelY);
			// replace karel by 0 
			world0[i] = world0[i].replace('K', '0');
			//  print(world0[i]+","+pos+","+i);
			return true;
		}
	}
	return false;
}

function initBeepers() {
	beepers = [];
	for (let i = 1; i < world.length; i += 2) {
		//console.log(this.world[i]);
		let beeperLine = "";
		for (let j = 1; j < world[i].length; j += 2) {
			let s = world[i].charAt(j);
			beeperLine += s;
		}
		beepers.push(beeperLine);
	}
}

function readCode(fileName) {
	let fr = new Utils.FileReader(fileName);
	let text = "";
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		text += line + '\n';
	}
	fr.close();
	return text;
}

function reset() {
	codePointer = 0;
	// print('reset: ' + karelStartX + ',' + karelStartY);
	karel.setLocation(karelStartX * SIZE, APP_HEIGHT - karelStartY * SIZE);
	karel.setLocation(karelStartX * SIZE, karelStartY * SIZE);
	karelDir = 0;
	karelIsAlive = true;
	world = world0;
	initBeepers();
}

function xIsClear(dir) {
	let x = Math.round(karel.x / SIZE);
	let y = Math.round(karel.y / SIZE);
	// print(x + ',' + y);
	x = x * 2 + 1;
	// y = world.length - y * 2 + 1 - 1;
	y = y * 2 + 1;
	// print(x + ',' + y);
	let choice = (karelDir + dir + 4) % 4;
	switch (choice) {
		case 0:
			x++;
			break;
		case 1:
			y--;
			break;
		case 2:
			x--;
			break;
		case 3:
			y++;
			break;
		default:
			print('xIsClear(): we should not get here:' + choice);
	}
	// print(x + ',' + y);
	// print(world);
	let c = world[y].charAt(x);
	// print("c=" + c + ",x=" + x + ",y=" + y);
	if (c != ' ') {
		return false;
	}
	return true;
}

function frontIsClear() {
	return xIsClear(0);
}
function frontIsBlocked() {
	return !frontIsClear();
}

function leftIsClear() {
	return xIsClear(+1);
}
function leftIsBlocked() {
	return !leftIsClear();
}

function rightIsClear() {
	return xIsClear(-1);
}
function rightIsBlocked() {
	return !rightIsClear();
}

function noBeepersPresent() {
	return !beepersPresent();
}

function beepersPresent() {
	let x = Math.round(karel.x / SIZE);
	let y = Math.round(karel.y / SIZE);
	let s = beepers[y].charAt(x);
	// print('beepersPresent: '+s);
	if (s > 0) {
		return true;
	}
	return false;
}

function putBeeper() {
	if (karelIsAlive) {
		let x = Math.round(karel.x / SIZE);
		let y = Math.round(karel.y / SIZE);
		let s = beepers[y].charAt(x);
		// print('putBeeper: '+s);
		s++;
		let tmp = beepers[y].substr(0, x) + s + beepers[y].substr(x + 1);
		beepers[y] = tmp;

		if (simulationRun) {
			codeLines.push('putBeeper();');
		} else {
			removeAll();	
			drawKarel();
			drawDotsAndBeepers();
			drawWorld();
		}
	}
}

function pickBeeper() {
	if (karelIsAlive) {
		let x = Math.round(karel.x / SIZE);
		let y = Math.round(karel.y / SIZE);
		let s = beepers[y].charAt(x);
		// print('pickBeeper: '+s);
		if (s > 0) {
			s--;
			let tmp = beepers[y].substr(0, x) + s + beepers[y].substr(x + 1);
			beepers[y] = tmp;
		}

		if (simulationRun) {
			codeLines.push('pickBeeper();');
		} else {
			removeAll();
			drawKarel();
			drawDotsAndBeepers();
			drawWorld();
		}
	}
}

function turnLeft() {
	if (karelIsAlive) {
		karelDir++;
		karelDir = karelDir % 4;
		karel.image = karelImages[karelDir];

		if (simulationRun) {
			codeLines.push('turnLeft();');
		} else {
		}
	}
}

function move() {
	if (karelIsAlive) {
		if (frontIsClear()) {
			switch (karelDir) {
				case 0:
					// this.karel.x += SIZE;
					karel.move(SIZE, 0);
					break;
				case 1:
					// this.karel.y -= SIZE;
					karel.move(0, -SIZE);
					break;
				case 2:
					// this.karel.x -= SIZE;
					karel.move(-SIZE, 0);
					break;
				case 3:
					// this.karel.y += SIZE;
					karel.move(0, SIZE);
					break;
			}
		} else {
			karelIsAlive = false;
			print('Dead Karel!');
			if (!simulationRun) {
				alert('Dead Karel!');
			}
		}

		if (simulationRun) {
			codeLines.push('move();');
		} else {
		}
	}
}

// function pause(time) {
// 	let start = millis();
// 	let end = start;
// 	do {
// 		end = millis();
// 	} while ((end - start) < time);
// }


function drawKarel() {
	// karel = new GImage(0, APP_HEIGHT - SIZE,'Karel0.png');
	karel.image = karelImages[karelDir];
	karel.scale(0.5);
	add(karel);
}

function printWorld() {
	for (let i = 0; i < world0.length; i++) {
		print(world0[i]);
	}
}

function drawWorld() {
	for (let i = 0; i < world.length; i++) {
		if (i % 2 == 0) {
			// even
			for (let j = 1; j < world[i].length; j += 2) {
				let s = world[i].charAt(j);
				if (s == '-') {
					const wall = new GRect(Math.floor(j / 2) * SIZE, Math.floor(i / 2) * SIZE, SIZE, THICK);
					add(wall);
				}
			}

		} else {
			// odd
			for (let j = 0; j < world[i].length; j += 2) {
				let s = world[i].charAt(j);
				if (s == '|') {
					const wall = new GRect(Math.floor(j / 2) * SIZE, Math.floor(i / 2) * SIZE, THICK, SIZE);
					add(wall);
				}
			}

		}
	}
}

function drawDotsAndBeepers() {
	for (let i = 0; i < beepers.length; i++) {
		//console.log(this.beepers[i]);
		for (let j = 0; j < beepers[i].length; j++) {
			let s = beepers[i].charAt(j);
			if (s > 0) {
				//const beeper = new acm.GOval(j * SIZE,i  * SIZE, SIZE, SIZE);
				//beeper.color = 'rgb(255,0,0)';
				//super.add(beeper);
				const label = new GLabel((j + 0.5) * SIZE - 3, (i + 0.5) * SIZE + 3, s);
				// label.font = '10px Arial';
				label.setFont('Arial');
				label.setFontSize(10);
				add(label);
				const beeper = new GPolygon((j + 0.5) * SIZE, (i + 0.5) * SIZE);
				beeper.addVertex(-SIZE / 2, 0);
				beeper.addVertex(0, -SIZE / 2);
				beeper.addVertex(SIZE / 2, 0);
				beeper.addVertex(0, SIZE / 2);
				// beeper.setColor(Color.BLACK);
				beeper.setFilled(true);
				beeper.setColor(Color.LIGHT_GRAY);
				add(beeper);
			} else {
				const dot = new GOval((j + 0.5) * SIZE, (i + 0.5) * SIZE, 2, 2);
				add(dot);
			}
		}
	}
}
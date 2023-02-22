/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: WritingKarel
 * 
 * Karel writes the first letter of his name 'K'.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	moveToStart();
	drawMainLine();
	moveToMiddle();
	drawUpperDiagonal();
	moveDown();
	drawLowerDiagonal();
	moveToBeginning();
}

function moveToBeginning() {
	moveToWall();
	turnLeft();
	moveToWall();
	turnLeft();
}

function moveToWall() {
	while (frontIsClear()) {
		move();
	}
}

function drawLowerDiagonal() {
	for (let i = 0; i < 3; i++) {
		putBeeper();
		move();
		turnRight();
		move();
		turnLeft();
	}
}

function moveDown() {
	turnRight();
	for (let i = 0; i < 7; i++) {
		move();
	}
	turnRight();
	move();
}

function drawUpperDiagonal() {
	for (let i = 0; i < 4; i++) {
		putBeeper();
		move();
		turnLeft();
		move();
		turnRight();
	}
}

function moveToMiddle() {
	turnAround();
	for (let i = 0; i < 4; i++) {
		move();
	}
	turnLeft();
	move();
}

function drawMainLine() {
	for (let i = 0; i < 7; i++) {
		putBeeper();
		move();
	}
}

function moveToStart() {
	move();
	move();
	move();
	turnLeft();
	move();
}

function turnAround() {
	turnLeft();
	turnLeft();
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}
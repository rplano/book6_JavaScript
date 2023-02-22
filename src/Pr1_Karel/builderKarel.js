/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: BuilderKarel
 * 
 * Karel's house was hit by a tornado. He has to fix it!
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	move();
	move();
	for (let i = 0; i < 2; i++) {
		fixColumn();
		moveToNextColumn();
	}
	fixColumn();
}

function fixColumn() {
	moveUpAndFix();
	moveDown();
}

function moveDown() {
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnLeft();
}

function moveUpAndFix() {
	turnLeft();
	while (frontIsClear()) {
		if (noBeepersPresent()) {
			putBeeper();
		}
		move();
	}
	if (noBeepersPresent()) {
		putBeeper();
	}
}

function moveToNextColumn() {
	move();
	move();
	move();
}

function turnAround() {
	turnLeft();
	turnLeft();
}
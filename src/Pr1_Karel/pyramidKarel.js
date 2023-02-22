/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: PyramidKarel
 * 
 * Karel is supposed to build a pyramid.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	frameRate(10);
	putFirstLineOfBeepers();
	putSecondLineOfBeepers();
	while (beepersPresent()) {
		putNthLineOfBeepers();
		move();
	}
}

function putNthLineOfBeepers() {
	move();
	while (beepersPresent()) {
		putOneBeeperAbove();
	}
	removeLastBeeper();
	moveBack();
}

function moveBack() {
	move();
	while (beepersPresent()) {
		move();
	}
	turnAround();
}

function removeLastBeeper() {
	turnLeft();
	move();
	turnLeft();
	move();
	if (beepersPresent()) {
		pickBeeper();
	}
}

function putOneBeeperAbove() {
	turnLeft();
	move();
	putBeeper();
	turnRight();
	move();
	turnRight();
	move();
	turnLeft();
}

function putSecondLineOfBeepers() {
	turnLeft();
	move();
	turnLeft();
	move();
	putFirstLineOfBeepers();
	pickBeeper();
	turnAround();
	move();
}

function putFirstLineOfBeepers() {
	while (frontIsClear()) {
		putBeeper();
		move();
	}
	putBeeper();
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
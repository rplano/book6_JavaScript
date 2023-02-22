/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: YardstickKarel
 * 
 * Karel is supposed to measure the length of .
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	measureLength();
}

function measureLength() {
	putBeepersOnStick();
	moveToEnd();
	countBeepers();
	turnAround();
}

function countBeepers() {
	moveToEndOfYardStick();
	while (beepersPresent()) {
		findLastBeeper();
		if (beepersPresent()) {
			moveBeeperToEnd();
		}
		moveToEndOfYardStick();
	}
}

function moveBeeperToEnd() {
	pickBeeper();
	moveToEnd();
	putBeeper();
}

function findLastBeeper() {
	while (beepersPresent()) {
		move();
	}
	turnAround();
	move();
}

function moveToEndOfYardStick() {
	turnAround();
	while (leftIsClear()) {
		move();
	}
}

function moveToEnd() {
	while (frontIsClear()) {
		move();
	}
}

function putBeepersOnStick() {
	move();
	while (rightIsBlocked()) {
		putBeeper();
		move();
	}
}

function turnAround() {
	turnLeft();
	turnLeft();
}
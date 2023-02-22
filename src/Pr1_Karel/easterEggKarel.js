/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: EasterEggKarel
 * 
 * Karel is looking for easter eggs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	findEasterEggs();
}

function findEasterEggs() {
	findEggsInOneRow();
	moveBack();
	while (frontIsClear()) {
		moveToNextRow();
		findEggsInOneRow();
		moveBack();
	}
}

function findEggsInOneRow() {
	while (frontIsClear()) {
		if (beepersPresent()) {
			pickBeeper();
		}
		move();
	}
	if (beepersPresent()) {
		pickBeeper();
	}
}

function moveBack() {
	turnAround();
	while (frontIsClear()) {
		move();
	}
	turnRight();
}

function moveToNextRow() {
	move();
	turnRight();
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
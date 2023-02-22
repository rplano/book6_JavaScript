/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: DonkeyKongKarel
 * 
 * Karel loves arcade games. This one is inspired by the famous Donkey Kong
 * game.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	for (let i = 0; i < 8; i++) {
		collectAllTreasureOnLevel();
		findNextLevel();
		moveUpAndBack();
	}
	collectAllTreasureOnLevel();
}

function moveUpAndBack() {
	turnRight();
	move();
	turnLeft();
	while (frontIsClear()) {
		move();
	}
	turnAround();
}

function findNextLevel() {
	turnAround();
	while (rightIsBlocked()) {
		if (frontIsClear()) {
			move();
		} else {
			turnAround();
		}
	}
}

function collectAllTreasureOnLevel() {
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

function turnAround() {
	turnLeft();
	turnLeft();
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: PartyKarel
 * 
 * Karel has to clean up his place after a party.  
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	while (leftIsClear()) {
		clearOneRow();
		moveBack();
		moveToNext();
	}
	clearOneRow();
}

function clearOneRow() {
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
}

function moveToNext() {
	turnRight();
	if (frontIsClear()) {
		move();
	}
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
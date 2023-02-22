/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: BreadcrumbKarel
 * 
 * You want Karel to follow the breadcrumbs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	move();
	while (beepersPresent()) {
		pickBeeper();
		moveToNextBeeper();
	}
}

function moveToNextBeeper() {
	checkLeft();
	if (noBeepersPresent()) {
		checkStraight();
	}
	if (noBeepersPresent()) {
		checkRight();
	}
}

function checkLeft() {
	turnLeft();
	move();
	if (noBeepersPresent()) {
		turnAround();
		move();
		turnLeft();
	}
}

function checkStraight() {
	move();
	if (noBeepersPresent()) {
		turnAround();
		move();
		turnAround();
	}
}

function checkRight() {
	turnRight();
	move();
	if (noBeepersPresent()) {
		turnAround();
		move();
		turnRight();
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
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: DoubleBeeperKarel
 * 
 * Karel is can do maths: his task is to double the number of beepers in the
 * pile of beepers in front of him.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	move();
	doubleBeepersToNewPile();
	movePileBack();
	moveBack();
}

function moveBack() {
	turnAround();
	move();
	move();
	turnAround();
}

function movePileBack() {
	move();
	while (beepersPresent()) {
		pickBeeper();
		turnAround();
		move();
		putBeeper();
		turnAround();
		move();
	}
}

function doubleBeepersToNewPile() {
	while (beepersPresent()) {
		pickBeeper();
		move();
		putBeeper();
		putBeeper();
		turnAround();
		move();
		turnAround();
	}
}

function turnAround() {
	turnLeft();
	turnLeft();
}
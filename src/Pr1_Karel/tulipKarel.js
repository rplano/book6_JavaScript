/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: TulipKarel
 * 
 * Karel plants some tulips.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	while (frontIsClear()) {
		move();
		if (rightIsClear()) {
			plantTulip();
		}
	}
}

function plantTulip() {
	turnRight();
	move();
	putBeeper();
	turnAround();
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
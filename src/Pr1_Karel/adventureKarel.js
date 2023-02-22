/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: AdventureKarel
 * 
 * Karel is on an adventure and has to be careful not to fall off a cliff.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	while (rightIsBlocked()) {
		move();
	}
	turnAround();
	move();
	turnAround();
}

function turnAround() {
	turnLeft();
	turnLeft();
}
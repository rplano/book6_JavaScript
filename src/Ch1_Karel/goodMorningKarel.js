/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: 2. GoodMorningKarel
 * 
 * Karel just got up. He wants to get his milk, which the milkman left just
 * outside his house.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function run() {
	move();
	move();
	turnLeft();
	move();
	move();
	turnRight();
	move();
	pickBeeper();
	turnLeft();
	turnLeft();
	move();
	move();
	move();
	turnLeft();
	move();
	move();
	turnLeft();
}

function turnRight() {
	for (let i = 0; i < 3; i++) {
		turnLeft();
	}
}
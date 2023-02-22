/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: 4. WallKarel
 * 
 * Karel is supposed to walk to the wall.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function run() {
	moveToWall();
}

function moveToWall() {
	while (frontIsClear()) {
		move();
	}
}
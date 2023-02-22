/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: 3. FillRowKarel
 * 
 * Karel wants to fill a row with beepers.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	for (let i = 0; i < 5; i++) {
		putBeeper();
		move();
	}
}
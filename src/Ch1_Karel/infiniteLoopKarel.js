/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: 5. InfiniteLoopKarel
 * 
 * Karel is stuck in an infinite loop.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function run() {
	while (frontIsClear()) 
	{
		turnLeft();
	}
}
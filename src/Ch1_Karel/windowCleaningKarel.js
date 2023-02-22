/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Karel: 7. WindowCleaningKarel
 * 
 * Karel's day job is to clean windows of skyscrapers in Chicago. He is facing
 * east, standing in front of the first skyscraper.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

/**
 * Karel has to clean five skyscrapers, one at a time.
 * 
 * PreCondition: Karel is standing in front of the first skyscraper, facing
 * east <br/>
 * PostCondition: Karel is standing behind the last skyscraper, facing east
 */
function run() {
	for (let i = 0; i < 5; i++) {
		cleanOneSkyscraper();
	}
}

/**
 * Karel has to clean skyscraper
 * 
 * PreCondition: Karel is standing in front of the one skyscraper, facing
 * east <br/>
 * PostCondition: Karel is standing behind this one skyscraper, facing east
 */
function cleanOneSkyscraper() {
	moveUpAndClean();
	moveOver();
	moveDownAndClean();
}

/**
 * Karel moves down the skyscraper while cleaning it.
 * 
 * PreCondition: Karel is facing east, is located one stop above, and one
 * step behind the skyscraper. <br/>
 * PostCondition: Karel is standing behind this one skyscraper, facing east
 */
function moveDownAndClean() {
	turnRight();
	while (frontIsClear()) {
		move();
	}
	turnLeft();
}

/**
 * Karel is on top of the skyscraper moving over it.
 * 
 * PreCondition: Karel is facing north, is located one step in front and one
 * step above the skyscraper. <br/>
 * PostCondition: Karel is facing east, is located one stop above, and one
 * step behind the skyscraper.
 */
function moveOver() {
	turnRight();
	move();
	move();
}

/**
 * Karel moves up the skyscraper while cleanig it.
 * 
 * PreCondition: Karel is standing in front of the one skyscraper, facing
 * east <br/>
 * PostCondition: Karel is facing north, is located one step in front and
 * one step above the skyscraper.
 */
function moveUpAndClean() {
	turnLeft();
	while (rightIsBlocked()) {
		move();
	}
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}
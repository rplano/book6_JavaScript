/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: SpaceShip
 * 
 * Draw a space ship using a polygon.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SPACE_SHIP_SIZE = 40;
let ship;
function setup() {
	createCanvas(300, 150);
  frameRate(5);

  ship = new GPolygon();
  ship.addVertex(0, -SPACE_SHIP_SIZE);
  ship.addVertex(-2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
  ship.addVertex(0, SPACE_SHIP_SIZE / 2);
  ship.addVertex(2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
  add(ship, 150, 150 - 75);
}

function draw() {
  //ship.rotate(5);
  update();
}
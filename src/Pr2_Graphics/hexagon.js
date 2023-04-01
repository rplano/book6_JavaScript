/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Hexagon
 * 
 * Draw a hexagon using a polygon.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  let size = 30;
  let pos = 85;

  let hexa = new GPolygon();
  hexa.addVertex(0, 0);
  hexa.addVertex(size, size * 2);
  hexa.addVertex(size * 3, size * 2);
  hexa.addVertex(size * 4, 0);
  hexa.addVertex(size * 3, -size * 2);
  hexa.addVertex(size, -size * 2);
  add(hexa, pos, pos + size * 2 - 68);
}

function draw() {
  update();
}
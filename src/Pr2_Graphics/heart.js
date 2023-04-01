/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: Heart
 * 
 * Draw a heart shape using two ovals and a polygon.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 50;

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  let pos = 100;
  let leftPart = new GOval(SIZE, SIZE);
  leftPart.setFilled(true);
  leftPart.setColor(Color.RED);
  let x = pos;
  add(leftPart, x, pos - 73);

  let middlePart = new GPolygon();
  middlePart.setFilled(true);
  middlePart.setColor(Color.RED);
  middlePart.addVertex(-1 + 0, 0);
  middlePart.addVertex(0 + SIZE - (int)(SIZE * 0.707) / 4, SIZE);
  middlePart.addVertex((1 + SIZE - (int)(SIZE * 0.707) / 4) * 2, 0);
  middlePart.addVertex(0 + SIZE - (int)(SIZE * 0.707) / 4, -SIZE / 2 + 2);
  // x += SIZE / 2;
  let y = pos + SIZE / 2 + (int)(SIZE * 0.707) / 2;
  add(middlePart, x + (int)(SIZE * 0.707) / 4, y - 73);

  let rightPart = new GOval(SIZE, SIZE);
  rightPart.setFilled(true);
  rightPart.setColor(Color.RED);
  x += SIZE;
  add(rightPart, x, pos - 73);
}

function draw() {
  update();
}
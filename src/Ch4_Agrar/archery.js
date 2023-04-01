/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: 1. Archery
 * 
 * Draw a target using three ovals.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const OUTER_RED_RADIUS = 60;
const MIDDLE_WHITE_RADIUS = 40;
const INNER_RED_RADIUS = 20;

function setup() {
  createCanvas(300, 200);
  frameRate(5);

  print(OUTER_RED_RADIUS);
  print(MIDDLE_WHITE_RADIUS);
  print(INNER_RED_RADIUS);

  drawCircle(OUTER_RED_RADIUS, Color.RED);
  drawCircle(MIDDLE_WHITE_RADIUS, Color.WHITE);
  drawCircle(INNER_RED_RADIUS, Color.RED);
}

function drawCircle(radius, color) {
  let ring = new GOval(2 * radius, 2 * radius);
  ring.setColor(color);
  ring.setFilled(true);
  let x = 50 + 72 - radius;
  add(ring, x + 25, x - 48);
}

function draw() {
  update();
}
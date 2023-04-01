/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 1. BlueRect
 * 
 * Draw a yellow and a blue rectangle.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  let fritz = new GRect(50, 50);
  fritz.setColor(Color.BLUE);
  fritz.setFilled(true);
  fritz.setFillColor(Color.YELLOW);
  add(fritz, 150, 100);
}

function draw() {
  update();
}
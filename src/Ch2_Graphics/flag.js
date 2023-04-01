/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 2. Flag
 * 
 * Write a graphics program that draws the flag of a country you like to visit.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const FLAG_WIDTH = 150;
const FLAG_HEIGHT = 90;

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  let black = new GRect(70, 30, FLAG_WIDTH, FLAG_HEIGHT / 3);
  black.setFilled(true);
  black.setColor(color('black'));
  add(black);

  let red = new GRect(70, 30 + FLAG_HEIGHT / 3, FLAG_WIDTH, FLAG_HEIGHT / 3);
  red.setFilled(true);
  red.setColor(color('red'));
  add(red);

  let yellow = new GRect(70, 30 + 2 * FLAG_HEIGHT / 3, FLAG_WIDTH, FLAG_HEIGHT / 3);
  yellow.setFilled(true);
  yellow.setColor(color('yellow'));
  add(yellow);
}

function draw() {
  update();
}
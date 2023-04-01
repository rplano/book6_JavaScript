/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 3. House
 * 
 * Write a simple GraphicsProgram that uses GRect, GOval and GLine. Use
 * setFilled(), setColor() and setFillColor(). Draw a ’Painting’ that includes a
 * house, a tree, and the sun.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  // sun
  // let sun = new GOval(220, 20, 40, 40);
  // sun.setColor(color('yellow'));
  // sun.setFilled(true);
  // add(sun);
  let sun = new GOval(40, 40);
  sun.setColor(color('yellow'));
  sun.setFilled(true);
  add(sun, 220, 20);


  // tree
  let treeTrunk = new GRect(55, 100, 30, 60);
  treeTrunk.setColor(color('black'));
  treeTrunk.setFilled(true);
  add(treeTrunk);
  let treeCrown = new GOval(30, 50, 80, 60);
  treeCrown.setColor(color('green'));
  treeCrown.setFilled(true);
  add(treeCrown);

  // house
  let house = new GRect(130, 90, 70, 70);
  house.setColor(color('pink'));
  house.setFilled(true);
  add(house);
  let leftRoof = new GLine(125, 95, 165, 65);
  add(leftRoof);
  let rightRoof = new GLine(165, 65, 205, 95);
  add(rightRoof);
}

function draw() {
  update();
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 6. PacMan
 * 
 * Draw a PacMan using a GArc.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 200);
  frameRate(5);

  let pacman = new GArc(150, 150, 45, 270);
  pacman.setFilled(true);
  pacman.setFillColor(Color.YELLOW);
  add(pacman, 75, 25);
}

function draw() {
  update();
}
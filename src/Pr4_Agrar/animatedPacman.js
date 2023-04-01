/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: AnimatedPacman
 * 
 * Draws an animated Pacman.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const FPS = 25;

let pacman;
let angle = 0;
let step = 5;

function setup() {
  createCanvas(300, 200);
  frameRate(FPS);

  pacman = new GArc(75, 25, 150, 150, 0, 360);
  pacman.setFilled(true);
  pacman.setFillColor(color('yellow'));
  add(pacman);
  let eye = new GOval(145, 57, 15, 15);
  eye.setFilled(true);
  add(eye);
}

function draw() {
  pacman.setStartAngle(angle);
  pacman.setSweepAngle(360 - 2 * angle);
  angle += step;
  if (angle > 40 || angle <= 1) {
    step = -step;
  }
  update();
}
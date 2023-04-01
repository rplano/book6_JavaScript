/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: YinYang
 * 
 * If you are into esoteric science and philosophy you may have encountered the
 * YinYang symbol. Write a little a graphics program that draws the YinYang
 * symbol. Hint: the GArc class is helpful.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const DIAMETER = 150;

function setup() {
	createCanvas(300, 150);
  frameRate(5);

  let x = 0;
  let y = -50;

  // draw half black
  let blackHalf = new GArc(DIAMETER, DIAMETER, -90, 180);
  blackHalf.setFilled(true);
  blackHalf.setFillColor(Color.BLACK);
  add(blackHalf, x + DIAMETER / 2, y + DIAMETER / 2 - 25);

  // draw small white oval
  let smallWhiteOval = new GOval(DIAMETER / 2, DIAMETER / 2);
  smallWhiteOval.setFilled(true);
  smallWhiteOval.setColor(Color.WHITE);
  smallWhiteOval.setFillColor(Color.WHITE);
  add(smallWhiteOval, x + 3 * DIAMETER / 4, y + DIAMETER / 2 - 25);

  // draw small black oval
  let smallBlackOval = new GOval(DIAMETER / 2, DIAMETER / 2);
  smallBlackOval.setFilled(true);
  smallBlackOval.setColor(color('black'));
  smallBlackOval.setFillColor(color('black'));
  add(smallBlackOval, x + 3 * DIAMETER / 4, y + DIAMETER - 25);

  // draw small white oval
  let tinyBlackOval = new GOval(DIAMETER / 10, DIAMETER / 10);
  tinyBlackOval.setFilled(true);
  tinyBlackOval.setColor(color('black'));
  tinyBlackOval.setFillColor(color('black'));
  add(tinyBlackOval, x + DIAMETER, y + 7 * DIAMETER / 10 - 25);

  // draw small white oval
  let tinyWhiteOval = new GOval(DIAMETER / 10, DIAMETER / 10);
  tinyWhiteOval.setFilled(true);
  tinyWhiteOval.setColor(color('white'));
  tinyWhiteOval.setFillColor(color('white'));
  add(tinyWhiteOval, x + DIAMETER, y + 12 * DIAMETER / 10 - 25);

  // draw envelope
  let envelope = new GOval(DIAMETER, DIAMETER);
  add(envelope, x + DIAMETER / 2, y + DIAMETER / 2 - 25);
}

function draw() {
  update();
}
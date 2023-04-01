/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 5. HelloWorld
 * 
 * Write a simple GraphicsProgram that uses a GLabel to output a ’Hello World’
 * message. Change the color, the font and the font size of the label. Also
 * change the position.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 150);
  frameRate(5);

  let hans = new GLabel("Hello World!");
  hans.setFont('Arial');
  hans.setFontSize(36);
  hans.setColor(Color.RED);
  add(hans, 40, 85);
}

function draw() {
  update();
}
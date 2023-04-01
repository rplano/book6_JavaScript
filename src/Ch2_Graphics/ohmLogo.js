/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 4. OhmLogo
 * 
 * Draw an image.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
  createCanvas(300, 200);
  frameRate(5);

  let om = new GImage(60, 10, "Ch2_Graphics/TH-Nuernberg-Logo.jpg");
  om.scale(1.7);
  add(om);
}

function draw() {
  update();
}
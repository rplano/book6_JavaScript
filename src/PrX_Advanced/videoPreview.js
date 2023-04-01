/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 4. VideoPreview
 * 
 * Draw an image.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let video;
let counter = 0;

function setup() {
  createCanvas(320, 240);
  frameRate(1);

  // for accessing video data: https://editor.p5js.org/Jaesar/sketches/Pg9HdjCNq
  video = new GVideoPreview(0, 0, 320, 240, "PrX_Advanced/socialweb.mp4");
  add(video);
}

// used with GVideoPreview
function draw() {
  if (counter%2 == 1) {
    video.play();
  }
  if (counter%2 == 0) {
    video.pause();
  }
  if (counter == 10) {
    video.stop();
    noLoop();
  }
  update();
  counter++;
}
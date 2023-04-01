/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 4. WebCamPreview
 * 
 * Show webcam.  Important: browser needs to be able to use webcam (settings).
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let webCam;

function setup() {
  createCanvas(320, 240);
  frameRate(20);

  let preView = new GWebCamPreview(0, 0, 320, 240);
  add(preView);
}

// function draw() {
//   update();
// }
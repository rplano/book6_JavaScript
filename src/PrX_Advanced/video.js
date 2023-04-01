/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: 4. Video
 * 
 * Draw an image.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let video;

function setup() {
  createCanvas(320, 240);
  frameRate(20);

  video = new GVideo(0, 0, 320, 240, "PrX_Advanced/socialweb.mp4");
  add(video);  
  video.play();
}

function draw() {
  update();
  let pixels = video.getPixelArray();
  // print(pixels.length);
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      let index = (x + y * this.width) * 4;
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];

      // raw black and white
      //   let bw = (r + g + b)/3;
      // luminosity
      // let bw = r * .299 + g * .587 + b * .0114;
      // let tr = bw;
      // let tg = bw;
      // let tb = bw;

      // sepia
      let tr = (r * 0.393) + (g * 0.769) + (b * 0.189);
      let tg = (r * 0.349) + (g * 0.686) + (b * 0.168);
      let tb = (r * 0.272) + (g * 0.534) + (b * 0.131);

      // negative
      // let tr = 255 - r;
      // let tg = 255 - g;
      // let tb = 255 - b;

      // try different channels
      // let tr = r;
      // let tg = 255 - g;
      // let tb = b;

      pixels[index + 0] = tr;
      pixels[index + 1] = tg;
      pixels[index + 2] = tb;
    }
  }
  video.setPixelArray(pixels);
}
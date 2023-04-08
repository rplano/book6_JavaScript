/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: sensors
 * 
 * A simple GraphicsProgram that accesses the sensors.  Does not work on many browsers.
 * 
 * @see https://coursescript.com/notes/interactivecomputing/mobile/accelerometer/
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let x = y = z = 0;
let lbl;

function setup() {
    createCanvas(400, 200);
    frameRate(2);

    lbl = new GLabel("");
    lbl.setFont('Arial');
    lbl.setFontSize(20);
    add(lbl, 90, 100);

    addSensors();
}

function draw() {
    lbl.setLabel("x=" + x.toFixed(2) + ", y=" + y.toFixed(2) + ", z=" + z.toFixed(2));
    update();
}

function addSensors() {
    // devicemotion (acceleration), deviceorientation (magnetometer), deviceorientationabsolute (orientation)
    window.addEventListener('devicemotion', function (e) {
        print("devicemotion");
        // get accelerometer values
        x = e.accelerationIncludingGravity.x;
        y = e.accelerationIncludingGravity.y;
        z = e.accelerationIncludingGravity.z;
    });
}
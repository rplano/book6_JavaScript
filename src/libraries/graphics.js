/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: classes mimicking behavior of ACM Java graphics library.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 * @version 0.03
 */

"use strict";

let _gobjects = [];
let _backgroundColor = 'white';
let _HTMLCanvasElement;

// function createCanvas2(_WIDTH, _HEIGHT) {
//     let c = createCanvas(_WIDTH, _HEIGHT);
//     _HTMLCanvasElement = c.elt;
// 	print(_HTMLCanvasElement);
//     return c;
// }

function update() {
    background(_backgroundColor);
    // draw gobjects
    for (let i = 0; i < _gobjects.length; i++) {
        // print(i+','+_gobjects[i].constructor.name);
        _gobjects[i].draw();
    }
}

function setBackground(color) {
    _backgroundColor = color;
}

function getElementAt(x, y) {
    for (let i = 0; i < _gobjects.length; i++) {
        const r = _gobjects[i];
        if (r.contains(x, y)) {
            return r;
        }
    }
}

function getElementsAt(x, y) {
    let retObj = [];
    for (let i = 0; i < _gobjects.length; i++) {
        const r = _gobjects[i];
        if (r.contains(x, y)) {
            retObj.push(r);
        }
    }
    return retObj;
}

function add(obj, x, y) {
    // obj.setLocation(0, 0);
    if ((x !== undefined) && (y !== undefined)) {
        obj.setLocation(x, y);
    }
    _gobjects.push(obj);
}

function removeObj(obj) {
    const pos = _gobjects.indexOf(obj);
    // print('pos='+pos);
    if (pos > -1) {
        _gobjects.splice(pos, 1);
    }
}

function removeAll() {
    _gobjects = [];
}


class GObject {

    constructor(x, y, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        if (width !== undefined && height !== undefined) {
            this.width = width;
            this.height = height;
        }
        if (x !== undefined && y !== undefined) {
            this.x = x - 0.5;
            this.y = y - 0.5;
        }

        this.color = 'black';
        this.filled = false;
        this.fillColor = 'white';
        this.type = this.constructor.name;  // needed for deserialization
    }

    setColor(col) {
        this.color = col;
        if (this.filled) {
            this.fillColor = this.color;
        }
    }

    getColor() {
        return this.color;
    }

    setFilled(fill) {
        // print('GObject.setFilled('+fill+')');
        this.filled = fill;
        if (fill) {
            this.fillColor = this.color;
        }
    }

    setFillColor(col) {
        this.fillColor = col;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    move(dx, dy) {
        // print(this.y+','+dy);
        this.x += dx;
        this.y += dy;
    }

    scale(sw, sh) {
        if (sh === undefined) {
            this.width = sw * this.width;
            this.height = sw * this.height;
        } else {
            this.width = sw * this.width;
            this.height = sh * this.height;
        }
    }

    contains(x, y) {
        //console.log('contains('+x+','+y+'):'+this.x);
        if (x >= this.x && x <= this.x + this.width) {
            if (y >= this.y && y <= this.y + this.height) {
                return true;
            }
        }
        return false;
    }

    toString() {
        return "GObject [x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height="
            + this.height + ", color=" + this.color + ", filled=" + this.filled
            + ", fillColor=" + this.fillColor + "]";
    }
}

class GPixel extends GObject {
    constructor(x, y) {
        super(x, y, 1, 1);
    }

    draw() {
        // print('GPixel.draw()'+this.color);
        noStroke();
        set(this.x, this.y, color(this.color));
        updatePixels();
    }
}

class GOval extends GObject {

    constructor(x, y, width, height) {
        if ((width === undefined) && (height === undefined)) {
            super(0, 0, x, y);
        } else {
            super(x, y, width, height);
        }
    }

    draw() {
        let dx = this.width / 2;
        let dy = this.height / 2;
        if (this.filled) {
            if (this.fillColor !== undefined) {
                fill(this.fillColor);
                noStroke();
                ellipse(this.x + dx, this.y + dy, this.width, this.height);
                noFill();
                stroke(this.color);
                ellipse(this.x + dx, this.y + dy, this.width, this.height);
            } else {
                fill(this.color);
                noStroke();
                ellipse(this.x + dx, this.y + dy, this.width, this.height);
            }
        } else {
            noFill();
            stroke(this.color);
            ellipse(this.x + dx, this.y + dy, this.width, this.height);
        }
    }
}

class GRect extends GObject {

    constructor(x, y, width, height) {
        if ((width === undefined) && (height === undefined)) {
            super(0, 0, x, y);
        } else {
            super(x, y, width, height);
        }
    }

    draw() {
        if (this.filled) {
            if (this.fillColor !== undefined) {
                fill(this.fillColor);
                noStroke();
                rect(this.x, this.y, this.width, this.height);
                noFill();
                stroke(this.color);
                rect(this.x, this.y, this.width, this.height);
            } else {
                fill(this.color);
                noStroke();
                rect(this.x, this.y, this.width, this.height);
            }
        } else {
            noFill();
            stroke(this.color);
            rect(this.x, this.y, this.width, this.height);
        }
    }
}

class GArc extends GObject {

    constructor(x, y, width, height, startAngle, sweepAngle) {
        if ((startAngle === undefined) && (sweepAngle === undefined)) {
            super(0, 0, x, y);
            this.stopAngle = -width * PI / 180;
            this.startAngle = this.stopAngle - height * PI / 180;
        } else {
            super(x, y, width, height);
            this.stopAngle = -startAngle * PI / 180;
            this.startAngle = this.stopAngle - sweepAngle * PI / 180;
        }
    }

    setStartAngle(angle) {
        this.stopAngle = -angle * PI / 180;
    }

    setSweepAngle(angle) {
        this.startAngle = this.stopAngle - angle * PI / 180;
    }

    draw() {
        let dx = this.width / 2;
        let dy = this.height / 2;
        if (this.filled) {
            if (this.fillColor !== undefined) {
                fill(this.fillColor);
                noStroke();
                arc(this.x + dx, this.y + dy, this.width, this.height, this.startAngle, this.stopAngle, PIE);
                noFill();
                stroke(this.color);
                arc(this.x + dx, this.y + dy, this.width, this.height, this.startAngle, this.stopAngle, PIE);
            } else {
                fill(this.color);
                noStroke();
                arc(this.x + dx, this.y + dy, this.width, this.height, this.startAngle, this.stopAngle, PIE);
            }
        } else {
            noFill();
            stroke(this.color);
            arc(this.x + dx, this.y, this.width, this.height, this.startAngle, this.stopAngle, PIE);
        }
    }
}

class GLabel extends GObject {

    constructor(x, y, label) {
        if ((y === undefined) && (label === undefined)) {
            super(0, 0, 10, 10);    // width and height should be the one of the label
            this.label = x;
        } else {
            super(x, y, 10, 10);    // width and height should be the one of the label
            this.label = label;
        }
        this.font = 'Arial';
        this.fontSize = 30;
    }

    setLabel(lbl) {
        this.label = lbl;
    }

    setFont(fon) {
        this.font = fon;
    }

    setFontSize(size) {
        this.fontSize = size;
    }

    getWidth(canvas) {
        // print('getWidth(canvas)');
        if (canvas === undefined) {
            return this.label.length * this.fontSize / 2; // rough estimate
        } else {
            canvas.font = '' + this.fontSize + 'px ' + this.font;
            this.width = canvas.measureText(this.label).width;
            return this.width;
        }
    }

    draw() {
        textSize(this.fontSize);
        textFont(this.font);
        fill(this.color);
        noStroke();
        text(this.label, this.x, this.y);
        stroke(this.color);
    }
}

class GLine extends GObject {

    constructor(x0, y0, x1, y1, lineWidth) {
        super(x0, y0, x1 - x0, y1 - y0);
        if (lineWidth !== undefined) {
            this.lineWidth = lineWidth;
        }
    }

    setStartPoint(x0, y0) {
        this.width = (this.x + this.width) - x0;
        this.height = (this.y + this.height) - y0;
        this.x = x0;
        this.y = y0;
    }

    setEndPoint(x1, y1) {
        this.width = x1 - this.x;
        this.height = y1 - this.y;
    }

    draw() {
        stroke(this.color);
        if (this.lineWidth !== undefined) {
            strokeWeight(this.lineWidth);
        }
        line(this.x, this.y, this.x + this.width, this.y + this.height);
        // need to reset for others
        strokeWeight(1);
    }
}

// https://p5js.org/examples/form-regular-polygon.html
class GPolygon extends GObject {

    constructor(x, y, lineWidth) {
        if ((y === undefined) && (lineWidth === undefined)) {
            super(0, 0, 0, 0);
        } else {
            super(x, y, 0, 0);
        }
        if (lineWidth !== undefined) {
            this.lineWidth = lineWidth;
        }
        this.points = [];
        this.angle = 0;
    }

    // not perfect, if x or y are negative
    addVertex(x, y) {
        this.points.push({ x: x, y: y });
        super.width = Math.max(this.width, x);
        super.height = Math.max(this.height, y);
        // print(this.width+','+this.height);
    }

    scale(sw, sh) {
        throw new Error('scale() is not implemented for GPolygon!');
    }

    rotate(angle) {
        // print('angle='+angle);
        this.angle -= angle * PI / 180;
    }

    draw() {
        if (this.filled) {
            fill(this.color);
        } else {
            stroke(this.color);
        }
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        // scale(0.5);
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            vertex(this.points[i].x, this.points[i].y);
        }
        endShape(CLOSE);
        pop();
        // stroke(this.color);
    }
}

//<video playsinline="" crossorigin="anonymous" width="320" height="240"></video>
class GWebCamPreview extends GObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        let capture = createCapture(VIDEO);

        this.element = document.querySelector("video");
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
        this.element.style.position = 'absolute';
        this.element.style.top = x + 'px';
        this.element.style.left = y + 'px';
    }

    draw() {
    }
}

class GWebCam extends GObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.capture = createCapture(VIDEO);
        this.capture.hide();
        this.pixelArray1 = [];
        this.pixelArray2 = [];
    }

    setPixelArray(pixels) {
        for (let i = 0; i < pixels.length; i++) {
            this.pixelArray2[i] = pixels[i];
        }
    }

    getPixelArray() {
        return this.pixelArray1;
    }

    draw() {
        image(this.capture, this.x, this.y, this.width, this.height);
        loadPixels();

        // remember pixels for modification
        for (let i = 0; i < pixels.length; i++) {
            this.pixelArray1[i] = pixels[i];
        }

        // show modified pixels
        for (let i = 0; i < pixels.length; i++) {
            pixels[i] = this.pixelArray2[i];
        }

        updatePixels();
    }
}

class GVideo extends GObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.video = createVideo("socialweb.mp4");
        this.video.hide();

        this.element = document.querySelector("video");
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
        this.element.style.position = 'absolute';
        this.element.style.top = x + 'px';
        this.element.style.left = y + 'px';

        this.pixelArray1 = [];
        this.pixelArray2 = [];
    }

    setPixelArray(pixels) {
        for (let i = 0; i < pixels.length; i++) {
            this.pixelArray2[i] = pixels[i];
        }
    }

    getPixelArray() {
        return this.pixelArray1;
    }

    play() {
        this.video.play();
    }

    pause() {
        this.video.pause();
    }

    stop() {
        this.video.stop();
    }

    draw() {
        // this.video.loadPixels();
        image(this.video, this.x, this.y, this.width, this.height);
        loadPixels();

        // remember pixels for modification
        for (let i = 0; i < pixels.length; i++) {
            this.pixelArray1[i] = pixels[i];
        }

        // show modified pixels
        for (let i = 0; i < pixels.length; i++) {
            pixels[i] = this.pixelArray2[i];
        }

        updatePixels();
    }
}

class GVideoPreview extends GObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.video = createVideo("socialweb.mp4");

        this.element = document.querySelector("video");
        this.element.setAttribute('width', width);
        this.element.setAttribute('height', height);
        this.element.style.position = 'absolute';
        this.element.style.top = x + 'px';
        this.element.style.left = y + 'px';
    }

    play() {
        this.video.play();
    }

    pause() {
        this.video.pause();
    }

    stop() {
        this.video.stop();
    }

    draw() {
        // this.video.loadPixels();
    }
}

class GImage extends GObject {

    constructor(x, y, imageName) {
        if ((x === undefined) && (y === undefined) && (imageName === undefined)) {
            super(0, 0, 0, 0);
            this.image = undefined;
            // this.imageData = undefined;
            this.src = undefined;
        } else if ((y === undefined) && (imageName === undefined)) {
            super(0, 0, 0, 0);
            this.image = loadImage(x);
            // this.imageData = undefined;
            this.src = x;
        } else {
            super(x, y, 0, 0);
            this.image = loadImage(imageName);
            // this.imageData = undefined;
            this.src = imageName;
        }
        // print('this.image.width'+this.image.width);
        this.sx = 1;
        this.sy = 1;
        this.imageData = undefined;
        this.prom = undefined;
        //this.invisibleCanvas = document.createElement('canvas');
    }

    scale(sw, sh) {
        if (sh === undefined) {
            this.sx = sw;
            this.sy = sw;
        } else {
            this.sx = sw;
            this.sy = sh;
        }
        // print('scale'+this.sx);
    }

    setPixelArray(imgData) {
        let that = this; // dirty trick for promise below

        this.image = createImage(imgData.width, imgData.height);
        this.image.loadPixels();
        for (let i = 0; i < imgData.data.length; i++) {
            this.image.pixels[i] = imgData.data[i];
        }
        this.image.updatePixels();
        this.src = 'created';

        // we need to remember the imageData
        Promise.resolve(imgData).then(function (value) {
            that.imageData = value;
        })
    }

    // this is a little tricky, because we must wait until the image has been loaded and drawn
    getPixelArray() {
        return new Promise((resolveInner) => {
            //const canvas = document.getElementById('defaultCanvas0');
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 800;
            const ctx = canvas.getContext('2d');
            let img = new Image();
            img.onload = () => {
                createImageBitmap(img);
                ctx.drawImage(img, 0, 0);
                let imgData = ctx.getImageData(0, 0, img.width, img.height);
                canvas.remove();
                // print('imageData='+imageData);
                resolveInner(imgData);
            }
            // img.src = 'Taj_Mahal_(Edited).jpeg';
            img.src = this.src;
        });
    }

    async getImageData() {
        let imgData = image.imageData;
        if (imgData === undefined) {
            imgData = await this.getPixelArray();
        }
        return imgData;
    }

    draw() {
        if (this.image !== undefined) {
            image(this.image, this.x, this.y, this.image.width * this.sx, this.image.height * this.sy);
        }
    }

    offScreenDrawing() {
        // @see https://stackoverflow.com/questions/3892010/create-2d-context-without-canvas
        // Create a canvas element
        let canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 400;

        // Get the drawing context
        let ctx = canvas.getContext('2d');

        // Then you can do stuff, e.g.:
        ctx.fillStyle = '#f00';
        ctx.fillRect(20, 10, 80, 50);

        // Once you've used the canvas, you can of course add it to the document

        let element = document.getElementById('canvas_container');
        element.appendChild(canvas);

        // Or you could make an image from it:

        let new_image_url = canvas.toDataURL();
        let img = document.createElement('img');
        img.src = new_image_url;

        // Or you could access the canvas data as values with:

        let image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let rgba_byte_array = image_data.data;
        rgba_byte_array[0];  // red value for first pixel (top left) in the canvas
    }
}

class GCompound extends GObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.objects = [];
    }

    add(obj, x, y) {
        obj.x = 0;
        obj.y = 0;
        if ((x !== undefined) && (y !== undefined)) {
            obj.x = x;
            obj.y = y;
        }
        this.objects.push(obj);
    }

    scale(sw, sh) {
        throw new Error('scale() is not implemented for GCompound!');
    }

    draw() {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].move(this.x, this.y);
            this.objects[i].draw();
            this.objects[i].move(-this.x, -this.y);
        }
    }
}

class Color {
}
Color.RED = 'red';
Color.ORANGE = 'orange';
Color.YELLOW = 'yellow';
Color.GREEN = 'green';
Color.CYAN = 'cyan';
Color.BLUE = 'blue';
Color.MAGENTA = 'magenta';
Color.WHITE = 'white';
Color.BLACK = 'black';
Color.PINK = 'pink';
Color.DARK_GRAY = 'darkgray';
Color.LIGHT_GRAY = 'lightgray';
Color.GRAY = 'gray';

/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: drawing
 * 
 * A simple drawing program.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

"use strict"

const APP_WIDTH = 400;
const APP_HEIGHT = 200;
const TOUCH_TOLERANCE = 4;
const STROKE_WIDTH = 4;
const PEN_COLOR = 0xFF000000;

let mouseDrag = false;
let paint;
let path;
let curX, curY;

function setup() {
    createCanvas(APP_WIDTH, APP_HEIGHT);
    frameRate(2);

    addMouseOrTouchEvents();

    path = new Path();
    // path.reset();
    // path.moveTo(10,10);
    // path.lineTo(100,10);
    // path.getPath();
}


function handleStart(evt) {
    evt.preventDefault();
    // const touches = evt.changedTouches;
    // let x = touches[0].screenX;
    // let y = touches[0].screenY;
    let x = mouseX;
    let y = mouseY;
    path.reset();
    path.moveTo(x, y);
    curX = x;
    curY = y;
    mouseDrag = true;
}

function handleMove(evt) {
    // print("handleMove(): " + path.getCommands().size());
    evt.preventDefault();
    // const touches = evt.changedTouches;
    // let x = touches[0].screenX;
    // let y = touches[0].screenY;
    if (mouseDrag) {
        let x = mouseX;
        let y = mouseY;
        let dx = Math.abs(x - curX);
        let dy = Math.abs(y - curY);
        if (dx >= TOUCH_TOLERANCE || dy >= TOUCH_TOLERANCE) {
            path.quadTo(curX, curY, (x + curX) / 2, (y + curY) / 2);
            // path.lineTo(curX, curY);
            curX = x;
            curY = y;
        }
    }
}

function handleEnd(evt) {
    path.lineTo(curX, curY);
    mouseDrag = false;
}

function addMouseOrTouchEvents() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.addEventListener('touchstart', handleStart);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleEnd);
    } else {
        window.addEventListener('mousedown', handleStart);
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
    }
}

function draw() {
    try {
        drawPath();
    } catch (e) {
        print("Error: " + e);
    }
    // update();
}

function drawPath() {
    let x0 = 0;
    let y0 = 0;
    let x = 0;
    let y = 0;
    let commands = path.getCommands();
    // print("drawPath(): " + commands.size());
    // print("drawPath(): " + path.getCommands().size());
    for (let i = 0; i < commands.size(); i++) {
        const cmd = commands.get(i);
        // print("drawPath(): " + cmd);
        switch (cmd.command) {
            case "reset":
                x0 = y0 = 0;
                // mPath.reset();
                break;
            case "moveTo":
                x0 = cmd.coords[0];
                y0 = cmd.coords[1];
                // mPath.moveTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom);
                break;
            case "lineTo":
                x = cmd.coords[0];
                y = cmd.coords[1];
                line(x0, y0, x, y);
                x0 = x;
                y0 = y;
                // mPath.lineTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom);
                break;
            case "quadTo":
                // https://stackoverflow.com/questions/3162645/convert-a-quadratic-bezier-to-a-cubic-one
                // Q(t) = Q0 (1-t)² + 2 Q1 (1-t) t + Q2 t²
                let x1 = cmd.coords[0];
                let y1 = cmd.coords[1];
                let x2 = cmd.coords[2];
                let y2 = cmd.coords[3];
                let x00 = x0;
                let y00 = y0;
                for (let t = 0; t <= 1.0; t += 0.2) {
                    x = x0 * (1 - t) * (1 - t) + 2 * x1 * (1 - t) * t + x2 * t * t;
                    y = y0 * (1 - t) * (1 - t) + 2 * y1 * (1 - t) * t + y2 * t * t;
                    line(x00, y00, x, y);
                    x00 = x;
                    y00 = y;
                }
                x0 = x2;
                y0 = y2;
                // mPath.quadTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom, (cmd.coords[2]+mXOffset)*mZoom, (cmd.coords[3]+mYOffset)*mZoom);
                break;
            default:
                print("drawPath(): we should not get here: " + cmd);
                break;
        }
    }
}

// function mousePressed() {
//     // touchStarted() does not work on Firefox, hence use mousePressed instead:
//     // if (navigator.userAgent.indexOf("Firefox") > -1) {
//     // print('mousePressed()' + mouseX);
//     let x = mouseX;
//     let y = mouseY;
//     path.reset();
//     path.moveTo(x, y);
//     curX = x;
//     curY = y;
//     // }
// }

// function touchStarted() {
//     let x = mouseX;
//     let y = mouseY;
//     path.reset();
//     path.moveTo(x, y);
//     curX = x;
//     curY = y;
// }

// function touchMoved() {
//     let x = mouseX;
//     let y = mouseY;
//     let dx = Math.abs(x - curX);
//     let dy = Math.abs(y - curY);
//     if (dx >= TOUCH_TOLERANCE || dy >= TOUCH_TOLERANCE) {
//         path.quadTo(curX, curY, (x + curX) / 2, (y + curY) / 2);
//         // path.lineTo(curX, curY);
//         curX = x;
//         curY = y;
//     }
// }

// function touchEnded() {
//     path.lineTo(curX, curY);
// }


class Path {
    constructor() {
        this.commands = new ArrayList();
    }

    getCommands() {
        return this.commands;
    }

    // getPath() {
    //     //let mPath = new Path2();
    //     // for (const cmd of this.commands) {
    //     for (let i = 0; i < this.commands.size(); i++) {
    //         const cmd = this.commands.get(i);
    //         print("getPath(): " + cmd);
    //         switch (cmd.command) {
    //             case "reset":
    //                 // mPath.reset();
    //                 break;
    //             case "moveTo":
    //                 // mPath.moveTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom);
    //                 break;
    //             case "lineTo":
    //                 // mPath.lineTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom);
    //                 break;
    //             case "quadTo":
    //                 // mPath.quadTo((cmd.coords[0]+mXOffset)*mZoom, (cmd.coords[1]+mYOffset)*mZoom, (cmd.coords[2]+mXOffset)*mZoom, (cmd.coords[3]+mYOffset)*mZoom);
    //                 break;
    //             default:
    //                 print("getPath(): we should not get here: " + cmd);
    //                 break;
    //         }
    //     }
    //     //return mPath;
    // }

    reset() {
        let coords = [0.0, 0.0, 0.0, 0.0]; // new float[4];
        this.commands.add(new Command("reset", coords));
    }

    moveTo(x, y) {
        let coords = [0.0, 0.0, 0.0, 0.0]; // new float[4];
        coords[0] = x;
        coords[1] = y;
        this.commands.add(new Command("moveTo", coords));
    }

    lineTo(mX, mY) {
        let coords = [0.0, 0.0, 0.0, 0.0]; // new float[4];
        coords[0] = mX;
        coords[1] = mY;
        this.commands.add(new Command("lineTo", coords));
    }

    quadTo(mX1, mY1, mX2, mY2) {
        let coords = [0.0, 0.0, 0.0, 0.0]; // new float[4];
        coords[0] = mX1;
        coords[1] = mY1;
        coords[2] = mX2;
        coords[3] = mY2;
        this.commands.add(new Command("quadTo", coords));
    }

    toString() {
        return "Path [commands=" + this.commands + "]";
    }
}

class Command {
    constructor(_command, _coords) {
        this.command = _command;  // reset/moveTo/lineTo/quadTo
        this.coords = _coords; //float[] coords;
    }

    toString() {
        return "Command [command=" + this.command + ", coords=" + this.coords + "]";
    }
}
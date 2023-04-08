/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: microphone
 * 
 * A simple GraphicsProgram that accesses the microphone.
 * 
 * @see https://p5js.org/examples/sound-mic-input.html
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("./libraries/p5.sound.min.js");

const APP_WIDTH = 400;
const APP_HEIGHT = 200;
const BALL_DIAM = 30;

let mic;

function setup() {
    createCanvas(APP_WIDTH, APP_HEIGHT);
    frameRate(20);

    createBall();

    mic = new p5.AudioIn();
    mic.start();

    function createBall() {
        ball = new GOval(BALL_DIAM, BALL_DIAM);
        ball.setFilled(true);
        ball.setFillColor(Color.PINK);
        add(ball, APP_WIDTH / 2, APP_HEIGHT - BALL_DIAM);
    }
}

function draw() {
    moveBall();
    update();
}

function moveBall() {
    let vol = mic.getLevel();
    let h = map(vol, 0, 1, APP_HEIGHT- BALL_DIAM, 0);
    ball.setLocation(APP_WIDTH / 2, h);
}
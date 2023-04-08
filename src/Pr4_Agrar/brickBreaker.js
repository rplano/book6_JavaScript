/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Agrar: Breakout
 * 
 * A simple version of the Breakout game.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

// constants
const FPS = 25;
const WIDTH = 400;
const HEIGHT = 500;
const BALL_SIZE = 20;
const PADDLE_SEPARATION = 10;
const PADDLE_HEIGHT = 10;
const PADDLE_WIDTH = 50;
const BRICK_WIDTH = 30;
const BRICK_HEIGHT = 15;

// instance variables
let paddle;
let ball;
let vx = 2;
let vy = 3;

const rgen = new RandomGenerator();

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(FPS);

  createBricks();
  createPaddle();
  createBall();
}

function draw() {
  moveBall();
  checkForCollision();
  update();
}

function mouseMoved() {
  let x = mouseX;
  paddle.setLocation(x, HEIGHT - PADDLE_SEPARATION);
}

function moveBall() {
  ball.move(vx, vy);
}

function checkForCollision() {
  checkForCollisionWithWall();
  checkForCollisionWithPaddleOrBricks();
}

function checkForCollisionWithPaddleOrBricks() {
  let x = ball.getX();
  let y = ball.getY();
  // print('x='+x+', y='+y);
  let obj = getElementAt(x, y);
  if (obj !== undefined) {
    if (obj === paddle) {
      // print('collision with paddle');
      vy = -vy;
    } else if (obj instanceof GRect) {
      // print('collision with brick');
      removeObj(obj);
      vy = -vy;
    }
  }
}

function checkForCollisionWithWall() {
  let x = ball.getX();
  let y = ball.getY();
  if ((x < 0) || (x > WIDTH)) {
    vx = -vx;
  }
  if (y < 0) {
    vy = -vy;
  }
}

function createBricks() {
  let y = 50;
  for (let i = 0; i < 5; i++) {
    drawOneRowOfStones(y, 12);
    y += BRICK_HEIGHT;
  }
}

function drawOneRowOfStones(y, n) {
  let x = -15;
  for (let i = 0; i < n; i++) {
    x += BRICK_WIDTH;
    let stone = new GRect(BRICK_WIDTH, BRICK_HEIGHT);
    stone.setFilled(true);
    stone.setFillColor(rgen.nextColor());
    add(stone, x, y);
  }
}

function createPaddle() {
  paddle = new GRect(WIDTH / 2, HEIGHT - PADDLE_SEPARATION,
    PADDLE_WIDTH, PADDLE_HEIGHT);
  paddle.setFilled(true);
  add(paddle);
}

function createBall() {
  ball = new GOval(WIDTH / 2, HEIGHT / 2, BALL_SIZE, BALL_SIZE);
  ball.setFilled(true);
  add(ball);
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: Asteroids
 * 
 * Asteroids is an arcade space shooter game. The player controls a spaceship in
 * an asteroid field. The object of the game is to shoot and destroy asteroids
 * while not colliding with them.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("Pr7_Asteroids/GAsteroid.js");
include("Pr7_Asteroids/GBullet.js");
include("Pr7_Asteroids/GSpaceShip.js");

// constants
const FPS = 25;
const APP_WIDTH = 400;
const APP_HEIGHT = 400;
const NR_OF_ASTEROIDS = 10;
const ASTEROID_SIZE = 40;
const ASTEROID_MAX_SPEED = 5;
const SPACE_SHIP_SIZE = 20;
const SPACE_SHIP_SPEED = 3;
const BULLET_SIZE = 4;
const BULLET_SPEED = 10;

// instance variables
let rgen = new RandomGenerator();
let asteroids = [];
let spaceShip;
let bullet;

function setup() {
  createCanvas(APP_WIDTH, APP_HEIGHT);
  frameRate(FPS);

  createAsteroids();
  createSpaceShip();
}

function draw() {
  if (spaceShip !== undefined) {
    moveSpaceShip();
    moveAsteroids();
    moveBullet();
    checkForCollisions();
  }
  update();
}

// function keyTyped() {
function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      spaceShip.startEngine();
      break;
    case 32:
      fireBullet();
      break;
    case LEFT_ARROW:
      // handle left
      spaceShip.rotate(10);
      break;
    case RIGHT_ARROW:
      // handle right
      spaceShip.rotate(-10);
      break;
  }
}

function moveBullet() {
  if (bullet !== undefined) {
    bullet.move();
  }
}

function fireBullet() {
  if (bullet === undefined) {
    bullet = new GBullet(spaceShip.getX(), spaceShip.getY());
    bullet.vx = Math.sin(spaceShip.angle) * BULLET_SPEED;
    bullet.vy = -Math.cos(spaceShip.angle) * BULLET_SPEED;
    add(bullet);
    // sendToBack(bullet);
  }
}

function moveAsteroids() {
  for (let i = 0; i < NR_OF_ASTEROIDS; i++) {
    asteroids[i].move();
  }
}

function moveSpaceShip() {
  spaceShip.move();
}

function checkForCollisions() {
  checkForCollisionAsteroidsWithWall();
  checkForCollisionSpaceShipWithWall();
  checkForCollisionBulletWithWall();
  checkForCollisionBulletWithAsteroid();
  checkForCollisionAsteroidWithSpaceShip();
}

function checkForCollisionAsteroidWithSpaceShip() {
  let x = spaceShip.getX();
  let y = spaceShip.getY();
  let obj = getElementAt(x, y);
  // let objs = getElementsAt(x, y);
  // for (const obj of objs) {
    if ((obj !== undefined) && (obj != spaceShip)) {
      removeObj(obj);
      removeObj(spaceShip);
      spaceShip = undefined;
    }
  // }
}

function checkForCollisionBulletWithAsteroid() {
  if (bullet !== undefined) {
    let x = bullet.getX();
    let y = bullet.getY();
    let obj = getElementAt(x, y);
    if ((obj !== undefined) && (obj != bullet) && (obj != spaceShip)) {
      removeObj(obj);
      removeObj(bullet);
      bullet = undefined;
    }
  }
}

function checkForCollisionBulletWithWall() {
  if (bullet !== undefined) {
    let x = bullet.getX();
    let y = bullet.getY();
    if ((x < -BULLET_SIZE) || (x > APP_WIDTH)
      || (y < -BULLET_SIZE) || (y > APP_HEIGHT)) {
      removeObj(bullet);
      bullet = undefined;
    }
  }
}

function checkForCollisionSpaceShipWithWall() {
  let x = spaceShip.getX();
  let y = spaceShip.getY();
  if (x < -SPACE_SHIP_SIZE) {
    spaceShip.setLocation(APP_WIDTH, y);
  } else if (x > APP_WIDTH) {
    spaceShip.setLocation(-SPACE_SHIP_SIZE, y);
  }
  if (y < -SPACE_SHIP_SIZE) {
    spaceShip.setLocation(x, APP_HEIGHT);
  } else if (y > APP_HEIGHT) {
    spaceShip.setLocation(x, -SPACE_SHIP_SIZE);
  }
}

function checkForCollisionAsteroidsWithWall() {
  for (let i = 0; i < NR_OF_ASTEROIDS; i++) {
    let x = asteroids[i].getX();
    let y = asteroids[i].getY();
    if (x < -ASTEROID_SIZE) {
      asteroids[i].setLocation(APP_WIDTH, y);
    } else if (x > APP_WIDTH) {
      asteroids[i].setLocation(-ASTEROID_SIZE, y);
    }
    if (y < -ASTEROID_SIZE) {
      asteroids[i].setLocation(x, APP_HEIGHT);
    } else if (y > APP_HEIGHT) {
      asteroids[i].setLocation(x, -ASTEROID_SIZE);
    }
  }
}

function createSpaceShip() {
  spaceShip = new GSpaceShip(APP_WIDTH / 2, APP_HEIGHT / 2);
  add(spaceShip);
}

function createAsteroids() {
  for (let i = 0; i < NR_OF_ASTEROIDS; i++) {
    asteroids[i] = new GAsteroid(rgen.nextInt(APP_WIDTH),
      rgen.nextInt(APP_HEIGHT));
    asteroids[i].vx = rgen.nextInt(-ASTEROID_MAX_SPEED,
      ASTEROID_MAX_SPEED);
    asteroids[i].vy = rgen.nextInt(-ASTEROID_MAX_SPEED,
      ASTEROID_MAX_SPEED);
    asteroids[i].setColor(Color.BLUE);
    // asteroid.setFilled(true);
    add(asteroids[i]);
  }
}
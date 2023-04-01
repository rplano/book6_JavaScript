/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Asteroids: AngryCanon
 * 
 * Inspired by the name of a popular game, this program consists of a canon
 * (rectangle), of which you can modify the angle, using the keys.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const APP_WIDTH = 300;
const APP_HEIGHT = 200;
const OFFSET = 100;

const TARGET_SIZE = 40;
const BULLET_SIZE = 12;
const BULLET_SPEED = 20.0;
const GRAVITY = 1.0;

let canon;
let target;
let bullet;

let vx = 0.0;
let vy = 0.0;
let angle = 0.0;

function setup() {
	createCanvas(APP_WIDTH, APP_HEIGHT);
	frameRate(20);

	target = new GRect(TARGET_SIZE, TARGET_SIZE);
	target.setColor(Color.BLUE);
	target.setFilled(true);
	add(target, 230, APP_HEIGHT - TARGET_SIZE);

	let canon2 = new GOval(50, 50);
	canon2.setColor(Color.RED);
	canon2.setFilled(true);
	add(canon2, 25, APP_HEIGHT - 50);

	canon = new GPolygon();
	canon.addVertex(-8, -40);
	canon.addVertex(-8, 10);
	canon.addVertex(-6, 12);
	canon.addVertex(-3, 15);
	canon.addVertex(3, 15);
	canon.addVertex(6, 12);
	canon.addVertex(8, 10);
	canon.addVertex(8, -40);
	canon.setColor(Color.BLACK);
	canon.setFilled(true);
	add(canon, 50, APP_HEIGHT - 35);
}

function draw() {
	if (bullet != null) {
		moveBullet();
		collisionWithWalls();
		collisionWithTarget();
	}
	update();
}

function collisionWithWalls() {
	if (bullet.getX() > APP_WIDTH) {
		removeObj(bullet);
		bullet = null;
	} else if (bullet.getY() > APP_HEIGHT) {
		removeObj(bullet);
		bullet = null;
	}
}

function collisionWithTarget() {
	let obj = getElementAt(bullet.getX(), bullet.getY());
	if (obj != null) {
		if (obj == target) {
			removeObj(obj);
			removeObj(bullet);
			bullet = null;
		}
	}
}

function moveBullet() {
	bullet.move(vx, vy);
	vy += GRAVITY;
}

function fireBullet() {
	if (bullet == null) {
		vx = -Math.sin(angle * Math.PI / 180) * BULLET_SPEED;
		vy = -Math.cos(angle * Math.PI / 180) * BULLET_SPEED;

		bullet = new GOval(BULLET_SIZE, BULLET_SIZE);
		bullet.setColor(Color.GREEN);
		bullet.setFilled(true);
		add(bullet, 50 - BULLET_SIZE / 2, APP_HEIGHT - 30 - BULLET_SIZE);
		sendToBack(bullet);
	}
}

function keyPressed() {
	switch (keyCode) {
		case LEFT_ARROW:
			angle += 5;
			canon.rotate(5);
			break;
		case RIGHT_ARROW:
			angle -= 5;
			canon.rotate(-5);
			break;
		case 32:
			fireBullet();
			break;
	}
}
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
class GSpaceShip extends GPolygon {

    constructor(x, y) {
      super(x, y);
      super.addVertex(0, -SPACE_SHIP_SIZE);
      super.addVertex(-2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
      super.addVertex(0, SPACE_SHIP_SIZE / 2);
      super.addVertex(2 * SPACE_SHIP_SIZE / 3, SPACE_SHIP_SIZE);
  
      this.vx = 0.0;
      this.vy = 0.0;
    }
  
    move() {
      super.move(this.vx, this.vy);
    }
  
    rotate(theta) {
      super.rotate(theta);
    }
  
    startEngine() {
      this.vx += Math.sin(this.angle) * SPACE_SHIP_SPEED;
      this.vy -= Math.cos(this.angle) * SPACE_SHIP_SPEED;
    }
  }
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
class GBullet extends GOval {

    constructor(x, y) {
        super(x, y, BULLET_SIZE, BULLET_SIZE);
        super.setColor(Color.RED);
        super.setFilled(true);
        super.setFillColor(Color.RED);

        this.vx = 0.0;
        this.vy = 0.0;
    }

    move() {
        super.move(this.vx, this.vy);
    }
}
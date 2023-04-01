/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Point
 * 
 * This class represents a point in 2D space having x and y coordinate.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

class Point {

	constructor(_x, _y) {
		if (_x === undefined && _y === undefined) {
			this.x = 0;
			this.y = 0;
		} else {
			this.x = _x;
			this.y = _y;
		}
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	equals(p) {
		if (this.x == p.x && this.y == p.y) {
			return true;
		}
		return false;
	}

	add(p) {
		this.x += p.x;
		this.y += p.y;
	}

	toString() {
		return "Point [x=" + this.x + ", y=" + this.y + "]";
	}
}
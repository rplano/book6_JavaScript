/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: MyRandomGenerator
 * 
 * This class should behave similar to the ACM RandomGenerator.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

class MyRandomGenerator {
	// the order of the method declaration is important!!!
	nextColor() {
		return 'rgb(' + this.nextInt(256) + ',' + this.nextInt(256) + ',' + this.nextInt(256) + ')';
	}

	// there is no overloading in JavaScript
	nextInt(low, high) {
		if (high !== undefined) {
			return parseInt(low + Math.random() * (high - low), 10);
		} else {
			return this.nextInt(0, low);
		}
	}

	nextDouble(low, high) {
		if (high !== undefined) {
			return low + Math.random() * (high - low);
		} else {
			return this.nextDouble(0, low);
		}
	}

	nextBoolean() {
		if (Math.random() < 0.5) {
			return true;
		}
		return false;
	}
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 6. Polymorphism
 * 
 * Shows an example for polymorphism using the ACM graphics library.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	const hansel = new Freshman("Hänschen");
	polymorphic(hansel);
	const gretel = new Student("Gretchen");
	polymorphic(gretel);
	polymorphic("hi there");
}

function polymorphic(studnt) {
	if (studnt instanceof Student) {
		println(studnt.toString());
	} else {
		throw Error("Parameter is not of type Student!");
	}
}

class Student {
	constructor(name, id = -1) {
		this.name = name;

		// closure: read only
		this.getId = (function () {
			let _id = id;
			return function () {
				return _id
			}
		})();

		// closure: increment only
		this.incrementCredits = (function (x) {
			let _credits = 0;
			return function (x) {
				if (x !== undefined && x > 0) {
					_credits += x;
				}
				return _credits
			}
		})();
	}

	toString() {
		return "Student [name=" + this.name + ", id=" + this.getId()
			+ ", credits=" + this.incrementCredits() + "]";
	}
}

class Freshman extends Student {
	constructor(name, id = -1) {
		super(name, id);
	}

	toString() {
		return "Freshman [name=" + this.name + ", id=" + this.getId()
			+ ", credits=" + this.incrementCredits() + "]";
	}
}
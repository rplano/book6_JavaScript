/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: 4a. Student
 * 
 * Shows how to write a class.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let hansel = new Student("Hänschen", 12345, 0.0);
	println(hansel.name);

	let gretel = new Student("Gretel", 54321, 11.0);
	println(gretel.name);
	gretel.name = "Gretchen";
	gretel.credits = gretel.credits + 5;
	gretel.incrementCredits(5);
	println(gretel.toString());

	println(gretel.getId());
	gretel.id = 42;
	println(gretel.getId());
}


class Student {

	constructor(_name, _id, _credits) {
		this.name = _name;
		this.credits = _credits;

		// closure: read only
		this.getId = (function () {
			let id = _id;
			return function () {
				return id
			}
		})();
	}

	incrementCredits(_credits) {
		if (_credits >= 0) {
			this.credits += _credits;
		}
	}

	toString() {
		return "Student [name=" + this.name + ", id=" + this.getId() + ", credits=" + this.credits
			+ "]";
	}
}
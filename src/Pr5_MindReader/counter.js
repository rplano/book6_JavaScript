/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: Counter
 * 
 * This class represents a counter.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	let cntr1 = new Counter();
	cntr1.incrementCounter();
	println("Value of cntr1: " + cntr1.getValue());

	let cntr2 = new Counter();
	cntr2.incrementCounter();
	cntr2.incrementCounter();
	cntr2.incrementCounter();
	println("Value of cntr2: " + cntr2.getValue());

	println("Value of cntr1: " + cntr1.getValue());
}


class Counter {
	constructor() {
		this.count = 0;
	}

	incrementCounter() {
		this.count++;
	}

	getValue() {
		return this.count;
	}
}
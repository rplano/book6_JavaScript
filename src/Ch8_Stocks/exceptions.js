/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 3. Exceptions
 * 
 * ConsoleProgram that demos the most common exceptions.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	// TypeError
	try {
		let fritz;
		fritz.setColor(Color.RED);

		let num = 1;
		num.toUpperCase();

	} catch (e) {
		println(e);
	}

	// RangeError
	try {
		let b = new Array(-1)

	} catch (e) {
		println(e);
	}

	// ReferenceError
	try {
		let x = 3;
		x = x + y;

	} catch (e) {
		println(e);
	}

	// SyntaxError
	try {
		eval("let s = 'hi");

	} catch (e) {
		println(e);
	}


	// ArithmeticException
	try {
		let x = 5 / 0;
		println(x);

	} catch (e) {
		println(e);
	}

	// NumberFormatException
	try {
		let x = parseInt("five");
		println(x);

	} catch (e) {
		println(e);
	}

	// ArrayIndexOutOfBoundsException
	try {
		let eggs = [0, 1, 2, 3];
		println(eggs[3]);
		println(eggs[5]);

	} catch (e) {
		println(e);
	}
}
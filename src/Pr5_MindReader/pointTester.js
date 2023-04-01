/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * MindReader: PointTester
 * 
 * This class tests the Point class.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("Pr5_MindReader/point.js");

async function setup() {
	createConsole();

	let p1 = new Point(2, 3);
	println("p1: " + p1);

	let p2 = new Point(-1, 1);
	println("p2: " + p2);

	let p3 = new Point(3, 2);
	println("p3: " + p3);

	p3.add(p2);
	println("p3+p2 == p1?: " + p3.equals(p1));
}


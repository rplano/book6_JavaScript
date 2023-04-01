/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Graphics: PieChart
 * 
 * Draw a pie chart using a arcs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createCanvas(300, 150);
	frameRate(5);

	const size = 150;
	const pos = 75;

	let a1 = new GArc(size, size, 0, 45);
	a1.setFilled(true);
	a1.setFillColor(Color.RED);
	add(a1, pos, pos - 75);

	let a2 = new GArc(size, size, 45, 225);
	a2.setFilled(true);
	a2.setFillColor(Color.YELLOW);
	add(a2, pos, pos - 75);

	let a = new GArc(size, size, 270, 90);
	a.setFilled(true);
	a.setFillColor(Color.GREEN);
	add(a, pos, pos - 75);
}

function draw() {
	update();
}
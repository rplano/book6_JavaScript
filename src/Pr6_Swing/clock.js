/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: Clock
 * 
 * A Swing program that displays the time in big letters using a JLabel.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const WIDTH = 300;
const HEIGHT = 150;

let face;

function setup() {
	createGUI(WIDTH, HEIGHT);
	frameRate(5);
	setLayout('border');

	face = new JSLabel("88:88:88");
	face.addStyle('font: 60px SansSerif;');
	addWidget(face, 'NORTH');
}

function draw() {
	face.setText(getTime());
}

function getTime() {
	let time = new Date();
	let text = "";
	text += time.getHours();
	text += ":";
	text += padWithChars("" + time.getMinutes(), '0', 2);
	text += ":";
	text += padWithChars("" + time.getSeconds(), '0', 2);
	return text;
}

function padWithChars(s, c, length) {
	while (s.length < length) {
		s = c + s;
	}
	return s;
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: StopWatch
 * 
 * A Swing program set a time to create an alarm.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 300;
const WIDTH = SIZE;
const HEIGHT = 150;

let face;
let btnStart;
let btnPause;

let startTime = -1;
let shouldPause = false;

function setup() {
	createGUI(WIDTH, HEIGHT);
	frameRate(50);
	setLayout('border');

	face = new JSLabel("00:000");
	// face.setFont(new Font("SansSerif", Font.PLAIN, 60));
	face.addStyle('font: 60px SansSerif;');
	face.addStyle('text-align: right;');
	addWidget(face, 'NORTH');

	btnStart = new JSButton("Start");
	addWidget(btnStart, 'SOUTH');

	btnPause = new JSButton("Pause");
	addWidget(btnPause, 'SOUTH');
}

function draw() {
	if (startTime > -1 && !shouldPause) {
		let time = Date.now() - startTime;
		let text = "";
		text += Math.trunc(time / 1000);
		text += ":";
		text += padWithZeros(Math.trunc((time % 1000)), 3);
		face.setText(text);
	}
}

function padWithZeros(nr, nrOfDigits) {
	return ("0" + nr).slice(-nrOfDigits);
}

function actionPerformed(e) {
	if (e.getSource() === btnStart) {
		if (startTime > -1) {
			btnStart.setText("Start");
			startTime = -1;
		} else {
			btnStart.setText("Stop");
			startTime = Date.now();
		}
	} else {
		shouldPause = !shouldPause;
	}
}
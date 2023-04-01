/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: CountDown
 * 
 * A Swing program that counts down second using a JLabel.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let tfAlarm;
let btnStart;
let stopTime = -1;

function setup() {
	createGUI(300, 150);
	frameRate(5);
	setLayout('border');

	tfAlarm = new JSTextField(4, "0");
	tfAlarm.addStyle('font: 60px SansSerif;');
	tfAlarm.addStyle('text-align: right;');
	addWidget(tfAlarm, 'NORTH');

	btnStart = new JSButton("Start");
	addWidget(btnStart, 'SOUTH');
}

function draw() {
	let time = stopTime - Date.now();
	if (time > -1) {
		let text = "" + Math.trunc(time / 1000);
		tfAlarm.setText(text);
	}
}

function actionPerformed(e) {
	let time = Number(tfAlarm.getText());
	stopTime = Date.now() + time * 1000;
}
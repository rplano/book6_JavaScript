/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: AlarmClock
 * 
 * A Swing program that can set a time to create an alarm.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
const SIZE = 300;
const WIDTH = SIZE;
const HEIGHT = 150;

let face;
let tfAlarm;
let btnStart;

let alarmTime = -1;
let alarmStarted = false;

function setup() {
	createGUI(WIDTH, HEIGHT);
	frameRate(5);
	setLayout('border');

	face = new JSLabel("0:00:00");
	face.addStyle('font: 60px SansSerif;');
	addWidget(face, 'NORTH');

	tfAlarm = new JSTextField(10);
	tfAlarm.addStyle('text-align: right;');
	// tfAlarm.addActionListener(this);
	addWidget(tfAlarm, 'SOUTH');

	btnStart = new JSButton("Set Alarm");
	addWidget(btnStart, 'SOUTH');
}

function draw() {
	if (alarmStarted) {
		let remainingTime = alarmTime - Date.now();
		face.setText(convertSecondsInTime(remainingTime));
		if (remainingTime <= 0) {
			alarmStarted = false;
			eval("alert('Alarm')");
		}
	}
}

function actionPerformed(e) {
	let time = tfAlarm.getText();

	let deltaTime = convertTimeInSeconds(time);
	alarmTime = Date.now() + deltaTime;
	alarmStarted = true;
}

/**
 * converts a time given in hours:minutes:seconds into seconds
 * 
 * @param time
 * @return
 */
function convertTimeInSeconds(time) {
	let hours = 0;
	let minutes = 0;
	let seconds = 0;
	if (time.length == 0) {
		time = "0";
	}
	let times = time.split(":");

	if (times.length == 1) {
		hours = 0;
		minutes = 0;
		seconds = Number(times[0]);
	} else if (times.length == 2) {
		hours = 0;
		minutes = Number(times[0]);
		seconds = Number(times[1]);
	} else if (times.length == 3) {
		hours = Number(times[0]);
		minutes = Number(times[1]);
		seconds = Number(times[2]);
	} else {
		println("we should never get here!");
	}
	// print(hours+':'+minutes+':'+seconds);

	let deltaTime = hours * 3600000 + minutes * 60000 + seconds * 1000;
	return deltaTime;
}

/**
 * converts a time given in seconds into a time given in
 * hours:minutes:seconds
 * 
 * @param time
 * @return
 */
function convertSecondsInTime(time) {
	let hours = Math.trunc(time / 3600000);
	let minutes = Math.trunc((time % 3600000) / 60000);
	let seconds = Math.trunc(((time % 3600000) % 60000) / 1000);
	// print(hours+':'+minutes+':'+seconds);
	let text = "";
	text += hours;
	text += ":";
	text += padWithChars("" + minutes, '0', 2);
	text += ":";
	text += padWithChars("" + seconds, '0', 2);
	return text;
}

function padWithChars(s, c, length) {
	while (s.length < length) {
		s = c + s;
	}
	return s;
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 3. OKCancel
 * 
 * @see http://www.variationenzumthema.de/
 * @author Ralph P. Lano
 */

let btn1;
let btn2;

function setup() {
	createGUI(300, 150);
	setLayout('border');
	
	btn1 = new JSButton("OK");
	addWidget(btn1, 'SOUTH');

	btn2 = new JSButton("Cancel");
	addWidget(btn2, 'SOUTH');
}

function actionPerformed(ev) {
	if (ev.getSource() === btn1) {
		print("source: btn1");
	} else if (ev.getSource() === btn2) {
		print("source: btn2");
	} else {
		print("unknown source");
	}
}
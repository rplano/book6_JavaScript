/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 2. FirstButton
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createGUI(300, 150);
	setLayout('border');
	
	let btn = new JSButton("OK");
	addWidget(btn, 'SOUTH');
}

function actionPerformed(ev) {
	print("hi:" + ev.getActionCommand());
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 4. Login
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let tf;

function setup() {
	createGUI(300, 150);
	setLayout('border');

	let lbl = new JSLabel("Name: ");
	addWidget(lbl, 'SOUTH');

	tf = new JSTextField(10);
	addWidget(tf, 'SOUTH');

	let btn = new JSButton("Login");
	addWidget(btn, 'SOUTH');
}

function actionPerformed(ev) {
	print("Name: " + tf.getText());
}
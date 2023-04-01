/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 5. Pizza
 * 
 * @see http://www.variationenzumthema.de/
 * @author Ralph P. Lano
 */

let topping1;

function setup() {
	createGUI(300, 150);
	setLayout('border');

	let lbl = new JSLabel("Select your toppings:");
	addWidget(lbl, 'NORTH');

	topping1 = new JSCheckBox("Tomatoes");
	addWidget(topping1, 'CENTER');
	let topping2 = new JSCheckBox("Bacon");
	addWidget(topping2, 'CENTER');
	let topping3 = new JSCheckBox("Onions");
	addWidget(topping3, 'CENTER');
}

function actionPerformed(ev) {
	print("source: " + ev.getSource().isSelected());
	print("source: " + ev.getActionCommand());
	if (ev.getSource() === topping1) {
		print("Tomatoes:" + ev.getSource().isSelected());
	}
}
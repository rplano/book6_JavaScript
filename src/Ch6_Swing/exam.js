/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 6. Exam
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let yes;
let no;

function setup() {
	createGUI(300, 150);
	setLayout('border');

	let lbl = new JSLabel("Correct:  1 + 1 = 2 ?");
	addWidget(lbl, 'CENTER');

	yes = new JSRadioButton("Yes");
	yes.setSelected(true);
	addWidget(yes, 'SOUTH');

	no = new JSRadioButton("No");
	addWidget(no, 'SOUTH');
}

function actionPerformed(ev) {
	print("yes: " + yes.isSelected());
	print("no: " + no.isSelected());
}
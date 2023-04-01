/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: Editor
 * 
 * A Swing program that counts down second using a JLabel.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let display;
let tfFileName;

function setup() {
	createGUI(300, 300);
	frameRate(5);
	setLayout('border');

	display = new JSTextArea("Enter text here...",10,20);
	display.addStyle('font: 18px Courier;');
	display.addStyle('width: 99%');
	display.addStyle('height: 98%');
	addWidget(display, 'CENTER');

	tfFileName = new JSTextField(10);
	tfFileName.setText("test.txt");
	addWidget(tfFileName, 'SOUTH');

	let btnOpen = new JSButton("Open");
	addWidget(btnOpen, 'SOUTH');
	let btnSave = new JSButton("Save");
	addWidget(btnSave, 'SOUTH');
}

function actionPerformed(e) {
	let cmd = e.getActionCommand();
	if (cmd == "Open") {
		openFile(tfFileName.getText());
	} else if (cmd == "Save") {
		saveFile(tfFileName.getText());
	}
}

function saveFile(fileName) {
	println("Here we should save the text to the file named " + fileName);
}

function openFile(fileName) {
	println("Here we should read the text from the file named " + fileName);
}
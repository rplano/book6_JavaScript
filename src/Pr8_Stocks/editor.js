/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Editor
 * 
 * A Swing program allowing you to load, edit and save text files.
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

	display = new JSTextArea("Enter text here...", 10, 20);
	display.addStyle('font: 18px Courier;');
	display.addStyle('width: 99%');
	display.addStyle('height: 98%');
	addWidget(display, 'CENTER');

	tfFileName = new JSTextField(14);
	tfFileName.setText("Pr8_Stocks/test.txt");
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
	// open file
	let fw = new Utils.FileWriter(fileName);

	// write to file, all at once
	fw.write(display.getText());

	// close file
	fw.close();
}

function openFile(fileName) {
	let text = "";

	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		text += line + "\n";
	}

	// close file
	fr.close();

	display.setText(text);
}
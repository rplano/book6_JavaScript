/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: DrawingEditor
 * 
 * A Swing program that draws geometric shapes. In addition it can load and save
 * graphics.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 20;
const FILE_NAME = "Pr8_Stocks/drawingEditor.json";

let cBoxColorPicker;
let rBtnRect;
let rBtnOval;
let cBtnFilled;
let canvas;

function setup() {
	createGUI(400, 400);
	frameRate(5);
	setLayout('border');

	initShapeSelector();
	initFillSelector();
	initColorSelector();

	canvas = new JSCanvas();
	canvas.addStyle('width: 97%');
	canvas.addStyle('height: 97%');
	addWidget(canvas, 'CENTER');

	let btnOpen = new JSButton("Load");
	addWidget(btnOpen, 'NORTH');
	let btnSave = new JSButton("Save");
	addWidget(btnSave, 'NORTH');
}

function draw() {
	updateJSCanvas(canvas);
}

function initShapeSelector() {
	rBtnRect = new JSRadioButton("Rect");
	rBtnRect.setSelected(true);
	addWidget(rBtnRect, 'SOUTH');

	rBtnOval = new JSRadioButton("Oval");
	addWidget(rBtnOval, 'SOUTH');
}

function initFillSelector() {
	cBtnFilled = new JSCheckBox("Filled");
	addWidget(cBtnFilled, 'SOUTH');
}

function initColorSelector() {
	cBoxColorPicker = new JSComboBox();
	cBoxColorPicker.addItem("Red");
	cBoxColorPicker.addItem("Green");
	cBoxColorPicker.addItem("Blue");
	addWidget(cBoxColorPicker, 'SOUTH');
}

function actionPerformed(e) {
	let cmd = e.getActionCommand();
	if (cmd == "Load") {
		openFile(FILE_NAME);
	} else if (cmd == "Save") {
		saveFile(FILE_NAME);
	}
}

function canvasClicked(_mouseX, _mouseY) {
	// select rect or oval
	let obj;
	if (rBtnRect.isSelected()) {
		obj = new GRect(SIZE, SIZE);
	} else {
		obj = new GOval(SIZE, SIZE);
	}

	// set color
	const colors = [Color.RED, Color.GREEN, Color.BLUE];
	obj.setColor(colors[cBoxColorPicker.getSelectedIndex()]);

	// make filled
	if (cBtnFilled.isSelected()) {
		obj.setFilled(true);
	}

	canvas.add(obj, _mouseX, _mouseY);
}

function saveFile(fileName) {
	// let fw = new Utils.FileWriter(fileName);
	// let objects = canvas.getAllGObjects();
	// let json = JSON.stringify(objects);
	// fw.write(json);
	// fw.close();
	canvas.removeAll();
}

function openFile(fileName) {
	canvas.removeAll();

	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file
	let json = '';
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		json += line;
	}

	deserialize(json);

	fr.close();
}

// really deserialize only works on objects with simple attributes
// for instance if color is some complicated rgb(), it will not work
function deserialize(json) {
	const jsObj = JSON.parse(json);
	for (const el of jsObj) {

		// create raw GObject
		let gObj = undefined;
		switch (el.type) {
			case 'GOval':
				gObj = new GOval();
				break;
			case 'GRect':
				gObj = new GRect();
				break;
			default:
				print('deserialization: unknown type: ' + el.type);
				gObj = undefined;
				break;
		}

		if (gObj !== undefined) {
			// assign properties
			for (const [key, value] of Object.entries(el)) {
				// print(key + ':' + value);	
				gObj[key] = value;
			}

			// add to objects and canvas
			canvas.add(gObj);
		}
	}
}

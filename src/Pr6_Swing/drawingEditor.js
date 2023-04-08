/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: DrawingEditor
 * 
 * A Swing program that draws geometric shapes.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let cBoxColorPicker;
let rBtnRect;
let rBtnOval;
let cBtnFilled;

function setup() {
	createGUI(300, 150);
	frameRate(5);
	setLayout('border');

	initShapeSelector();
	initFillSelector();
	initColorSelector();
}

function initShapeSelector() {
	rBtnRect = new JSRadioButton("Rect");
	rBtnRect.setSelected(true);
	addWidget(rBtnRect, 'SOUTH');

	rBtnOval = new JSRadioButton("Oval");
	addWidget(rBtnOval, 'SOUTH');

	// ButtonGroup shapeGrp = new ButtonGroup();
	// shapeGrp.add(rBtnRect);
	// shapeGrp.add(rBtnOval);
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
	print("Color:" + cBoxColorPicker.getSelectedItem());
	print("Rect:" + rBtnRect.isSelected());
	print("Oval:" + rBtnOval.isSelected());
	print("Filled:" + cBtnFilled.isSelected());
}
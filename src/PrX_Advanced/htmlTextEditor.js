/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: htmlTextEditor
 * 
 * A Swing program that demonstrates the use of the JSHtmlTextArea widget.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let display;
let stylePicker;

function setup() {
	createGUI(300, 300);
	frameRate(5);
	setLayout('border');

	display = new JSHtmlTextArea("Enter text here...", 10, 20);
	//display.addStyle('font: 18px Courier;');
	display.addStyle('width: 99%');
	display.addStyle('height: 98%');
	display.setHtml('hi <b>there</b>, how are <span style="color:red">you</span>?');
	addWidget(display, 'CENTER');

	// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
	stylePicker = new JSComboBox();
	stylePicker.addItem('bold');
	stylePicker.addItem('italic');
	stylePicker.addItem('underline');
	stylePicker.addItem('createLink');
	stylePicker.addItem('insertImage');
	stylePicker.addItem('insertOrderedList');
	stylePicker.addItem('insertUnorderedList');
	stylePicker.addItem('justifyCenter');
	stylePicker.addItem('justifyFull');
	stylePicker.addItem('justifyLeft');
	stylePicker.addItem('justifyRight');
	stylePicker.addItem('showCode');
	addWidget(stylePicker, 'SOUTH');
}

function actionPerformed(ev) {
	print("Style:" + stylePicker.getSelectedItem());
	display.applyStyleCommand(stylePicker.getSelectedItem());
}
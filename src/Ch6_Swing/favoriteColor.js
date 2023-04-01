/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 7. FavoriteColor
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let colorPicker;

function setup() {
	createGUI(300, 150);
	setLayout('border');

	colorPicker = new JSComboBox();
	colorPicker.addItem("Red");
	colorPicker.addItem("White");
	colorPicker.addItem("Blue");
	addWidget(colorPicker, 'NORTH');
}

function actionPerformed(ev) {
	println("Color:" + colorPicker.getSelectedItem());
}
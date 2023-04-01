/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 1. DateAndTime
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

function setup() {
	createGUI(300, 150);

	let dt = new Date();
	print(dt.toLocaleString());
	let fritz = new JSLabel(dt.toLocaleString());
	fritz.addStyle('font: 15px monospace;');
	addWidget(fritz);
}
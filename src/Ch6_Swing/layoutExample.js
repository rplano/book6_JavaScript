/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 8. LayoutExample
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function setup() {
	createGUI(300, 150);

	// showFlowLayout();
	// showGridLayout();
	showBorderLayout();
}

function showGridLayout() {
	setLayout('grid', 2);
	addWidget(new JSButton("0"));
	addWidget(new JSButton("1"));
	addWidget(new JSButton("2"));
	addWidget(new JSButton("3"));
	addWidget(new JSButton("4"));
	addWidget(new JSButton("5"));
}

function showFlowLayout() {
	setLayout('flow');
	addWidget(new JSButton("0"));
	addWidget(new JSButton("1"));
	addWidget(new JSButton("2"));
	addWidget(new JSButton("3"));
	addWidget(new JSButton("4"));
	addWidget(new JSButton("5"));
	addWidget(new JSButton("6"));
}

function showBorderLayout() {
	setLayout('border');
	addWidget(new JSButton("NORTH"), 'NORTH');
	addWidget(new JSButton("SOUTH"), 'SOUTH');
	addWidget(new JSButton("CENTER"), 'CENTER');
}
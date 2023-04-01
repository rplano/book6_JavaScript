/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Swing: 8b. LayoutPanels
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
function setup() {
	createGUI(300, 200);

	// showFlowLayout();
	showBorderLayout();
	// showGridLayout();
}

function showGridLayout() {
	setLayout('grid', 3);

	let pe = new JSPanel('flow');
	pe.setSize('100%', '100%');
	// pe.addStyle('box-sizing: border-box;');
	pe.setBackgroundColor('green');
	addWidget(pe);
	pe.add(new JSButton("X"));

	addWidget(new JSButton("0"));
	addWidget(new JSButton("1"));
	addWidget(new JSButton("2"));
	addWidget(new JSButton("3"));
	addWidget(new JSButton("4"));
	// addWidget(new JSButton("5"));
}

function showFlowLayout() {
	setLayout('flow');
	let pe = new JSPanel('flow');
	pe.setSize('30px', '100%');
	// pe.addStyle('box-sizing: border-box;');
	pe.setBackgroundColor('green');
	addWidget(pe);
	let pe2 = new JSPanel('flow');
	pe2.setSize('10px', '25%');
	pe2.setBackgroundColor('yellow');
	pe.add(pe2);
	pe2.add(new JSButton("X"));

	pe.add(new JSButton("0"));

	let pe3 = new JSPanel('flow');
	pe3.setSize('10px', '10px');
	pe3.setBackgroundColor('red');
	addWidget(pe3);

	addWidget(new JSButton("1"));
	// addWidget(new JSButton("2"));
	// addWidget(new JSButton("3"));
	// addWidget(new JSButton("4"));
	// addWidget(new JSButton("5"));
	// addWidget(new JSButton("6"));
}

function showBorderLayout() {
	setLayout('border'); // normal layout is vertically

	// first do north, center, south
	addWidget(new JSButton("NORTH"), 'NORTH');
	addWidget(new JSButton("SOUTH"), 'SOUTH');
	// addWidget(new JSButton("CENTER"), 'CENTER');

	// second do west, center, east
	let pnl = new JSPanel('border', 'horizontal');
	// pnl.setBackgroundColor('green');
	addWidget(pnl, 'CENTER');
	pnl.add(new JSButton("EAST"), 'EAST');
	pnl.add(new JSButton("WEST"), 'WEST');
	pnl.add(new JSButton("CENTER"), 'CENTER');
}

function actionPerformed(ev) {
	print("hi:" + ev.getActionCommand());
}
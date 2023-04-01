/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Stocks
 * 
 * Draws charts of S&P500 stocks.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

include("Pr8_Stocks/StockCanvas.js");
include("Pr8_Stocks/StockEntry.js");
include("Pr8_Stocks/StockDataBase.js");

let db;
let canvas;
let tfSymbol;

function setup() {
	createGUI(400, 400);
	frameRate(5);
	setLayout('border');

	buildInteractors();
	db = new StockDataBase("Pr8_Stocks/SP500_HistoricalStockDataMonthly.csv");
	// testDB('msft');

	canvas = new StockCanvas(db.getDates());
	canvas.addStyle('width: 97%');
	canvas.addStyle('height: 97%');
	addWidget(canvas, 'CENTER');
}

function draw() {
	updateJSCanvas(canvas);
}

function actionPerformed(e) {
	if (e.getActionCommand() == "Clear") {
		canvas.clear();
	} else {
		let entry = db.findEntry(tfSymbol.getText());
		// print(entry);
		if (entry != null) {
			canvas.addEntry(entry);
		}
	}
}

function buildInteractors() {
	let lbl = new JSLabel("Symbol: ");
	addWidget(lbl, 'SOUTH');

	tfSymbol = new JSTextField(10);
	addWidget(tfSymbol, 'SOUTH');

	btnGraph = new JSButton("Graph");
	addWidget(btnGraph, 'SOUTH');

	let btnClear = new JSButton("Clear");
	addWidget(btnClear, 'SOUTH');
}

// test, nflx, ibm, ebay, msft, amd, nvda, yhoo, intc, goog, aapl, amzn
function testDB(symbol) {
	let entry = db.findEntry(symbol);
	if (entry != null) {
		println(entry);
	} else {
		println("No entry found for: " + symbol);
	}
	// println(db.getDates());
}
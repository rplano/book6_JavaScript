/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: StockCanvas
 * 
 * Draws the graphs.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
class StockCanvas extends JSCanvas {

	constructor(dates) {
		super();
		this.dates = dates;
		this.entries = new ArrayList();
		this.nrOfMonths = 12;
		this.maxPrice = 300;
		this.rgen = new RandomGenerator();
	}

	clear() {
		this.entries = new ArrayList();
		this.update();
	}

	addEntry(entry) {
		this.entries.add(entry);
		this.update();
	}

	update() {
		this.removeAll();
		this.drawGrid();
		this.drawEntries();
	}

	drawGrid() {
		// print('drawGrid');
		let h = super.getHeight() - StockCanvas.Y_OFFSET;
		let stepX = Math.trunc(super.getWidth() / this.nrOfMonths);
		let nrOfSteps = 3;
		let priceStep = Math.trunc(this.maxPrice / nrOfSteps);
		let stepY = Math.trunc(h / nrOfSteps);
		// print(h+','+stepX);

		// horizontal
		let price = this.maxPrice;
		let y = 0;
		for (let i = 0; i < nrOfSteps + 1; i++) {
			let line = new GLine(stepX, y, super.getWidth(), y);
			line.setColor(Color.LIGHT_GRAY);
			this.add(line);

			let lblPrice = new GLabel("" + price);
			// lblPrice.setFont("Arial-9");
			lblPrice.setFont('Arial');
			lblPrice.setFontSize(10);
			this.add(lblPrice, 5, y + 5);

			y += stepY;
			price -= priceStep;
		}

		// vertical
		let x = stepX;
		// for (int i = 0; i < nrOfMonths; i++) {
		for (let i = this.nrOfMonths - 1; i >= 0; i--) {
			let line = new GLine(x, 0, x, h);
			line.setColor(Color.LIGHT_GRAY);
			this.add(line);

			let lblDate = new GLabel(this.dates.get(i).substring(4, 6));
			// lblDate.setFont("Arial-9");
			lblDate.setFont('Arial');
			lblDate.setFontSize(10);
			this.add(lblDate, x - 10, h + 10);

			x += stepX;
		}
	}

	drawEntries() {
		// print('drawEntries');
		let h = super.getHeight() - StockCanvas.Y_OFFSET;
		for (const entry of this.entries.values()) {
			let colr = this.rgen.nextColor();

			let symbol = entry.getSymbol();
			let lblSymbol = new GLabel(symbol);
			// lblSymbol.setFont("Arial-bold-12");
			lblSymbol.setFont('Arial');
			lblSymbol.setFontSize(12);
			lblSymbol.setColor(colr);

			let prices = entry.getPrices();
			let factor = h / this.maxPrice;
			let p0 = h - prices.get(this.nrOfMonths - 1) * factor;

			let stepX = Math.trunc(super.getWidth() / this.nrOfMonths);
			let x = stepX;
			// for (int i = 1; i < nrOfMonths; i++) {
			for (let i = this.nrOfMonths - 2; i >= 0; i--) {
				let p1 = h - prices.get(i) * factor;
				// print(p1);
				let line = new GLine(x, p0, x + stepX, p1);
				line.setColor(colr);
				this.add(line);
				x += stepX;
				p0 = p1;
			}
			this.add(lblSymbol, super.getWidth() - 35, p0);
		}
	}
}
StockCanvas.Y_OFFSET = 15;
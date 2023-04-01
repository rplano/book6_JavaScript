/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: StockEntry
 * 
 * A stock entry, representing the data of one stock symbol.<br/>
 * a,45.51,42.82,45.1936,42.0624,41.6136,42.7478,...,null,
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
class StockEntry {

	constructor(line) {
		let sVals = line.split(",");
		this.symbol = sVals[0];
		this.prices = new ArrayList();
		for (let i = 1; i < sVals.length; i++) {
			if (sVals[i] == "null") {
				this.prices.add(-1.0);
			} else {
				this.prices.add(parseFloat(sVals[i]));
			}
		}
	}

	getSymbol() {
		return this.symbol;
	}

	getPrices() {
		return this.prices;
	}

	toString() {
		let s = "StockEntry [symbol=" + this.symbol + ", prices=";
		for (let i = 0; i < 10; i++) {
			s += this.prices.get(i) + ",";
		}
		s += "...]";
		return s;
	}
}
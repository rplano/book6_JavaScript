/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: StockDataBase
 * 
 * Containing all stock data.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */
/**
 * Containing all stock data.
 */
class StockDataBase {

	constructor(fileName) {
		this.stockDB = new HashMap();
		this.dates = new ArrayList();

		// open file
		let fr = new Utils.FileReader(fileName);

		// first line contains dates:
		let line = fr.readLine();
		this.readDates(line);

		// other lines contain data:
		this.readStockPrices(fr);

		// close file
		fr.close();
	}

	findEntry(symbol) {
		return this.stockDB.get(symbol);
	}

	getDates() {
		return this.dates;
	}

	readDates(line) {
		let datesArray = line.split(",");
		for (let i = 1; i < datesArray.length; i++) {
			this.dates.add(datesArray[i]);
		}
	}

	readStockPrices(br) {
		let line;
		while (true) {
			line = br.readLine();
			if (line == null)
				break;
			let entry = new StockEntry(line);
			this.stockDB.put(entry.getSymbol(), entry);
		}
	}
}
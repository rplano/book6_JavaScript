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

include("Pr8_Stocks/StockEntry.js");
include("Pr8_Stocks/StockDataBase.js");

let db;

async function setup() {
	createConsole();

	db = new StockDataBase("Pr8_Stocks/SP500_HistoricalStockDataMonthly.csv");

	while (true) {
		let symbol = await readLine("Enter stock symbol (msft): ");
		if (symbol == "")
			break;

		let entry = db.findEntry(symbol.toLowerCase());
		if (entry != null) {
			println(entry);
		} else {
			println("No entry found for: " + symbol);
		}
	}
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: StateLookup
 * 
 * Does a lookup for US states, e.g. a search for NY returns New York.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const states = new HashMap();

async function setup() {
	createConsole();

	readStateNames("Pr8_Stocks/states.txt");
	while (true) {
		let stateInitial = await readLine("Enter state initial (e.g. NY): ");
		if (stateInitial.length == 0)
			break;
		println(states.get(stateInitial.toUpperCase()));
	}
}

function readStateNames(fileName) {
	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		if (line.length != 0) {
			readStateEntry(line);
		}
	}

	// close file
	fr.close();
}

function readStateEntry(line) {
	let comma = line.indexOf(",");
	let stateInitial = line.substring(0, comma).trim();
	let stateName = line.substring(comma + 1).trim();
	states.put(stateInitial, stateName);
}
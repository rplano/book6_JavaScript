/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Trains
 * 
 * Shows the train connections between major German cities, and allows you to
 * plan a trip. Try to get from Hamburg to Frankfurt.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

let connections = new HashMap();
let cities = new ArrayList();

async function setup() {
	createConsole(12, 32);

	loadConnectionsFromFile();

	println("Available cities are:");
	printCityList(cities);

	let nextCity = await getStartingCity("Where do you want to start: ");
	while (nextCity.length > 0) {
		listDestinations(nextCity);
		nextCity = await getStartingCity("Where do you want to go next: ");
	}

	println("Done.");
}

function listDestinations(city) {
	let destinations = connections.get(city);
	println("From " + city + " you can go to: ");
	printCityList(destinations);
}

async function getStartingCity(msg) {
	let nextCity = "";
	while (true) {
		nextCity = await readLine(msg);
		if (cities.contains(nextCity) || nextCity.length == 0)
			break;
	}
	return nextCity;
}

function printCityList(cities) {
	print("  ");
	for (const city of cities.values()) {
		print(city + ", ");
	}
	println();
}

function loadConnectionsFromFile() {
	// open file
	let fr = new Utils.FileReader("Pr8_Stocks/trains.txt");

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;
		addConnectionToMap(line);
	}

	// close file
	fr.close();
}

function addConnectionToMap(line) {
	if (line.trim().length > 0) {
		let st = new StringTokenizer(line, ">");
		let source = st.nextToken().trim();
		let destination = st.nextToken().trim();

		if (!cities.contains(source)) {
			cities.add(source);
			connections.put(source, new ArrayList());
		}
		let cits = connections.get(source);
		cits.add(destination);
	}
}
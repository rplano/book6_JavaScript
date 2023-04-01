/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: WorldMap
 * 
 * In the internet look for Latitude and Longitude of World Cities. Put them in
 * a data file. Draw the data.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SIZE = 400;
const WIDTH = SIZE;
const HEIGHT = SIZE / 2;
const CITY_SIZE = 5;
const FILE_NAME = "Pr8_Stocks/cities.txt";

function setup() {
	createCanvas(WIDTH, HEIGHT);
	frameRate(5);

	loadAndDisplayData(FILE_NAME);
}

function draw() {
	update();
}

function loadAndDisplayData(fileName) {
	// open file
	let fr = new Utils.FileReader(fileName);

	// read from file, line by line
	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		if (!line.startsWith("#")) {
			// Germany, Berlin, 52", 32', N, 13", 25', E
			let data = line.split(",");
			let country = data[0].trim();
			let name = data[1].trim();
			let lat1 = data[2].trim();
			let lat2 = data[3].trim();
			let lat3 = data[4].trim();

			let lat = parseInt(lat1);
			if (lat3.endsWith("S")) {
				lat = -lat;
			}
			let lon1 = data[5].trim();
			let lon2 = data[6].trim();
			let lon3 = data[7].trim();
			let lon = parseInt(lon1);
			if (lon3.endsWith("E")) {
				lon = -lon;
			}

			let x = (0.5 - lon / 360.0) * WIDTH;
			let y = (0.5 - lat / 180.0) * HEIGHT;
			let city = new GOval(CITY_SIZE, CITY_SIZE);
			if (country == "Germany") {
				city.setFilled(true);
				city.setColor(Color.RED);
			}
			add(city, x, y);
			// //println(name+":"+x+","+y);

		}
	}

	// close file
	fr.close();
}
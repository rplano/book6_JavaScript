/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: Adventure
 * 
 * A console program, where you walk through a house (your house) and discover
 * things
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const FILE_NAME = "Pr8_Stocks/adventure.txt";

let roomMap;

async function setup() {
	createConsole();

	loadWorld();
	// printMap();
	startAdventure("kitchen");
}

async function startAdventure(currentRoom) {
	while (true) {
		println("You are currently in " + currentRoom + ".");
		println("You can go to: " + roomMap.get(currentRoom));
		currentRoom = await readLine("Where do you want to go? ");
		if (currentRoom.length == 0)
			break;
	}
	println("Thank you for playing!");
}

function printMap() {
	for (let room of roomMap.keySet()) {
		println(room + "->" + roomMap.get(room));
	}
}

function loadWorld() {
	roomMap = new HashMap();

	let fr = new Utils.FileReader(FILE_NAME);

	while (true) {
		let line = fr.readLine();
		if (line == null)
			break;

		rooms = line.split(">");
		let from = rooms[0].trim();
		let to = rooms[1].trim();

		toRooms = roomMap.get(from);
		// print('toRooms' + toRooms);
		if (toRooms === undefined) {
			toRooms = new ArrayList();
		}
		toRooms.add(to);
		roomMap.put(from, toRooms);
	}
	fr.close();
}
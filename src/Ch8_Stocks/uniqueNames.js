/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 4. UniqueNames
 * 
 * Shows the use of an ArrayList.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole(12, 32);

	let names = new ArrayList();

	// read names
	while (true) {
		let name = await readLine("Enter new name: ");
		if (name.length == '')
			break;
		if (!names.contains(name)) {
			names.add(name);
		}
	}

	// print whole list
	println("\nUnique names:");
	for (let i = 0; i < names.size(); i++) {
		println(names.get(i));
	}
}
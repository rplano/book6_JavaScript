/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Stocks: 5. PhoneBook
 * 
 * Shows the use of a HashMap.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole(20, 32);

	let phoneBook = new HashMap();

	// add names and numbers
	println("Fill phone book with data");
	while (true) {
		name = await readLine("Enter name: ");
		if (name == '')
			break;
		let number = await readInt("Enter number: ");
		phoneBook.put(name, number);
	}

	// search phone book
	println("\nSearch phone book");
	while (true) {
		name = await readLine("Enter name to search: ");
		if (name == '')
			break;
		if (phoneBook.containsKey(name)) {
			println(phoneBook.get(name));
		} else {
			println("no entry for this name");
		}
	}

	// remove entry
	println("\nRemove entry from phone book");
	while (true) {
		name = await readLine("Enter name to remove: ");
		if (name == '')
			break;
		if (phoneBook.containsKey(name)) {
			phoneBook.remove(name);
			println(name + ' successfully removed');
		} else {
			println("no entry for this name");
		}
	}

	// print whole phone book
	println("\nAll phone book entries");
	for (const name of phoneBook.keySet()) {
		let number = phoneBook.get(name);
		println(name + ": " + number);
	}
}
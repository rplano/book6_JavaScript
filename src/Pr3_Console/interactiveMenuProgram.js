/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: InteractiveMenuProgram
 * 
 * A Console program that demonstrates how to use an interactive menu in a
 * console program.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
	createConsole();

	println("0: Exit / 1: Print message / 2: Do nothing");
	while (true) {
		let choice = await readInt("Your choice: ");
		if (choice == 0)
			break;
		switch (choice) {
			case 1:
				println("message");
				break;
			case 2:
				// do nothing
				break;
		}
	}
}
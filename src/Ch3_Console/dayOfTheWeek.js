/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 6. DayOfTheWeek
 * 
 * A simple ConsoleProgram that prints the day of the week.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  let day = await readInt("Enter day of week as int (0-6): ");
  if (day == 0) {
    println("Sunday");
  } else if (day <= 5) {
    println("Weekday");
  } else {
    println("Saturday");
  }
}
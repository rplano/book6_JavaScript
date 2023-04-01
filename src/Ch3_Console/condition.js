/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 5. Condition
 * 
 * A simple ConsoleProgram that demonstrates the if statement.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  let x = await readInt("Enter a number: ");
  if ( x > 5 ) {
      println("Number is larger than 5.");
  } else {
      println("Number is less than or equal to 5.");
  }
}
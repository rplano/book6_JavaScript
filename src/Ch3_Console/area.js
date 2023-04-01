/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 4. Area
 * 
 * A simple ConsoleProgram that calculates the area of a circle.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  const PI = 3.1415;
  println("Calculate the area of a circle.");
  let radius = await readDouble("Enter radius: ");
  let area = PI * radius * radius;
  println("The area of the circle is: " + area);
}
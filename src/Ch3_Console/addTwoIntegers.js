/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 2. AddTwoIntegers
 * 
 * A simple ConsoleProgram that asks the user for two numbers, adds them and
 * returns the result.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  println('This program adds two numbers.');
  let n1 = await readInt('Enter number one: ');
  let n2 = await readInt('Enter number two: ');
  let sum = n1 + n2;
  println('The sum is: ' + sum);
}
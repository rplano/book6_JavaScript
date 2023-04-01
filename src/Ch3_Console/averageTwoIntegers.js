/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 3. Average2Integer
 * 
 * A simple ConsoleProgram that should calculate the average of two integers.
 * Could you modify it such that it averages an arbitrary number of positive
 * integers? (sentinel)
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  println('This program averages two numbers.');
  let n1 = await readInt('Enter number one: ');
  let n2 = await readInt('Enter number two: ');
  let average = (n1 + n2) / 2;
  println('The average is: ' + average);
}
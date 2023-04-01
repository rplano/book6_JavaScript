/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 7. CounterWithWhile
 * 
 * A simple ConsoleProgram that prints the numbers from 0 to 9 using a while
 * loop.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

async function setup() {
  createConsole();

  let i = 0;
  while (i < 10) {
    print(i + ", ");
    i = i + 1;
  }
}
/**
 * MIT License (http://choosealicense.com/licenses/mit/)
 * 
 * Console: 9. CashRegister
 * 
 * You were hired to write code for a cash register. The program is supposed to
 * add the numbers the cashier enters and at the end prints the total. At first
 * you may assume that every customer buys exactly 3 items. In a second version,
 * your code should use a SENTINEL (maybe 0) to stop, so that an arbitrary
 * number of items can be purschased by the customers. Finally, make sure your
 * code will not contain any duplicate code, hence you may want to use the
 * loop-and-a-half for this.
 * 
 * @see http://www.VariationenZumThema.de/
 * @author Ralph P. Lano
 */

const SENTINEL = 0;

async function setup() {
  createConsole();

  let total = 0;
  while (true) {
    let price = await readInt("Enter price: ");
    if (price == SENTINEL)
      break;
    total += price;
  }
  println("Your total is: " + total);
}
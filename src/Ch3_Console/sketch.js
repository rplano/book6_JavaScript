
async function setup() {
  createConsole();
  // setFont('30px Arial');
  
  clear();
  print('hi ');
  println('there');

  let n = await readLine("Enter your name: ");
  println('Hello ' + n + '!');

  let nr1 = await readInt('Enter number 1: ');
  let nr2 = await readInt('Enter number 2: ');
  println('The sum is: ' + (nr1 + nr2));

  let nr3 = await readDouble('Enter double number: ');
  println('Double is: ' + nr3);

  await readLine("Hit Enter to clear...");
  clear();
}

// function draw() {
//   background(220);
//   print('hi');
// }

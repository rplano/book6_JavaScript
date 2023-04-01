async function setup() {
  createConsole();
  
  let n1 = 42;
  println(typeof (n1));
  let n2 = '42';
  println(typeof (n2));
  let n3;
  println(typeof (n3));
  let n4 = true;
  println(typeof (n4));
  let o1 = null;
  println(typeof (o1));
  let o2 = [1, 2, 3, 4];
  println(typeof (o2));
  let o3 = { name: 'Garfield', age: 42 };
  println(typeof (o3));
  let f1 = function () { };
  println(typeof (f1));
  let o4 = new GRect(50,50);
  println(typeof (o4));
  println(o4.constructor.name);
}
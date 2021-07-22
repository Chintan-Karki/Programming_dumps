function foo() {
  var a = 1;
  console.log(a);
  function bar() {
    var b = 2;
    console.log(a, b);
    function baz() {
      var c = 3;
      console.log(a, b, c);
    }
    baz(); // => 1,2,3
    // * The scope of baz() is only inside the function bar()
  }
  bar(); // => 1,2
  // * The scope of bar() is only inside the function foo()
}
foo();
console.log("\n------------Eg: 02--------------");

// Nested scope at work
function makeAdder(x) {
  function add(y) {
    return x + y;
  }
  return add;
}

let fn = makeAdder(10); // will return a function add(y) to fn, where x is already remembered
console.log(fn(10)); // This will return 20, since 10 is already passed above

// * No matter how many times fn() is called, initial x (passed while creating 'fn') is always remembered,
console.log(fn(20)); // 30
console.log(fn(30)); // 40

function sayHello(name) {
  function speak() {
    console.log("Hello, ", name);
  }
  return speak;
}

var fn_hello = sayHello("Chintan"); // This returns a fuctioon speak to fn_hello
fn_hello(); // * No matter how many times fn_hello is called, it'll always say "Hello Chintan"
fn_hello(); // * No matter how many times fn_hello is called, it'll always say "Hello Chintan"

console.log("\n------------Eg: 03--------------");
function name_fn(fname) {
  function upper(fname) {
    return fname.toUpperCase();
  }
  function sayName(lastName) {
    console.log(upper(fname), upper(lastName));
  }

  var public_api = {
    printName: sayName,
  };

  return public_api;
}

var test_name = name_fn("Chintan"); //Returns an object with a function inside
test_name.printName("Karki"); //* OUTPUT: CHINTAN KARKI

// **
// *    A very generic fibonacci algorithm that takes a parameter
// *    and returns the fibonacci number at that position
// *

const fibonacci_generic = (number) => {
  let a = 1;
  let b = 1;
  for (let i = 0; i < number - 1; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
};

console.time("fibonacci_generic");
console.log("\nGeneric", fibonacci_generic(30));
console.timeEnd("fibonacci_generic");

// **
// *    Fibonacci in a recursion
// *

const fibonacci_recursion = (n) => {
  if (n < 3) return 1;
  return fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2);
};

console.time("fibonacci_recursion");
console.log("\nRecursion", fibonacci_recursion(30));
console.timeEnd("fibonacci_recursion");

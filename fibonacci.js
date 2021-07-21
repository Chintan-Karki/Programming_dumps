const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Enter a number for to find fibonacci at that position: `,
  (number) => {
    console.time("fibonacci_generic");
    console.log("\nGeneric", fibonacci_generic(number));
    console.timeEnd("fibonacci_generic");

    console.time("fibonacci_recursion");
    console.log("\nRecursion", fibonacci_recursion(number));
    console.timeEnd("fibonacci_recursion");

    console.time("fibonacci_memoization");
    console.log("\nMemoization", fibonacci_memoization(number));
    console.timeEnd("fibonacci_memoization");

    readline.close();
  }
);

// **   ! GENERIC FIBONACCI
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

// **   ! RECURSION FIBONACCI
// *    Fibonacci in a recursion =>> Exponential O(2^n) time, Linear O(n) space
// *

const fibonacci_recursion = (n) => {
  if (n < 3) return 1;
  return fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2);
};

// **   ! MEMOIZATION FIBONACCI (yes, not "memorization") 😎
// *    Fibonacci in a memoization =>> Exponential O(n) time, Linear O(n) space
// *    Most Efficient  😎😎😎

const fibonacci_memoization = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n < 3) return 1;
  memo[n] =
    fibonacci_memoization(n - 1, memo) + fibonacci_memoization(n - 2, memo);
  return memo[n];
};

// *DEMO OUTPUT:
// Enter a number for to find fibonacci at that position: 10

// Generic 55
// fibonacci_generic: 2.065ms

// Recursion 55
// fibonacci_recursion: 0.196ms

// Memoization 55
// fibonacci_memoization: 0.162ms

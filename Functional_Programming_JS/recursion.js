//  ITERATION :-    Imperetive looping stateful
function sum_iterative(numbers){
    let total = 0;
    for (i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total
}

//  RECURSION :-    Functional self-referential stateless
function sum_recursive(numbers){
    if (numbers.length === 1){
        //* Base case || Otherwise the recursion will run infinite
        return numbers[0];
    }
    //* recursive case
    return numbers[0] + sum_recursive(numbers.slice(1))
}

console.log(sum_iterative([1,2,3,4,5,6]))
console.log(sum_recursive([1,2,3,4,5,6]))


// FACTORIAL

// ITERATIVE
function factorialIterative(number){
    let totalProduct = 1;
    while (number > 0){
        totalProduct = number * totalProduct;
        number --;
    }
    return totalProduct;
}

// Recursive
function factorialRecursive(number){
    // Base Case:
    if (number == 0) return 1;
    // Recursive case
    return number * factorialRecursive(number - 1);
}
console.time('factorialRecursive');
console.log("Recursive Factorial: ",factorialRecursive(10))
console.timeEnd('factorialRecursive');

console.time('factorialIterative');
console.log("Iterative Factorial: ",factorialIterative(10))
console.timeEnd('factorialIterative');

// Fibonacci 

// ITERATIVE
function iterativeFibo(n){
    let a =1;
    let b  = 1;
    let c = 0;
    if (n<=2) {
        c = 1;
    }else{
        for (let i=1; i < n-1; i++){
            c = a + b;
            a = b;
            b = c;
        }
    }
    return c;
}

function recursiveFibo(n){
    // BASE CASE
    if ( n <= 2 ) return 1;
    // RECURSIVE CASE
    return recursiveFibo(n-1) + recursiveFibo(n-2);
}

console.time('iterativeFibo');
console.log("Iterative Fibonacci: ",iterativeFibo(30))
console.timeEnd('iterativeFibo');

console.time('recursiveFibo');
console.log("Recursive Fibonacci: ",recursiveFibo(30)) //! Takes a lot of time
console.timeEnd('recursiveFibo');

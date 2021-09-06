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

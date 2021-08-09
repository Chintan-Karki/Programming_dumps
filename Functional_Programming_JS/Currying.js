// Currying ==> Concept by Haskell Curry
function add(a) {
	return function addAgain(b) {
		return a + b;
	};
}

console.log(add(4)(3)); //Output: 7

// Arrow Currying
const addAgain = (a) => (b) => a + b;
console.log(addAgain(2)(4)); //Output: 6

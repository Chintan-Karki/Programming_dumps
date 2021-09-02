// **
// *    The most efficient fizzbuzz algorithm 🙂🙂
// *
const fizzBuzzFunction = (inputNumber) => {
	let multipleof3 = 3;
	let multipleof5 = 5;
	let iterator = 1;
	while (iterator <= inputNumber) {
		output = "";
		if (iterator === multipleof3) {
			output += "Fizz";
			multipleof3 += 3;
		}
		if (iterator === multipleof5) {
			output += "Buzz";
			multipleof5 += 5;
		}
		output += String(iterator);
		console.log(output);
		iterator++;
	}
};

console.time("fizzBuzzFunction");

fizzBuzzFunction(30000); // <---- The function you're measuring time for

console.timeEnd("fizzBuzzFunction");
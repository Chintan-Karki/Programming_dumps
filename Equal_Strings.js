// ? Equal_Strings

//* Check to see if a string has the same amount of 'x's and 'o's.
//* The method must return a boolean and be case insensitive.
//* The string can contain any char.

//! Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str, letter1, letter2) {
	var sum = 0;
	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);
		if (letter.toUpperCase() === letter1.toUpperCase()) sum++;
		if (letter.toUpperCase() === letter2.toUpperCase()) sum--;
	}
	return sum == 0;
}

// ! TEST
console.log(XO("zzxx", "x", "o"));
console.log(XO("xooxx", "x", "o"));
console.log(XO("ooxXm", "x", "o"));
console.log(XO("zpzpzpp", "x", "o"));
console.log(XO("zzoo", "x", "o"));

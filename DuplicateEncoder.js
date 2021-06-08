// DuplicateEncoder("nABCabnpmcD");

function anotherDuplicateEncoder(str) {
  //   let theArrayOfLetters = str.split("");
  //   let anotherArray = new Array(str.length);
  //   for (let i = 0; i < str.length; i++) {
  //     let count = 0;
  //     for (let j = 0; j < str.length; j++) {
  //       if (
  //         theArrayOfLetters[i].toUpperCase() ===
  //         theArrayOfLetters[j].toUpperCase()
  //       ) {
  //         count++;
  //       }
  //     }
  //     count > 1 ? (anotherArray[i] = ")") : (anotherArray[i] = "(");
  //   }
  //   return anotherArray.join("");

  // *  Alternative Solution with the Method = lastIndexOf
  var unique = "";
  let word = str.toString().toLowerCase();
  for (var i = 0; i < word.length; i++) {
    word.lastIndexOf(word[i]) == word.indexOf(word[i])
      ? (unique += "(")
      : (unique += ")");
  }
  return unique;
}

// !TESTS
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

console.log(anotherDuplicateEncoder("din"));
console.log(anotherDuplicateEncoder("recede"));
console.log(anotherDuplicateEncoder("Success"));
console.log(anotherDuplicateEncoder("(( @"));

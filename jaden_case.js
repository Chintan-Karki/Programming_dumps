// Jaden_Case


// This is a function that simply converts a sentence to Jaden-Cased sentence.
// Which means,
// A sentence - "How can mirrors be real if our eyes aren't real"
// is converted as
// "How Can Mirrors Be Real If Our Eyes Aren't Real"

function app(str) {
  
//   Without using Map
  // let arrayText = str.split(" ");

  // let newArray = [];

  // for (let a = 0; a < arrayText.length; a++) {
  //   let tempWord = arrayText[a].toString();
  //   newArray[a] =
  //     arrayText[a].charAt(0).toString().toUpperCase() +
  //     tempWord.substring(1, tempWord.length);
  // }
  // console.log(newArray.join(" ")  
  
// Using Map
  let anotherMappedArray = str.split(" ").flatMap(function (word) {
    return word.toString().charAt(0).toUpperCase() + word.slice(1);
  });
  
  console.log(anotherMappedArray.join(" "));
}

app("How can mirrors be real if our eyes aren't real");

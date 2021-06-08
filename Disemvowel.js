// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  //   let y = "";
  //   for (let i = 0; i < str.length; i++) {
  //     let x = str.charAt(i);
  //     if (
  //       x != "A" &&
  //       x != "E" &&
  //       x != "I" &&
  //       x != "O" &&
  //       x != "U" &&
  //       x != "a" &&
  //       x != "e" &&
  //       x != "i" &&
  //       x != "o" &&
  //       x != "u"
  //     ) {
  //       y = y.concat(x);
  //     }
  //   }
  return str.replace(/[aeiou]/gi, "");
}
console.log(disemvowel("soindfsIpOooOOOOC"));

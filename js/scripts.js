// var vowelReplacer = function(str) {
//   var newstr = str.replace(/[aeiou]/gi, "-");
//   return newstr;
// };
//
// var numberCounter = function(number1, number2) {
// var numbers= ""
//   for (var i = 0; i <= number1; i += number2) {
//     numbers +=i;
//   };
//   var resultnum = numbers.slice(1);
//   return resultnum;
// };
var vowelReplacer = function(str) {
  var vowels = ["a", "e", "i", "o" , "u"];

  vowels.forEach(function(vowel) {
    //str = str.replace(vowel, "-");
    str = str.split(vowel).join("-");
    console.log(str)
  })
  return str;
};

//
// var vowelReplacer = function(str) {
//   var letters = str.split("");
//   var vowels = ["a", "e", "i", "o", "u"];
//   var hasvowels = "";
//
//   letters.forEach(function(letter) {
//
//   });
//   return hasvowels;
// };

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//   //letter = "-";
//   var position = letters.indexOf(letter);
//   console.log(position)
//   var position2 = letters[position + 1];
//   console.log(position2)
//   var newarray = letters.splice(position, position2, "-");
// }
// else if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
//   hasvowels = "found the vowels";
// }
// else {
//   hasvowels = "ugh";
// }

var vowelReplacer = function(str) {
  var newstr = str.replace(/[aeiou]/gi, "-");   return newstr;
  };

var vowelReplacer = function(str) {
  var vowels = ["a", "e", "i", "o" , "u"];

  vowels.forEach(function(vowel) {
    str = str.split(vowel).join("-");
    console.log(str)
  })
  return str;
};

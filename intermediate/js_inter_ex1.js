/*Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/


function ucFirstLetters(string) {
    var words = string.split(" ");  // Split the string into an array of words
    var ucFirstLetters = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);  // Capitalize the first letter of each word
    });
    var capitalizedString = ucFirstLetters.join(" ");  // Join the words back into a string
    return capitalizedString;
  }
  console.log(ucFirstLetters("hello world!"));
  console.log(ucFirstLetters("los angeles"));
  console.log(ucFirstLetters("i used chatgpt for help"));
  console.log(ucFirstLetters("i also used stackoverflow for help"));
  console.log(ucFirstLetters("javaScript is hard but fun"));
  

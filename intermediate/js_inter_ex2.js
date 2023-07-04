/*2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (...) added to the end if it was too long, or the original text otherwise.
*/


function truncate(str, max) {
    if (str.length <= max) {
      return str;
    } else {
        return str.slice(0, max) + "...";
    }
    
  }
//b) Write another variant of the truncate function that uses a conditional operator.
function words(str1, max1){
   const newWords =  (str1.length <= max1) ? str1 : str1.slice(0, max1) + "...";
   return newWords;
}
  
console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate('This is fun', 25))

console.log(words('Write another variant of the truncate function that uses a conditional operator' , 30))
//What are the results of these expressions? (answer first, then use console.log() to check)

 
console.log("" + 1 + 0); // 10 - this is a string so it concatenates the empty quotes with 1 and 0
console.log("" - 1 + 0); //-1 - this is not a string, so the program will render this a mathematical equation

console.log(true + false); //false --- 
console.log(!true) //true

console.log(6 / "3"); //2 This is also a mathematical equation because of the division sign
console.log("2" * "3"); // 6 - this is a mathematical equation because of  * sign
console.log(4 + 5 + "px"); //9px - the first part is a mathematical equation, adding 4 to 5 and then concatenating the result to px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2

console.log("4px" - 2); //NAN - Because (-) is math, so the program witll try to render it as a mathematical equation, but 4px is not a number, so the result will be NAN
console.log(" -9 " + 5); // -95
console.log(" -9 " - 5); //-14
console.log(null + 1); // null
console.log(undefined + 1); // undefined
console.log(undefined == null); //false
console.log(undefined === null); //false
console.log(" \t \n" - 2); //NAN

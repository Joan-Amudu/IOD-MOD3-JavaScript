//Which of the below are not giving the right answer? 
//Why are they not correct? How can we fix them?

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four
console.log(addition); // 34 - three and four are strings so the result is 34; 

//to correct it with the intention of adding three to four we can use:

let add = parseInt(three) + parseInt(four); // this will give us 7.
console.log(add);

let multiplication = three * four
console.log(multiplication); //12
let division = three / four
console.log(division); //0.75
let subtraction = three - four
console.log(subtraction);// -1
let lessThan1 = three < four
console.log(lessThan1); //True
let lessThan2 = thirty < four
console.log(lessThan2); // True
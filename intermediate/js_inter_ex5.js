/*
 Decimal number operations in JavaScript can lead to unexpected results, as in the
following:
 */

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

/**
 We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:
 */

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

//a) Explain why the above code returns the wrong answer

//Because fixedTwenty and fixedTen are strings

/*
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.*/

function currencyAddition(float1, float2){
    var decimalNumber = parseFloat(float1) + parseFloat(float2);
  return parseFloat(decimalNumber.toFixed(2));

}
var total = currencyAddition(10.25, 5.75);
console.log(total.toFixed(2)); 
console.log(0.3 == currencyAddition(0.1, 0.2)) // true

/*
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
*/

function currencyOperation(float1, float2, operation){
    var total1;
  switch(operation){
    case '+':
        total1 = parseFloat(float1) + parseFloat(float2);
        break;
    case '-':
        total1 = parseFloat(float1) - parseFloat(float2);
        break;
    case '/':
        total1 = parseFloat(float1) / parseFloat(float2);
        break;
    case '*':
        total1 = parseFloat(float1) * parseFloat(float2);
        break;
    default:
        return null;
        
  }
  return parseFloat(total1.toFixed(2));

}
var newTotal = currencyOperation(1.25, 3.40, '+');
console.log(newTotal);
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true


/*
d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:
*/

function currencyOperationExtended(float1, float2, operation, numDecimals) {
    var total2;
  
    switch (operation) {
      case '+':
        total2 = float1 + float2;
        break;
      case '-':
        total2 = float1 - float2;
        break;
      case '/':
        total2 = float1 / float2;
        break;
      case '*':
        total2 = float1 * float2;
        break;
      default:
        return null;
    }
  
    var factor = Math.pow(10, numDecimals); // from ChatGPT
    return parseFloat((Math.round(total2 * factor) / factor).toFixed(numDecimals));
  }
  var result = currencyOperationExtended(10.256, 5.759, '*', 2);
  console.log(result);
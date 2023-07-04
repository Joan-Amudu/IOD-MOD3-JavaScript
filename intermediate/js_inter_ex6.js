/**
 Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.
 */

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
    const duplicates = [];
  
    for (let i = 0; i < duplicatesArray.length; i++) {
        //my original code was if (duplicates.duplicatesArray != duplicates, but that was not giving results as expected
      if (!duplicates.includes(duplicatesArray[i])) { //from stackoverflow. I understand what this does but still have questions
        duplicates.push(duplicatesArray[i]);// from stackoverflow
      }
    }
  
    return duplicates;
  }
  
/*
Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
*/

const animals = ['Tiger', 'Giraffe'];

//a) Add 2 new values to the end
animals.push('Cat', 'Dog');

//b) Add 2 new values to the beginning
animals.unshift('Pig' , 'Donkey');

//c) Sort the values alphabetically
animals.sort();
console.log(animals);

//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
     // I got this solution from various resources: google, stackoverflow, w3school
    const replaceMiddle = Math.floor(animals.length / 2);       
    if (animals.length % 2 === 0) {      
      animals.splice(replaceMiddle - 1, 2, newValue);
    } else {      
      animals.splice(replaceMiddle, 1, newValue);
    }
  }
  replaceMiddleAnimal('Elephant')
  console.log('New list:' , animals);

/**
 The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.
 */

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

/**





f) Print out the full list of names in the combined phone book
 */

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
//const phoneBookDEF = new Map();

//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const phoneBookDEF = new Map([
    ['Danielle','0426875977'],
    ['Emma','0414640986'],
    ['Francis','0412643519'],
]);

//c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '0412345678')


//d) Write a function printPhoneBook(contacts) that prints the names and phone
//numbers in the given Map

//This was hard, I used google and stackoverflow and chatGPT and still not getting intended results
function printPhoneBook(contacts) {
    for (let [name, phoneNumber] of contacts) {
      console.log(`${name}: ${phoneNumber}`);
    }
  }
  
//e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map();

for (let [name, phoneNumber] of phoneBookABC) {
  phoneBook.set(name, phoneNumber);
}

for (let [name, phoneNumber] of phoneBookDEF) {
  phoneBook.set(name, phoneNumber);
}

for (let name of phoneBook.keys()) {
    console.log(name);
  }
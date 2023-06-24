/**
The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for...in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.
 */
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const melbourne = {
    name: 'Melbourne',
    population: 5_078_000,
    state: 'VIC',
    founded: '30 August 1835',
    timezone: 'Australia/Sydney'
}
//console.log(sydney);
//console.log(melbourne);
for (let key in sydney){
    console.log(key+": " +sydney[key]);
}
console.log("---------------");

for (let key in melbourne){
    console.log(key+": " +melbourne[key]);
}

class City {
    constructor(name, state) {
        this.name = name;
        this.population = population;
        this.state = state;
        this.founded = founded;
        this.timezone = timezone;
    }
}
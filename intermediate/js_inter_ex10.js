/**
 * 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:
 */

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');


const currentHour = today.getHours();
const currentMinute = today.getMinutes();
const currentSecond = today.getSeconds();

let minutesPassed = (currentHour * 60) + currentMinute;
let secondsPassed = (currentHour * 3600) + (currentHour * 60) + currentSecond;
//a) Print the total number of minutes that have passed so far today
console.log('Total number of minutes so far today ' + minutesPassed);
//b) Print the total number of seconds that have passed so far today
console.log('Total number of seconds so far today ' + secondsPassed);

//c) Calculate and print your age as: 'I am x years, y months and z days old'
const myAge = new Date('19 June 1987');
const year = (today.getFullYear() - myAge.getFullYear());
const month = (today.getMonth() - myAge.getMonth());
const day = (today.getDate() - myAge.getDate());

console.log(`I am ${year} years, ${month} months and ${day} days old`)

/*
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.
 */

function daysInBetween(date1, date2){
    //Miliseconds in a day
    const miliDay = (1000 * 60 * 60 * 24);
   
    date1 = firstDate.getTime()
    date2 = nextDate.getTime()
    
    newDate = (date2 -date1)/miliDay;
    return newDate;    
    
}
const firstDate = new Date('12 January 1986')
const nextDate = new Date('12 January 1987')

const totalDays = daysInBetween(firstDate, nextDate);
console.log(`The amount of days between date1 and date2 is ${totalDays}`)

/*Resources used for part D: 
https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
*/



/*
 Given the below salaries object, perform the following tasks.
 */

 let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

/*
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary
 */


function sumSalaries(salaries){
    let total = 0;
    for (let key in salaries){        
        total += salaries[key];

    }
    return total;
}
let totalSalaries = sumSalaries(salaries);
console.log("Total Salaries:", totalSalaries);

/* Part B was abit challenging. I had most of the code correct, except I was undefined returned for the name.
 so I used stack overflow and chatGpt, which helped line 35 38 and 39 */
function topEarner(salaries){
    let name = " ";
    let highSalary = 0;  
    for (let key in salaries){
        if(salaries[key] > highSalary){
            highSalary = salaries[key];
            name = key;
        }
    }
    return name;
}

let highestSalary = topEarner(salaries);
console.log("The person with the highest salary is " + highestSalary)

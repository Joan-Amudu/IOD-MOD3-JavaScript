/*
1.
makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
*/

function makeCounter() {
    let currentCount = 0;
    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter();
let counter2 = makeCounter();
counter1(); // 1
counter1(); // 2
counter2();
counter2();

//b) Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0)

function makeCounter(startFrom) {
    let currentCount = startFrom || 0;
    return function() {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}
let counter3 = makeCounter(3);
let counter4 = makeCounter(6);
counter3(); // 1
counter3(); // 2
counter4();
counter4();

/*
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.
*/

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom || 0;
    incrementBy = incrementBy || 1;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

let counter5 = makeCounter(0, 2);
counter5(); 
counter5();
counter5();
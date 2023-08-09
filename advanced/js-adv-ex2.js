/*
2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
it will print #4 frist because it is not delayed, then #3 because it has 0 milliseconds delay, then #2, then #1
*/

function delayMsg(msg){
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//b) Rewrite delayMsg as an arrow function
delayMsg=(msg) => console.log(`This message will be printed after a delay: ${msg}`)

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all.
fithMessage = setTimeout(delayMsg, 200, '#5: Delayed by 200ms');
clearTimeout(fithMessage);



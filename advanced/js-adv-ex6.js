//Use the Function prototype to add a new delay(ms) function to all functions, which can
//be used to delay the call to that function by ms milliseconds.

/*
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters

b) Use apply to improve your solution so that delayed functions can take any number of parameters
*/

Function.prototype.delay = function (ms) {
    const originalFunction = this;
    return function (...args) {
        setTimeout(() => originalFunction.apply(null, args), ms);
    };
};

//c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//delay prototype function still works.

function multiply(a, b, c, d) {
    console.log(a * b * c * d);
}
  
multiply.delay(1000)(1, 2, 3, 4);
  

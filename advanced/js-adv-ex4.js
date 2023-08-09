
function printFibonacci(limit) {
    let current = 1;
    let previous = 0;
    let count = 0;
  
    const intervalId = setInterval(() => {
      const next = current + previous;
      console.log(next);
  
      previous = current;
      current = next;
  
      count++;
      if (count === limit) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  // Example: Print first 10 numbers in the Fibonacci sequence
  printFibonacci(10);

  function printFibonacciTimeouts(limit) {
    let current = 1;
    let previous = 0;
    let count = 0;
  
    function printNext() {
      const next = current + previous;
      console.log(next);
  
      previous = current;
      current = next;
  
      count++;
      if (count < limit) {
        setTimeout(printNext, 1000);
      }
    }
  
    printNext();
  }
  
  // Example: Print first 10 numbers in the Fibonacci sequence
  printFibonacciTimeouts(10);
  
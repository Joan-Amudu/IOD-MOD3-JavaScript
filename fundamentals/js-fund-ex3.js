//Which of the following console.log messages will print? Why?


    
if (0) console.log('#1 zero is true') // #1 zero is true 
if ("0") console.log('#2 zero is true')// #2 zero is true  
if (null) console.log('null is true')// null is true
if (-1) console.log('negative is true')// negative is true
if (1) console.log('positive is true')// postivive is true

    //because the if statement only have one value to conmpare with, 
    //the console will print each respective message as it is

    //After checking results, I now realise why it did not print the messages for 0 and null.
    //it is because they are false - something like that.

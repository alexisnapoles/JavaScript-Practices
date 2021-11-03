// assigning of values to initialize execution for the fibonacci sequence.
let initialNumber = 0;
let nextNumber = 1;
// we will ask the user to input a limit or the value we want to get from the fibonacci sequence
let askUser = prompt('Enter a number');

// in this part the initalNumber will take on the value of 0, while askUser will take on the value of the user input. So while loop will then check whether the condition is either True or False, if it is true then it will execute the scope within the loop.
while (initialNumber <= askUser) {
    // first execution will get the sum of variables initialNumber and nextNumber, 0 and 1 respectively. 
    sum = initialNumber + nextNumber;
    // after getting the sum, we will then reassing initialNumber as the nextNumber and
    initialNumber = nextNumber;
    // the sum will now then be the nextNumber
    nextNumber = sum;
    // we will have to bring forth the initialNumber or output initalNumber so to continue the loop until condition is False.
    console.log(initialNumber);
}

// needs to work on "how to install npm package? hmm.. via vsc terminal" because terminal keeps on showing a referenceError: prompt is not defined. ugh. otherwise it's pretty much working so to speak.
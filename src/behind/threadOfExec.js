/* ***************************************
 *************** Thread of Execution ***********
 # JavaScript is single-threaded language
    which means each items executes line by line
 ******************************************/
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// Starting form 1 each line will execute one after another: 1, 2, 3, 4
// None of them can execute before finishing it's previous value executing.
// A better example:
const timF = () => {
  /*
{When you execute both lines of code simultaneously, the value logged will be 0 because start is set to the current time at that moment. As time passes, Date.now() continues to increase, while start remains fixed. Eventually, after approximately 5 seconds, the difference between Date.now() and start will exceed 5000 milliseconds, and you'll see a value greater than 5000 logged.} 
*/
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // Do nothing and wait 5 seconds
  }
  return "Started"; // after 5 seconds return "started"
};

console.log("starting..."); // this will execute first
console.log(timF()); // this will be a barrier of 5 seconds
console.log("finishing......"); // this will not execute unless 5 seconds are over

/* 
Now the thread has 2 things
    1) Call Stack
    2) Memory Heap

Function Calls: When a function is called, a new execution context for that function is created.
This execution context includes the function's variables, parameters, and any inner functions it defines.
This context is then pushed onto the call stack.

Execution Context: The execution context contains everything necessary for the function's execution, including variable declarations, parameter values, and references to outer lexical environments (for scoping). It's essentially a snapshot of the state of the function at the moment it's called.

Call Stack: The call stack keeps track of the order in which functions are called and their respective execution contexts. When a function is called, its execution context is pushed onto the call stack. When the function returns, its execution context is popped off the stack.

So, while the call stack primarily manages the order of function calls, each entry in the call stack represents an execution context containing all the information needed to execute the corresponding function. This includes variable declarations, parameter values, and other contextual information necessary for execution.
*/

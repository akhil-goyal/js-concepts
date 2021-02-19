// Execution Context is an abstract concept that holds information
// about the environment within which the current code is being executed.

// Everything in JS happens inside an 'Execution Context'.
// When we run a JS program, an Execution Context is created.

// There are 2 components of Execution Context - 

// 1. Variable environment/Memory Component : 

// - This is the place where all the variables & functions
//   are stored as key-value pairs.
// - In this phase, JS will allocate memory to all variables & functions.
// - For variables, the value would be undefined & for the functions, the value 
//   would be whole function.

// 2. Thread Of Execution/Code Component : 
// - Here, the code is executed one line at a time. 
// - This is the place, where JS will run the code.
// - When a function is encountered, a new Execution Context is created.
// - When the return keyword is encountered, the control is restored back
//   to the main Execution Context from where it was left off. Once it is returned,
//   the mini execution context is destroyed immediately.
// - After the code execution is finished, the main Execution Context is also 
//   destroyed by JS.

// *[
//     JS manages multiple Execution Context with the help of call stack. Whenever a new
//     program is added, a global context is pushed to the stack. If there's a creation of 
//     further contexts, these are posted on top of the global context. When these small contexts
//     are executed, these are popped off from the stack. Once the whole program is executed, the
//     global execution context is also popped off.
// ]

// *[
//     Call stack maintains the order of execution of execution contexts.
//     Call stack is also known as Execution Context Stack, Control Stack, Runtime Stack, Machine Stack.
// ]
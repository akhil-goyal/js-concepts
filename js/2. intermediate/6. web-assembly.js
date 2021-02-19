// WEB ASSSEMBLY

// Standard, binary & executable format.

// # Call Stack : Uses LIFO, Use to add function calls in stack in order to maintain a flow of execution.

// # Memory Heap : It is used to store the variables, function, etcetra. Memory is allocated.


// GARBAGE COLLECTION

// It is referred to as the removal of unuseful data, from the memory heap. It uses a 
// MARK & SWEEP algorithm.


// SINGLE THREADED

// - JS is single threaded.
// - It is evident from the fact that JS only has one call stack.
// - It is synchronous.


// EXTRAS 

// *[
//     Node.js is a JS runtime built on google chrome's V8 JS engine.
//     Browser's window object is Node's global object.
// ]

// Avoid using the following methods & keywords. These are not good for optimization.

// - eval()        - delete
// - arguments     - Hidden classes
// - for in        - Inline caching
// - with

// *[
//     'use strict' is used to test the JS to implement the rules strictly. For example, it 
//     does not let the usage of undeclared variables, which is otherwise okay for JS to do.
// ]
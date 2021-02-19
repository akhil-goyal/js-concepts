// JAVASCRIPT ENGINE

// - It converts our code to machine understandable code.
// - It was first developed by the developer of JS itself, i.e, Brendon Eich.
// - Anybody can create a JS engine by keeping basic JS rules in mind.
// - To avoid the clashes between various JS engines developed by multiple developers,
// the JS engines were brought under the rules & regulations of ECMA Script.
// - After the ECMA Script came into practice, various browsers developed their own JS
// engine in order to provide more functionalities & features/optimizations.
// - For Example, google developed V8 engine, firefox developed SpiderMonkey, Internet Explorer
// developed Chakra.
// - JS engine is written in C/C++, a low level language.


// WORKING OF JS ENGINE

// JS FILE ==> PARSER ==> AST (Abstract Syntax Tree) ==> INTERPRETER ==> PROFILER ==> COMPILER ==> OPTIMIZED CODE 

// - A JS file is supplied to the engine.
// - Parser checks for the correctness of code syntax.
// - AST represents the structure of program code. It is usually the result of
// syntax analysis phase of a compiler.
// - Interpreter : It reads a program line by line whereas, the compiler reads the whole
// program at once, at a fly.
// - The interpreter reads a program line by line and turns the code into bycode, which is then
// further converted into machine understandable code.
// - AudioScheduledSourceNode, the compiler & profiler are used to improve the performance & 
// optimization of the code.

// *[
//     To leverage the power of both the interpreter & compiler, JIT(Just In Time) compiler is being
//     used in modern JS engines to improve the performance & optimization of code execution.
// ]
// Datatypes

// 1. Primitive
// 2. Non-Primitive

// *[
//     JS has dynamic data typing. Data types
//     are automatically assigned to the variables.
// ]

// 1. Primitive : It is the data that is not an object 
// and has no methods.

// + Number
// + String
// + Boolean
// + Undefined
// + Null
// + Symbol
// + bigInt (Used for denoting whole numbers longer than 2^53-1).

// *[
//     Primitive value can be replaced but not altered directly.
// ]

// 2. Non - Primitive : It is referred to mutable data type. The value
// of an object can be changed after created.

// + Object
// + Array
// + Regular Expressions
// + Function

// Differences between primitive & non-primitive.

// Primitive : Immutable | Stored by value
// Non-Primitive : Mutable | Stored by reference

// *[
//     typeof(null) would result into an object. Consider this as a bug.
//     This has left to be remained like this so that the existing code 
//     of developers does not get dysfunctional. 
// ]

// # Falsey Values

// + False      + 0 (zero)
// + ""         + null
// + undefined  + NaN (Not a Number)

// Null : It is an empty non existent value that must be assigned.
// Undefined : It means a variable has been declared but not defined.

// *[
    // Null looosely equals undefined, i.e, null == undefined. It is becauase in JS,
    // double equals tests for loose equality & perform type coercion, which
    // means that we compare two values after converting them to a common type.
// ]

// # Symbol

// - Introduced in ES6
// - Once it is created, its value is kept private & for internal use.
// - Symbol can be created by calling a global factory function, const Symbol = Symbol().
// - Symbols are often used to identify object properties.
// - Helps in avoiding clashes with already existing properties.
// - They can be accessed with Object.getOwnPropertySymbols() method.

// # BigInt

// - In JS, Number type can not safely represent integer values larger than 2^53. It forced
// developers to use inefficient workarounds. So, BigInt was introduced to fix it.
// - BigInt will make sure that integer overflows is no longer an issue.BigInt
// - To make a number BigInt, postfix it with n.
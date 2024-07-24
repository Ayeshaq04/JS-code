// KIM => JS is a dynamic lang

// Primitive Data Types [07]

/* 
String, Number, Boolean, null, undefined, BigInt, Symbol 
(used when you want to make a value unique) 
*/

// Example of some primitive data types
const score = 100; // Number
const scoreVal = 100.9; // Number
let userName; // undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Symbol

// Symbols are always unique, even if they have the same description
console.log(id === anotherId); // false

const bigNum = 34374208943498392n; // BigInt

// Non-Primitive Data Types [Reference]

/* Array, Objects, Functions */ 

const heros = ["Shaktiman", "Spiderman", "Batman"];
let hero = heros[0];

console.log(hero);

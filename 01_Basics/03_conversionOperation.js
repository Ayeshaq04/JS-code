let score = '37';

console.log(typeof score);

let valueInNum = Number(score) // The first letter must be in Caps.
console.log(typeof valueInNum);
console.log(valueInNum);

// "37" => 37
// "37ab" => Nan [Not a Number]
// null => 0
// undefined => NaN
// boolean value: True-1; False-0
// "" => false
// "ayesha" => true

let someNumber = 77;
let stringNum = String(someNumber);
console.log(stringNum);
console.log(typeof stringNum);



// ****** Operations ****** //

/* Prefix 
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
*/

/*Postfix 
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
*/

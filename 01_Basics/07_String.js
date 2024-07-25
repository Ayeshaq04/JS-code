const myName = new String('Ayeshaa')

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.indexOf('y'));

const newString = myName.substring(3,7)
console.log(newString); //here we can't use -ve values.

console.log(`Hello my name is ${myName}!`) // we should start using this form instead of the [""]

const newStr = myName.slice(-3,7)
console.log(newStr);
// here in slice, we can also give -ve values.

const newStringOne = "   ayesha  "
console.log(newStringOne);
console.log(newStringOne.trim());

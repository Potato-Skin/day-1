console.log("HELLO");

// var
// let
// const

// DATA TYPES:
// String, Number, Array, Object, Boolean, Function, NaN, Undefined, Null, Symbol
var banana;
banana = "yellow, sometimes green, kinda black if rotten, fruit";
// variable declaration
var something = 1;
console.log(typeof something);
// variable reassignment
something = "2";
console.log(typeof something);

console.log("BREAKING?");

console.log("a set of 'characters' that are between `quotation` marks");
console.log("single quotes");
console.log(`back ticks`);

123.1567654789456876545;

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);

// FROM NOW ON, WILL NO LONGER USE `var`

let myName = "andre";
let myLocation = "lisbon";
let age = "26";
let favoriteDish = "water";

console.log(
  "Hello, my name is " +
    myName +
    " I am " +
    age +
    " years old, I am from " +
    myLocation +
    " and my favorite dish is " +
    favoriteDish
);

console.log(`Hello, my name is ${myName}`);
// age, location, favorite dish
// Hello, my name is andre, I am 26, I am from Lisbon and my favorite dish is water
console.clear();
const myAge = "26";

console.log(myAge + 5);
console.log(5 + myAge);
console.log(myAge - 5);
console.log(5 + undefined);
console.log(typeof (5 + undefined));

const name = "Blessing";
const language = "Javascript";
const channel = "Codevolution";

const total = 0;
const PI = 3.14;

//boolean
const isPrimaryNumber = true;
const isNewUser = false;

let result;
console.log(result);

const res = null;

const data = null;

const person = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 30,
};

//To access a property in the object above
console.log(person.firstName);

const oddNumbers = [1, 3, 5, 7, 9];
//To access a property in the array above
console.log(oddNumbers[3]);

let a = 10;
a = "blessing";
a = true;
console.log(a);

//Note that the symbols are the operators
let x = 10;
let y = 5;
//x % y are referred to as operands
console.log(x % y);
console.log(++x);
console.log(--y);

console.log(x == y);
//checks if x and y are equal

console.log(x != y);
//x not equal to y

console.log(x === y);

console.log(x !== y);

console.log(x > y);

console.log(y <= x);

/*const isValidNumber = x > 8 && 8 > y;
//&& is called "logical and" operator
//it returns true only if both operands are true and false is one of them isn't
console.log(isValidNumber);*/

const isValidNumber =  x < 20|| 8 > y
//|| is called "logical or" operator
//it returns true only if either of the operands are true, else it will return false
console.log(isValidNumber)

const isValid= true
//! is a "not" operator

console.log(!isValid)

console.log('Bruce ' + 'Wayne')

/*ternary operator takes three operands:
a condition followed by a question mark, then an expression to execute 
if the condition is truthy followed by the colon, and finally the expression
to execute if the condition is falsy.*/
const isEven = 10 % 2 === 0 ? 'Number is even': 'Number is odd'
console.log(isEven)
 
//how to convert a type to another
//implicitly
console.log(true + '3')
console.log('4' -'2')
 



























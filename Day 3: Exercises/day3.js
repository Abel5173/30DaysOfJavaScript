//30 Days Of JavaScript: Booleans, Operators, Date
//Booleans
let isLightOn = true
let israining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3
let falseValue = 4 < 3

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// && ampersand operator example

// const checkOp = 4 > 3 && 10 > 5         // true && true -> true
// const checkOp = 4 > 3 && 10 < 5         // true && false -> false
// const checkOp = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const checkOp = 4 > 3 || 10 > 5         // true  || true -> true
// const checkOp = 4 > 3 || 10 < 5         // true  || false -> true
// const checkOp = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

// let checkOp = 4 > 3                     // true
// let checkOp = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

//Increment Operator
//Pre-increment
let count1 = 0
console.log(++count1)        // 1
console.log(count1)          // 1
//Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

//Decrement Operator
//1.Pre-decrement
let count2 = 0
console.log(--count2) // -1
console.log(count2)  // -1
//2.Post-decrement
let count3 = 0
console.log(count3--) // 0
console.log(count3)  // -1

//Ternary Operators
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

//Window Methods
//Window alert() method
message = 'Welcome to 30DaysOfJavaScript'
alert(message)
//Window prompt() method
prompt('required text', 'optional text')
let number = prompt('Enter number', 'number goes here')
console.log(number)
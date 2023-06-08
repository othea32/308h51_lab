// 1.
function maxOfTwoNumbers(x, y) {
 if (x >= y) {
   return x;
 } else {
   return y;
 }

 // or more "elegantly" using the fantastic ternary expression!
 // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = function(x, y, z) {
 if (x >= y && x >= z) {
  return x;
 } else if (y >= x && y >= z) {
  return y;
 } else {
  return z;
 }
}

console.log(maxOfThree(2, 4, 6));

// 3.
function isCharAvowel(character) {
 if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  return true;
 } else {
  return false;
 }
}

console.log(isCharAvowel("c"));

// 4.
const sumArray = function(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {
  sum += array[i];
 }
 return sum;
}

console.log(sumArray([1, 2, 3, 4]));

// 5.
function multiplyArray(array) {
 let product = 1;
 for (let i = 0; i < array.length; i++) {
  product = product * array[i];
 }
 return product;
}

console.log(multiplyArray([5, 6, 7, 8]));

// 6.
const numArgs = function() {
 return arguments.length;
}

console.log(numArgs(9, 10, 11, 12, 13));

// 7.
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("rockstar"));




// 8.
const longestStringInArray = function(array) {
  let longestString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString.length;
  }

console.log(longestStringInArray(["hello", "goodbye", "good day"]));

// 9.
function stringsLongerThan(array, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > number) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(stringsLongerThan(["hello", "goodbye", "good day"], 7));

// 10.
// Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

const addList = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addList(1, 2, 3, 4, 5));


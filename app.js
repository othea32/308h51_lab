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



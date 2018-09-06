/* jshint esversion: 6 */

/* Completed by Dominic M. - in this exercise I tried to emphasize brief, logial solutions,
emphasizing thoughtful use of ternary statements and refactoring, whenever possible */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  return n < 0 ? null : n > 1 ? n * factorial(n - 1) : 1;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var myArray = array.slice(); //use array.slice to make copy
  return myArray.length === 0 ? 0 : myArray.length === 1 ? myArray[0] : myArray.pop() + sum(myArray);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   return array.reduce((acc, val) => { return acc + (Array.isArray(val) ? arraySum(val) : val); }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  return n > 0 ? n === 0 ? true : n === 1 ? false : isEven(n - 2) : n === 0 ? true : n === 1 ? false : isEven(n + 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  return n > 0 ? n === 0 ? 0 : (n - 1) + sumBelow(n - 1) : n === 0 ? 0 : (n + 1) + sumBelow(n + 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (y - x === 1 || y - x === 0) return [];
  y = y > x ? y - 1 : y + 1;
  return y === x ? [] : range(x, y).concat(y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  return exp > 0 ? exp === 0 ? 1 : base * exponent(base, exp - 1) : exp === 0 ? 1 : exponent(base, exp + 1)/base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  return n === 1 ? true : n % 2 != 0 || n === 0 ? false : powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  return (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  return string.length < 2 ? true : (string.charAt(0).toLowerCase() === string.charAt(string.length - 1).toLowerCase()) ? palindrome(string.slice(1, string.length - 1)) : false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  return y === 0 ? NaN : x === y ? 0 : x < 0 ? -modulo(-x, y) : y < 0 ? modulo(x, -y) : y < x ? modulo(x - y, y) : x;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  return x < y ? multiply(y, x) : y < 0 ? -multiply(x, -y) : y !== 0 ? x + multiply(x, y - 1) : 0;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (x < 0 && y > 0 && -x < y || x < -y) return 0;
  if (x > 0 && y > 0 && x < y) return 0;
  if (y === 0) return NaN;
  if (x === 0) return 0;
  else if (x < y) return 0;
  else if (y < 0 || x < 0) return -1 + (divide(x + y, y));
  else return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  return x < 0 || y < 0 ? null : x % y === 0 ? y : gcd(y, x % y);
};

// 15. Wr a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  return str1 === '' && str2 === '' ? true : str1.charAt(0) !== str2.charAt(0) ? false : compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  return str.length === 1 ? [str] : [str.charAt(0)].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  return !array.length ? array : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return length === 0 ? [] : [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 0) return result;
  value = n % 15 === 0 ? 'FizzBuzz' : (n % 5 === 0) ? 'Buzz' : (n % 3 === 0) ? 'Fizz' : n.toString();
  result.push(value);
  return fizzBuzz(n - 1).concat(result);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = array[0] === value ? 1 : 0;
  return (!array.length) ? 0 : count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// Call map() using the array [ ‘a’, ‘b’, ‘c’ ]
var rMap= function(array, callback) {
  return !array.length ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {
//'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    var item = obj[k];
    if (k === key) count++;
    if (typeof item === 'object') count += countKeysInObj(item, key);
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    var item = obj[key];
    if (item === value) count ++;
    if (typeof item === 'object') count += countValuesInObj(item, value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    // base case: if key === oldKey, replace and delete
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
    // recursive case: if obj[key] is an object, then obj[key] = replaceKeys(...)
    if (typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var result = [];
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  return [0].concat(fibonacci(n - 2) + fibonacci(n - 1));
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  return n < 0 ? null : n === 0 ? 0 : n === 1 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  return !array.length ? [] : [(array[0]).toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1); }
  return !array.length ? [] : [(array[0]).capitalize()].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    // base case: if obj[key] % 2 === 0, then sum += 1
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
    // recursive case: if obj[key] is an object, then nestedEvenSum(obj[key])
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  return array.length === 1 ? [array[0].concat([aug])] : [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1) return array.shift();
  if (array[0] === 0 && array[1] === 0) return minimizeZeroes(array.slice(1));
  return [array.shift()].concat(minimizeZeroes(array));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length===2) return (array[0]) ? Math.abs(array[1]) : Math.abs(array[1])*-1;
  if (typeof array[0] !== 'boolean') array.unshift(true);
  if (array[0]) {
    array.splice(2,0,false);
    return [Math.abs(array[1])].concat(alternateSign(array.slice(2)));
  } else {
    array.splice(2,0,true);
    return [Math.abs(array[1])*-1].concat(alternateSign(array.slice(2)));
  }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var words = ['zero', 'one','two','three','four','five','six','seven','eight','nine'];
  var strs = str.split(' ');
  if (strs.length === 1) return (!isNaN(Number(strs[0]))) ? words[Number(strs[0])] : strs[0];
  var substr = (strs.slice(1).join(' '));
  return (!isNaN(Number(strs[0]))) ? (words[Number(strs[0])] + ' ' + numToText(substr)) : (strs[0] + ' ' + numToText(substr));
};


// // *** EXTRA CREDIT ***

// // 37. Return the number of times a tag occurs in the DOM.
// var tagCount = function(tag, node) {
// };

// // 38. Write a function for binary search.
// // var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// // binarySearch(array, 5) // 5
// // https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// var binarySearch = function(array, target, min, max) {
// };

// // 39. Write a merge sort function.
// // mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// // https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
// var mergeSort = function(array) {
// };

// // 40. Deeply clone objects and arrays.
// // var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// // var obj2 = clone(obj1);
// // console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// // obj1 === obj2 // false
// var clone = function(input) {
// };

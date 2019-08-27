/*
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of 
sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left.
Input: 3
Output:
3: Another sheep jump over the fence
2: Another sheep jump over the fence
1: Another sheep jump over the fence
All sheep jumped over the fence
*/

/*
 * @function countSheep
 * @desc     Recursive program that counts how many sheep jumps over the fence.
 * @param    {num} num - the number sheep
 * @returns  none
 * @display  displays how many sheep jumped over the fence
 */

// function countSheep(num) {
//   //stopping condition of base case

//   for (let i = num; i >= 0; i--) {
//     if (i === 0) {
//       console.log('All sheep jumped over the fence');

//     }
//     else {
//       console.log(`${i}: Another sheep jump over the fence`);
//     }
//   }
//   return '';
// }

// console.log(countSheep(3));

/*===========================================================================
2. Write a function called `powerCalculator()` that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
* `powerCalculatorRec(10,2)`  should return `100`
* `powerCalculatorRec(10,-2)`  should return `exponent should be >= 0`
*/

// const powerCalculatorRec = function (base, exponent) {
//   if (exponent < 0) {
//     return 'exponent should be >= 0';
//   } 
//   else {
//     //base case
//     if (exponent === 0) {
//       return 1;
//     }
//   }

//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;

//   }

//   return result;
// };

// console.log(powerCalculatorRec(10, 3));

// /*=================================================================================
// Exercise 3 - Reverse String
// Write a program that reverses a string. Take a string as input,
// reverse the string, and return the new string.
// Input: 'tauhida'
// Output: adihuat
// */

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  let newWord = ''
  
  for(let i=0; i < str.length; i++){
   
    if(str.charAt(0) != str[i]){
      newWord += str[i]    
    }
  }
  return newWord;
}

console.log(reverseString('cat'))

// /*=================================================================================
// Exercise 4 - Triangular Number
// Calculates the nth triangular number.
// A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with n dots on a side,
// and is equal to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
//                         *
//           *           *    *
// *     |   *   *  |   *    *    *  |
// 1st     2nd             3rd             nth?
// 1st trianular number = 1
// 2nd = (1+2) = 3
// 3rd = (1+2+3) = 6
// 5th = (1+2+3+4+5) = 15
// Input: 5
// Output: 15
// */
// //Should always return n*(n+1)/2
// function triangle(n) {
//   if (n < 2)
//       return n;
//   return n + triangle(n - 1);
// }

// /*=================================================================================
// Exercise 5 - String Splitter
// Split a string based upon a separator (similar to String.prototype.split).
// Input: '1/21/2018'
// Output: 1212018 OR ["1", "21", "2018"]
// */
// function split(str, sep) {
//   var idx = str.indexOf(sep);
//   if (idx == -1)
//       return [str];
//   //you don't have to return an array, you can return a string as an array of
//   //character
//   //return str;
//   return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))

//   //****** all these are valid syntax as well
// //return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
// //return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
// }

// /*=================================================================================
// Exercise 6 - Factorial
// Write a recursive program that finds the factorial of a given number.
// The factorial of a number can be found by multiplying that number by each number
// between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
// Input: 5
// Output: 120
// */
// function factorial(n) {
//   // Base Case - when n is equal to 0, we stop the recursion
//   if (n === 0) {
//     return 1;
//   }
//   // This is our Recursive Case
//   // It will run for all other conditions except when n is equal to 0
//   return n * factorial(n - 1);
// }

// /*=================================================================================
// Exercise 7 - Fibonacci

// Write a recursive program that prints the fibonacci sequence of a given number.
// The fibonnaci sequence a series of numbers in which each number is the sum of the
// two preceding numbers.
// For example the 7th fibonacci number in a fibonaci sequence is  13.
// The sequence looks as follows: 1 1 2 3 5 8 13.

// Input: 7
// Output: 13
// */
// function fibonacci(n) {
//   // Base case
//   if (n <= 0) {
//     return 0;
//   }
//   // Base case
//   if (n <= 2) {
//     return 1;
//   }
//   // Recursive case
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

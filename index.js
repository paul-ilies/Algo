// 26. Remove Duplicates from Sorted Array
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/
// const removeDuplicates = (nums) => {
//     // define indexes of array
//     let i = 0;
//     let j = 1;
//     while (i < nums.length) {
//         if (nums[i] === nums[j]) {
//             // if we find a duplicate, it will be removed and indexes will go back by 1
//             nums.splice(i, 1)
//             i--;
//             j--;
//         }
//         // increment of indexes
//         i++
//         j++

//     }

// }

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))


// 27. Remove Element
/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

// const removeElement = (nums, val) => {
//     let i = 0;
//     while (i < nums.length) {
//         if (nums[i] === val) {
//             nums.splice(i, 1)
//             i--
//         }
//         i++
//     }

// }

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

// 28. Implement strStr()
/*
 Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.
 */

// const strStr = (haystack, needle) => {
//     return needle === "" ? 0 : haystack.indexOf(needle)
// }
// console.log(strStr("hello", "ll"))

// 66. Plus One
/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/
// const plusOne = (digits) => {
//     let convertString = digits.map(el => el.toString())
//     let partialNum = BigInt(convertString.join("")) + 1n
//     return partialNum.toString().split("").map(el => parseInt(el))

// }

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))

// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.



// const addBinary = (a, b) => {
//     const sum = BigInt('0b' + a) + BigInt("0b" + b)

//     return sum.toString(2)
// }
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
//     "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

// 69. Sqrt(x)
/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
*/
// const mysqrt = (x) => {
//     let i = 0;

//     while (i * i <= x) {
//         i++
//     }
//     return i - 1
// }
// console.log(mysqrt(4))

// 704. Binary Search

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

// const search = (nums, target) => {
//     let min = 0;
//     let max = nums.length - 1;
//     while (min <= max) {
//         let mid = Math.floor((min + max) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         }
//         if (nums[mid] > target) {
//             max = mid - 1;
//         }
//         else {
//             min = mid + 1;
//         }

//     }
//     return -1
// }

// console.log(search([-1, 0, 3, 5, 9, 12], 9))

// 278. First Bad Version
/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
*/

// const solution = (isBadVersion) => {

//     return function (n) {
//         let start = 1;
//         let end = n;

//         while (start <= end) {
//             let mid = Math.floor((start + end) / 2);
//             if (isBadVersion(mid)) {
//                 end = mid - 1;
//             }
//             else {
//                 start = mid + 1;
//             }
//         }
//         return start;
//     };
// };

// console.log(solution(3)(5))


// 125. Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// const isPalindrome = (s) => {
//     const regex = /[^A-Za-z0-9]/g;
//     const reverse = s.replace(regex, "").split("").reverse().join("").toLowerCase()

//     if (typeof (s) !== "string") {
//         alert("Please enter a string")
//     }
//     if (s.length === 0) {
//         alert("Nothing to check")
//     }
//     if (reverse === s.replace(regex, "").toLowerCase()) return true;
//     return false
// }

// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// 242. Valid Anagram

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

// const anagram = (s, t) => {
//     const sMap = checkValue(s);
//     const tMap = checkValue(t);
//     if (Object.keys(sMap).length !== Object.keys(tMap).length) {
//         return false;
//     }
//     for (let char in sMap) {
//         if (sMap[char] !== tMap[char]) {
//             return false;
//         }
//     }
//     return true;

// }

// const checkValue = s => {
//     const charMap = {};
//     for (let char of s) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1;
//     }
//     return charMap
// }

// console.log(anagram("anagram", "nagaram"))


/*
Codewars
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

// const alphanumeric = (string) => {
//     const regex = /[^A-Za-z0-9]/g;
//     const newString = string.replace(regex, "");
//     if (string === "") return false
//     if (newString.length === string.length) return true
//     return false
// }

// console.log(alphanumeric("hello world_"))


// 412. Fizz Buzz


/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

// const fizzBuzz = (n) => {
//     const result = []

//     for (let i = 1; i <= n; i++) {

//         if (i % 3 == 0 && i % 5 == 0) {
//             result.push("FizzBuzz")
//         }
//         else if (i % 3 == 0) {
//             result.push("Fizz")
//         }
//         else if (i % 5 == 0) {
//             result.push("Buzz")
//         }
//         else result.push(i.toString())
//     }

//     return result

// };

// console.log(fizzBuzz(3))

// Factorial
// const factorial = (n) => {
//     if (n === 0) {
//         return 1;
//     }

//     return n * factorial(n - 1)
// }

// console.log(factorial(3))


/*
ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

*/

// const validISBN10 = (isbn) => {
//     const isbnArr = [...isbn];
//     let temp = 0;
//     let total = 0;
//     if (isbnArr.length !== 10) {
//         return false
//     }
//     if (isbnArr[isbnArr.length - 1] === "X") {
//         isbnArr.pop()
//         temp = 10 * 10
//     }

//     for (let i = 0; i < isbnArr.length; i++) {
//         total += ((i + 1) * isbnArr[i])
//     }

//     if ((total + temp) % 11 === 0) {
//         return true
//     }
//     return false

// }

// console.log(validISBN10("1234512345"))


/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/
// const firstNonRepeatingLetter = s => {
//     const obj = {};
//     const arr = []
//     const newS = s.split("")

//     for (let char of s.toLowerCase()) {
//         obj[char] ? obj[char]++ : obj[char] = 1;
//     }
//     for (let char in obj) {
//         obj[char] === 1 ? arr.push(char) : null
//     }
//     return newS.find(el => el.toLowerCase() === arr[0])
// }

// console.log(firstNonRepeatingLetter("sTreSS"))


// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const maxChar = (str) => {
//     const charMap = {};
//     let result = "";
//     let count = 0;
//     for (let char of str) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1;
//     }
//     for (let char in charMap) {
//         if (count < charMap[char]) {
//             count = charMap[char];
//             result = char;
//         }
//     }
//     return result;
// }

// console.log(maxChar("abcccccccd"))


// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {

//     if (n < 2) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2)

// }

// console.log(fib(4))


// function fib2(n) {

//     const arr = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         const a = arr[arr.length - 1]
//         const b = arr[arr.length - 2]
//         arr.push(a + b);
//     }
//     return arr[n]

// }

// console.log(fib2(4))

/*
225. Implement Stack using Queues
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
*/


// var MyStack = function () {
//     this.data = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//     this.data.push(x)
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//     return this.data.pop()
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//     return this.data[this.data.length - 1]
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//     if (!this.data.length) {
//         return true;
//     } else {
//         return false
//     }
// };


/*
232. Implement Queue using Stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
*/


// var MyQueue = function () {
//     this.data = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//     this.data.unshift(x)
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//     return this.data.pop()
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//     return this.data[this.data.length - 1]
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//     if (!this.data.length) {
//         return true
//     } else {
//         return false
//     }
// };

// First letter uppercase

// const firstLetterUpper = (string) => {
//     return string
//         .split(" ")
//         .map(el => {
//             return el[0].toUpperCase() + el.slice(1)
//         })
//         .join(" ")
// }
// console.log(firstLetterUpper("hello beautiful world"))


// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// const maxSequence = arr => {
//     let max = 0;
//     let currentSum = 0;
//     if (!arr.length) return 0;
//     for (let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//         if (currentSum > max) {
//             max = currentSum
//         }
//         if (currentSum < 0) {
//             currentSum = 0
//         }
//     }

//     return max

// }

// console.log(maxSequence([-1, -6, -3, 8]))

// Move first letter of each word at the end of it and add "snow"
// Punctuation is the same
// Ex: Make your life easier, create a dashboard! ->

//     akeMsnow ourysnow ifelsnow asieresnow, reatecsnow asnow ashboarddsnow!

// const changeString = str => {
//     const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//     return str.split(" ").map(el => {
//         const firstLetter = el[0];
//         if (el[el.length - 1].match(regex)) {
//             const lastLetter = el[el.length - 1];
//             return el.slice(1, -1) + firstLetter + "snow" + lastLetter;
//         }
//         else {
//             return el.slice(1) + firstLetter + "snow"
//         }
//     }).join(" ")
// }

// console.log(changeString("Make your life easier, create a dashboard!"))




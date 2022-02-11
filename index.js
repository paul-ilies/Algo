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
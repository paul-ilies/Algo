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



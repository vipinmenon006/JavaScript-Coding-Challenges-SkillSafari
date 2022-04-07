'use strict';

// EASY

// (1) Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// const power = function (a, b) {
//   console.log(a ** b);
// };
// power(2, 3);

// (2) Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// const areaOfHexagon = function (a) {
//   console.log(Math.floor(3 * Math.sqrt(3) * a * a) / 2);
// };
// areaOfHexagon(10);

// (3) Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are alchemyst) ––> Output: 3

// const noOfWords = str => {
//   let s = str.split(' ');
//   console.log(`Number of words are : ${s.length}`);
// };
// noOfWords('We are alchemyst');

// (4) Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

// const findMin = (...min) =>
//   console.log(`Minimum number is ${Math.min(...min)}`);
// findMin(3, 2, 5, 8, 12);

// (5) Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// const findMax = (...max) =>
//   console.log(`Maximum number is ${Math.max(...max)}`);
// findMax(3, 2, 5, 8, 12);

// (6) Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

// const typeOfTriangle = (a, b, c) => {
//   if (a === b && b === c) return 'Equilateral Triangle';
//   else if (a === b || b === c || c === a) return 'Isosceles Triangle';
//   else return 'Scalene Triangle';
// };
// console.log(typeOfTriangle(30, 60, 90));

// MEDIUM

// (1) Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// const array = arr => console.log(arr.length);
// array([1, 5, 3, 7, 8]);

// (2) Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const indexOf = (arr, item) => {
//   let index = 0;
//   arr.forEach((el, i) => {
//     if (item === el) index = i;
//   });
//   return index;
// };
// console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

// const indexOf = (arr, item) => console.log(arr.indexOf(item));
// indexOf([1, 6, 3, 5, 8, 9], 8);

// (3) Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replace = (arr, first, second) => {
//   arr.forEach((el, i) => {
//     if (el === first) arr[i] = second;
//   });
//   return arr;
// };
// console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

// (4) Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// const mergeArray = (arr1, arr2) => {
//   const arr = [...arr1, ...arr2];
//   console.log(arr);
// };
// mergeArray([1, 3, 5], [2, 4, 6]);

// (5) Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("skillsafari", 4) ––> Output: l

// const charAt = (str, i) => console.log(str.charAt(i));
// charAt('skillsafari', 4);

// (6) Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const minDate = (d1, d2) => {
//   let newd1 = d1.split('/');
//   let newd2 = d2.split('/');
//   let date1 = new Date(newd1[2], newd1[1] - 1, newd1[0]);
//   let date2 = new Date(newd2[2], newd2[1] - 1, newd2[0]);
//   if (Date.parse(date1) < Date.parse(date2)) return d1;
//   else return d2;
// };
// console.log(minDate('02/05/2021', '24/01/2021'));

// ADVANCED

// (1) Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("skill", 2) ––> Output: umknn
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// const secretCode = (str , n) => {
//     let arr;
//     let word = secretCode.split('');
//     word.forEach(() => for(i= 0 ; i< arr.length; i++) {
//         console.log(word);
//     }

//     };

// (2) Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are alchemyst') ––> Output: We Are Alchemyst

// const toSentenceCase = function (str) {
//   const arr = str.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   console.log(arr.join(' '));
// };
// toSentenceCase('we are alchemyst');

// (3) Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// const sortArray = function (arr) {
//   const sort = arr.sort((a, b) => a - b);
//   console.log(sort);
// };
// sortArray([100, 83, 32, 9, 45, 61]);

// (4) Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are alchemyst') –––> Output: ew era tsymehcla

// const reverseCharactersOfWord = str => {
//   console.log(str.split('').reverse().join('').split(' ').reverse().join(' '));
// };
// reverseCharactersOfWord('we are alchemyst');

'use strict';

// (1) Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

// const arr = [12, 14, 15, 23, 45, 54, 63];
// const sum = arr.reduce((acc, i) => acc + i, 0);
// console.log(sum);

// (2) Find average of an array and display the output.

// const arr = [12, 14, 15, 23, 45, 54, 63];
// const sum = arr.reduce((acc, i) => acc + i, 0);
// console.log(sum / arr.length);

// (3) Find maximum and minimum of an array.

// const arr = [23, 45, 63, 23, 43, 12, 34, 43, 54];
// const min = Math.min(...arr);
// const max = Math.max(...arr);
// console.log(`Minimum : ${min} , Maximum : ${max}`);

// (4) Find Median and Mode of an array.
// Median : (N+1/2)th term.
// Mode : Most repeating term

// const arr = [12, 14, 15, 23, 45, 54, 63];
// const sortedArr = arr.sort((a, b) => a - b);
// const n = sortedArr.length;
// console.log(sortedArr);
// const mid = n / 2;
// const midAbs = Math.floor(mid);
// if (n % 2 === 0) console.log((sortedArr[midAbs] + sortedArr[midAbs + 1]) / 2);
// else console.log(`Median is : ${sortedArr[midAbs]}`);
// let count = 1;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//       break;
//     }
//   }
// }
// console.log('Mode is :' + count);

// (5) Find sum of two arrays.
// [3,5,2,9,4] = 3+5+2+9+4 = 23
// [6,2,8,1,3] = 6+2+8+1+3 = 20
// Final Output : 20+23 = 43

// const arr1 = [3, 5, 2, 9, 4];
// const arr2 = [6, 2, 8, 1, 3];
// const sum1 = arr1.reduce((acc, i) => acc + i, 0);
// const sum2 = arr2.reduce((acc, i) => acc + i, 0);
// console.log(sum1 + sum2);

// (6) Find number of constants and vowels in a string.

// const str = 'SkillSafari';
// let vowelsCount = 0,
//   consonantsCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for (let char of str.toLowerCase()) {
//   if (vowels.includes(char)) vowelsCount += 1;
//   else consonantsCount += 1;
// }
// console.log('Vowels Count: ' + vowelsCount);
// console.log('Consonants Count: ' + consonantsCount);

// (7)Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

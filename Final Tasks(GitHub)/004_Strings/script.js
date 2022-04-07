'use strict';

// BEGINNER TO INTERMEDIATE

// (1) Write a program that converts the string into uppercase

// const str = 'skillsafari';
// console.log(str.toUpperCase());

// (2) Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

// const str1 = 'Good';
// const str2 = 'Morning';
// const concat = str2.concat('', str1);
// console.log(concat);

// (3) Program that reads string and count number of characters present in the string

// const str = 'skillsafari';
// console.log(str.length);

// (4) Write a program that converts string like "124" to 124

// const num = '124';
// console.log(Number(num));

// (5) Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// const str = 'Skillsafari';

// const vowels = /[aeiou]/gi;
// let newStr = '';
// for (let char of str) {
//   if (char.match(vowels)) {
//   } else newStr += char;
// }
// console.log(newStr);

// (6) Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// const str = 'batman@45';

// if (str.includes('45')) {
//   console.log('Alphanumeric');
// }

// (7) A program that reads three strings and prints the longest and smallest one

// const str1 = 'hi';
// const str2 = 'hey';
// const str3 = 'hello';
// const lstr1 = str1.length;
// const lstr2 = str2.length;
// const lstr3 = str3.length;
// if (lstr1 > lstr2 && lstr1 > lstr2) console.log('Longest string is ' + str1);
// else if (lstr2 > lstr3 && lstr2 > lstr1)
//   console.log('Longest string is ' + str2);
// else console.log('Longest string is ' + str3);

// (8) A program that counts number of vowels and consonants in a String?

// const str = 'SkillSafari';
// const vowels = /[aeiou]/gi;
// let v = 0,
//   c = 0;
// for (let char of str) {
//   if (char.match(vowels)) v += 1;
//   else c += 1;
// }
// console.log(`Vowels = ${v} Consonants = ${c}`);

// (9) Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

// const str = 'SkillSafari';
// const strlen = str.length;

// if (strlen > 7) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// (10) Write a program that takes two strings and copies smaller string into bigger string

// const str1 = 'Good';
// const str2 = 'Morning';

// const lgth1 = str1.length;
// const lgth2 = str2.length;

// if (lgth1 > lgth2) {
//   console.log(str1.concat(str2));
// } else {
//   console.log(str2.concat(str1));
// }

// (11) Given a string, determine if it is a palindrome, considering only alphanumeric characters

// (12) For a given input string(str), write a function to print all the possible substrings.Without using substr method

// const str = 'SkillSafari';
// const substr = (str = '') => {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length + 1; j++) {
//       result.push(str.slice(i, j));
//     }
//   }
//   return result;
// };

// console.log(substr(str));

// (13) Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// const str = 'Wed April 15, 7pm';
// console.log(str.slice(0, 12));

// (14) Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// const str = '5565534276455423';
// const maskChar = str.slice(3).padEnd(str.length, '#');
// console.log(maskChar);

// (15) Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

// const str = 'tic tac toe is a fun game';
// console.log(str.slice(0, 7).toUpperCase());

// ADVANCED

// (1) Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

// let str = 'Codlng ls fun !';
// console.log(str.replaceAll('l', 'i'));

// (2) Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

// const str = 'S kill Safari';
// const word = str.split(' ').join('');
// console.log(word);

// (3) A program that counts the value of each character and prints the most repeated character?

// const countString = function (str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   }
//   return count;
// };
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');
// const result = countString(string, letterToCheck);
// console.log(result);

// Write a program to toggle case of each character of the string "good afternoon" (example: "skillsafari" ⇒ "sKiLlSaFaRi" )

// function toggleCase(str) {
//   return str
//     .toUpperCase()
//     .split(' ')
//     .map(function (word) {
//       return word.charAt(0).toLowerCase() + word.slice(1);
//     })
//     .join(' ');
// }
// console.log(toggleCase('good afternoon'));

// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

// const str = 'programming camp are amazing';
// console.log(str.replaceAll('programming', ''));

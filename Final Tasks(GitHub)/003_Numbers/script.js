'use strict';

// (1) Write a program to input 2 numbers and display the sum of the numbers to the console.
// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

// const num1 = Number(prompt('Enter the first number'));
// const num2 = Number(prompt('Enter the second number'));

// const sum = num1 + num2;

// console.log(`Sum = ${sum}`);

// (2) Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
// Input: P=100, R=6%, T=2
// Output: 12

// const p = 100;
// const r = 6;
// const t = 2;

// console.log(`Simple Interest = ${(p * t * r) / 100}`);

// (3) Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
// Formula : 0.5 * m * v * v

// const m = 10;
// const v = 12;

// console.log(`Kinetic Energy = ${0.5 * m * v * v}`);

// (4) Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.

// Input: 56
// Output: 13.33333

// let T = 56;
// let celsius = (9 * T) / 5 + 32;
// console.log(celsius);

// (5)Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a

// const a = 5;
// const Area = a * a;
// const Perimeter = 4 * a;
// const SA = 6 * a * a;
// const Volume = a * a * a;
// console.log('Area of a square = ' + Area);
// console.log('Perimeter of a square = ' + Perimeter);
// console.log('Surface area of a cube = ' + SA);
// console.log('Volume of a cube = ' + Volume);

//(6) Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// const CP1=1500, SP1=2000;
// const CP2=3125,SP2=1125;
// if(CP1<SP1) console.log(SP1-CP1+" Profit")
// else console.log(CP1-SP1+" Loss")

// if(CP2<SP2) console.log(SP2-CP2+" Profit")
// else console.log(CP2-SP2+" Loss")

//(7) Write a program to calculate sum of N natural digits, as input by the users

// const N = Number(prompt("Enter the number of digits"));
// if (N > 0) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     sum = sum + i;
//   }
//   console.log(`Sum of ${N} natural numbers = ` + sum);
// } else console.log("Please enter a natural number");

//(8) Write a Program to Print N Odd Number in Descending Order.

// const N = 4;
// for (let j = N; j > 0; j--) {
//   if (j % 2 !== 0) console.log(j);
// }

//(9) Write a JavaScript program to compute the sum of all digits that occur in a given string.

// const N = '1234';
// let sum = 0;
// for (let k = 1; k <= N.length; k++) {
//   let d = k % 10;
//   sum = sum + d;
// }
// console.log(sum);

//Q10.Write a JavaScript program that reverses a number.

// let N=1234
// console.log("Reverse of a number is "+Number(String(N).split("").reverse().join("")))

//(11) Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// const pos=2;
// let N=1234;
// console.log(Number(String(N).slice(pos,4)+String(N).slice(0,pos)))

// (12) Write a Program to convert Decimal to Binary.

// let num=5;
// let temp=num
// let binary=""
// while(temp!==0){
//   if(temp%2===0) binary+=0
//   else binary+=1
//   temp=Math.floor(temp/2)
// }
// console.log(Number(binary))

//Follow up Question : Write a Program to Convert Octal to Decimal
// const num = 67;
// let decimal = 0;
// let base = 1;
// let temp = num;
// while (temp > 0) {
//   let remainder = temp % 10;
//   temp = Math.floor(temp / 10);
//   decimal += remainder * base;
//   base *= 8;
// }
// console.log(decimal);

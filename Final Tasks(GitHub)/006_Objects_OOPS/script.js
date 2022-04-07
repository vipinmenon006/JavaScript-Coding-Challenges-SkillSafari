'use strict';

const studentDetails = [
  {
    roll: '1',
    name: 'Rohan Singh',
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: '2',
    name: 'Ritvik Patel',
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: '3',
    name: 'Neha Maurya',
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: '4',
    name: 'Mohit Verma',
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: '5',
    name: 'Karan Trivedi',
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

// Given an array of objects of student's marks:

// Print the name and total marks of each student.

// const result = studentDetails.map(
//   student =>
//     student.name +
//     ' ' +
//     Number(student.maths + student.science + student.english + student.computer)
// );
// console.log(result);

// Print the name of student whose total marks is highest.

// const nameOfTopper = () => {
//   let max = 0;
//   let studentWithHighestMarks = '';
//   studentDetails.forEach(student => {
//     const totalMarks =
//       student.maths + student.science + student.english + student.computer;
//     if (totalMarks > max) {
//       max = totalMarks;
//       studentWithHighestMarks = student.name;
//     }
//   });
//   return studentWithHighestMarks;
// };
// console.log('Highest Mark : ' + nameOfTopper());

// Print the name of student whose total marks is lowest.

// const nameOfTopperFromBottom = () => {
//   let name = '';
//   let min =
//     studentDetails[0].maths +
//     studentDetails[0].science +
//     studentDetails[0].english +
//     studentDetails[0].computer;
//   studentDetails.forEach(student => {
//     const totalMarks =
//       student.maths + student.science + student.english + student.computer;
//     // console.log(totalMarks);
//     if (totalMarks < min) {
//       min = totalMarks;
//       name = student.name;
//     }
//   });
//   return name;
// };
// console.log('Lowest Mark : ' + nameOfTopperFromBottom());

// Print the average marks of the class in computer subject.

// const total = studentDetails.reduce((acc, curr) => acc + curr.computer, 0);
// const avg = total / studentDetails.length;

// console.log('Average marks of class in computer = ' + avg);

// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.

// const marks = () => {
//   studentDetails.forEach(student => {
//     const totalMarks =
//       student.maths + student.science + student.english + student.computer;
//     if (totalMarks / 4 >= 75) console.log(`${student.name} has grade A`);
//     else if (totalMarks / 4 >= 60) console.log(`${student.name} has grade B`);
//     else if (totalMarks / 4 >= 35) console.log(`${student.name} has grade C`);
//     else if (totalMarks / 4 < 35) console.log(`${student.name} has grade D`);
//   });
// };
// marks();

// Print the total number of students passed and their names. Pass when total marks is greater than 35%.

// const pass = () => {
//   let count = 0;
//   studentDetails.forEach(student => {
//     const totalMarks =
//       student.maths + student.science + student.english + student.computer;
//     if (totalMarks / 4 > 35) count += 1;
//   });
//   return count;
// };
// console.log('No of students passed = ' + pass());

const cartItems = [
  {
    id: '101',
    name: 'Oreo',
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: '102',
    name: 'Red Bull',
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: '103',
    name: 'Dairy Milk Silk',
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: '104',
    name: 'Pulse Candy Pack',
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];
// Given an array of objects of items in cart, print:
// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)

// let c = 0;
// cartItems.forEach(item => {
//   if (item) c += 1;
// });
// console.log(c);
// let total = 0;
// cartItems.forEach(({ price }) => (total += price));
// console.log(total);
// let discountedTotal = 0;
// cartItems.forEach(
//   ({ price, discount }) => (discountedTotal += price * discount)
// );
// console.log(discountedTotal);
// let totalTax = 0;
// cartItems.forEach(({ price }) => (totalTax += price * 0.18));
// console.log(totalTax);

// // //Higher order function

// // let nums = [1, 2, 4, 10, 13];

// // let double = nums.map((num)=>{
// //     return num * 2;
// // })
// // console.log(double);
// // console.log(nums);

// // let evenNums = nums.filter((num)=>{
// //     if(num % 2 == 0){
// //         return num
// //     }
// // })
// // // let evenNums = nums.filter(num=>num%2===0);
// // console.log(evenNums);


// // Find
// // let obj  = [
// //     {userName : "Arsalan", age: 23},
// //     {userName : "Arham", age: 26},
// //     {userName : "Huzaifa", age: 26},
// // ]

// // let age23 = obj.find((elem)=>{
// //     if(elem.age === 26){
// //         return elem
// //     }
// // })

// // console.log(age23);


// let students = [
//     { name: "Ali", age: 17, marks: 85 },
//     { name: "Sara", age: 21, marks: 92 },
//     { name: "John", age: 19, marks: 65 },
//     { name: "Ayesha", age: 16, marks: 75 },
//     { name: "Rahul", age: 22, marks: 45 }
// ];


// // Using map(), create a new array containing only the names of all students.

// let studentNames = students.map((student)=>{
//     return student.name;
// })
// console.log(studentNames);

// // Using filter(), create a new array containing students whose marks are greater than 75.

// let studentAbove75 = students.filter((student)=>{
//     if(student.marks > 75){
//         return student
//     }
// })
// console.log(studentAbove75);

// // Using find(), find the first student whose age is greater than 18.

// let adultStudent = students.find((student)=>{
//     if(student.age > 18){
//         return student
//     }
// })
// console.log(adultStudent);
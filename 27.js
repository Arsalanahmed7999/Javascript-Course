// // // // //Spread -

// // // // let num1 = [1, 2, 3];
// // // // let num2 = [4, 5, 6];

// // // // let newArr = [...num1, ...num2];

// // // // console.log(newArr);

// // // // let user = {
// // // //     myname: "Arsalan",
// // // //     age: 23
// // // // }
// // // // // user.myname = "Ahmed"
// // // // // user.city = "bhopal"

// // // // let updatedUser = {
// // // //     ...user,
// // // //     myname: "Ahmed",
// // // //     mycity: "Bhopal"
// // // // }

// // // // console.log(updatedUser);

// // // //Rest

// // // // const nums = [1,2,3,4,5,6,7,8,9];
// // // // const [first, two] = nums;
// // // // console.log(first, two);

// // // //first - first item
// // // //second - second item
// // // // rest of the items - rest var

// // // // const [first, , , ,  ...rest] = nums;
// // // // console.log(first, rest);
// // // // const [ , second, ,  ...rest] = nums;
// // // // console.log(second, rest);

// // // let user = {
// // //     myname: "Arsalan",
// // //     age: 23,
// // //     profession: "Developer"
// // // }
// // // let {myname, ...restObj} = user;
// // // console.log(myname);
// // // console.log(restObj);

// // 1. Create an array of 5 fruits. Use array destructuring to store the first fruit in firstFruit and the second fruit in secondFruit. Print both variables.

// const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// const [firstFruit, secondFruit] = fruits;
// console.log(firstFruit, secondFruit);

// // 2. Given an object containing name, age, and city, use object destructuring to extract name and age into separate variables and print them.

// let user = {
//   myname: "Arsalan",
//   age: 23,
//   city: "Bhopal",
// };
// const { myname, age } = user;
// console.log(myname, age);

// // 3. Create an array [10, 20, 30]. Use the spread operator to create a new array containing these numbers along with 40 and 50.

// let nums = [10, 20, 30];
// let newNums = [...nums, 40, 50];
// console.log(newNums);

// // 4. Given a student object, use the spread operator to create a copy of the object and update the student's age to 22, keeping all other properties unchanged.

// let student = {
//   studentName: "Arsalan",
//   age: 33,
// };

// let updatedStudent = {
//     ...student,
//     age: 22
// }

// console.log(updatedStudent);

// // 5. Create an array of 5 numbers. Use array destructuring with the rest operator to store the first number in first and all remaining numbers in remaining.

// let nums2 = [10, 20, 30, 40, 50];

// let [first, ...rest] = nums2;
// console.log(first);
// console.log(rest);

// // 6. Given an employee object containing name, age, city, and role, use object destructuring with the rest operator to extract name and store all remaining properties in an object called details.

// let employee = {
//     name: "Arslan",
//     age: 33,
//     city: "Bhopal",
//     role: "Developer"
// }

// const {name, ...details} =  employee;
// console.log(name);
// console.log(details);


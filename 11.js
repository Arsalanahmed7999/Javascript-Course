// // Arrow functions

// // function add(a="", b) {
// //     return a + b;
// // }

// // let sum = (num1 = 4, num2 = 10) => {
// //   return num1 + num2;
// // };

// // // console.log(sum()); //NaN - Not a number
// // console.log(sum(15, 21)); 


// // function expression vs function declaration


// // // function expression
// // console.log(sum(15, 21)); 
// // let sum = (num1 = 4, num2 = 10) => {
// //   return num1 + num2;
// // };
// // console.log(sum(15, 21)); 

// // // function declaration
// // console.log(Greet());
// // function Greet() {
// //     return "Hello Arsalan";
// // }
// // console.log(Greet());


// // Create an arrow function called getFullName that takes firstName and lastName and returns the person's full name. 


// let getFullName = (fName, lName)=>{
//     return fName + " " + lName;
// }

// console.log(getFullName("Arsalan", "Ahmed"));

// // Create an arrow function called checkAge that takes a person's age and returns "Adult" if the age is 18 or above, otherwise returns "Minor". 


// // let checkAge = (age=0)=>{
// //     if(age>=18){
// //         return "Adult";
// //     }
// //     else{
// //         return "Minor";
// //     }
// // }
// // console.log(checkAge()); //Minor
// // console.log(checkAge(7)); //Minor
// // console.log(checkAge(23)); //Adult
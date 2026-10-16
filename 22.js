// // //closures

// // // let message = "This is a message"; //This data is very sensitive, very private

// // // function Greet(){
// // //     message = "This is a new message";//this should not be allowed to access
// // // }

// // //I am creating function that will only have the right to manipulate this message variable

// // function Greet(){
// //     //Now data is private
// //     let msg = "This is a new message";  //this should not be allowed to access

// //     //Now we will make the accessibility of this msg var to outside the function
// //     function Hello(){
// //         return msg;
// //     }
// //     return Hello;
// // }
// // // console.log(Greet());
// // let myFunc = Greet();
// // console.log(myFunc());

// // Create a function outer() that has a variable count = 0. Inside it, create an inner() function that increases count by 1 and prints its value. Return the inner() function from outer(). Call the returned function three times and observe the output. 


// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// let myCounter = outer();
// // console.log(myCounter());
// myCounter();
// myCounter();
// myCounter();
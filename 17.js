//callback functions
//Ek function hai oske andar ek function as an argument hum agr dein to wo kya hota he???

// function message(){
//     return "Hello";
// }

// function greet(msgFunction){
//     return msgFunction;
// }

// console.log(greet(message())); //Hello


// function message(){
//     return "Hello";
// }

// function greet(msgFunction){
//     return msgFunction(); // this will ways a function now
// }

// console.log(greet(message)); //Hello


//what is a function have a value

// function stringConcat(str1, str2){
//     return str1 + " " + str2;
// }

// function Greet(callback){
//     return callback;
// }

// console.log(Greet(stringConcat("Hello", "World"))); 


// Create a function welcomeUser() that takes a name and a callback function. Pass the name to the callback and print:
// Hello Arsalan! 

// function welcomeUser(myName){
//     return  `Hello ${myName}!`
// }

// function myName(callback){
//     return callback
// }

// console.log((myName(welcomeUser("Arsalan"))));


// Create a function multiply() that takes two numbers and a callback function. Multiply the two numbers and pass the result to the callback. 
// multiply(5, 4, showResult);


// function multiply(num1, num2){
//     return num1 * num2;
// }

// function calc(callback){
//     return callback;
// }

// // console.log(calc(multiply())); //NaN
// console.log(calc(multiply(3, 9))); //27


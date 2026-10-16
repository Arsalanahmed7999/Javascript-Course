// //Scopes in js

// //Global scope

// // let name = "Arsalan";

// // function greet(){
// //     console.log(name);
// // }

// // greet();
// // console.log(name);

// // if(true){
// //     console.log(name);
// // }

// //Function scope

// function greet() {
//   let myName = "Arsalan";
//   console.log(myName);
// }

// greet();
// // console.log(myName);

// // if(true){
// //     console.log(name);
// // }


// //Block scope
// if(true){
//     let myAge = 18;
//     const myCity = "Bhopal";
// }

// console.log(myAge);
// console.log(myCity);



// Function scoped var, let, const

// function getAge(){
//     const age = 18;
//     return age;
// }

// console.log(getAge());
// console.log(age);


// if(true){
//     var age = 18;
// }
// function getAge(){
//     return age;
// }
// console.log(getAge());

//var is not block scoped
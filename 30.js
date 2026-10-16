// // function greet(){
// //     return "Hello";
// // }

// // function message(msg){
// //     return msg;
// // }

// // console.log(message(greet()));

// // setTimeout(() => {
// //   console.log("Step1");
// //   setTimeout(() => {
// //     console.log("Step2");
// //     setTimeout(() => {
// //       console.log("Step3");
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// //which is causing a callback hell -> it's solution???
// //Promises -> promise kar rha he ki wo result dega
// //Initial -> Success , Fail
// //Pending -> Fulfilled , Rejected

// // const pro = new Promise((resolve, reject) => {
// //   let loginsuccess = false;
// //   if (loginsuccess) {
// //     resolve("Login successful");
// //   } else {
// //     reject("Login unsuccessful");
// //   }
// // });

// // pro.then((result) => {console.log(result)}).catch((error) => {console.log(error)});

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 completed"), 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 completed"), 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 3 completed"), 1000);
//   });
// }

// step1()
//   .then((result) => {
//     console.log(result);
//     return step2();
//   })
//   .then((result) => {
//     console.log(result);
//     return step3();
//   })
//   .then((result) => {
//     console.log(result);
//   });

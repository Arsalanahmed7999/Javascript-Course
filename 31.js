// //promise hell - Async/Await

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

// async function runsteps() {
//   try {
//     const rest1 = await step1();
//     console.log(rest1);
//     const rest2 = await step2();
//     console.log(rest2);
//     const rest3 = await step3();
//     console.log(rest3);
//   } catch (error) {
//     console.log(error);
//   }
// }
// runsteps();

// 1. Promise: Create a Promise that resolves with the message "Task completed" after 2 seconds. Use .then() to print the message.

const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});

// task.then((result) => {
//   console.log(result);
// });

// 2. Async/Await: Create a function that returns a Promise resolving with "Data loaded" after 2 seconds. Use an async function and await to print the result.

function dataLoaded() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data Loaded");
    }, 2000);
  });
}

const myAsyncFunc = async () => {
  try {
    const res = await dataLoaded();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// myAsyncFunc();

// 3. Promise with Error Handling: Create a Promise that rejects with the message "Something went wrong". Use .catch() to handle the error and print the message.

const myPromise = new Promise((res, rej) => {
  rej("Something went wrong");
});


myPromise.catch((err)=>{
    console.log(err);
})
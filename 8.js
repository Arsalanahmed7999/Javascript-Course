// // //Arrays in JS

// // let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya", 'Pineapple', "Grapes"];
// // console.log(fruits[0]); //Apple
// // console.log(fruits[fruits.length - 1]); //Will be printing the last item

// // //Mutable - Ap ise change kr skte h
// // // fruits[0] = "Grapes";
// // // console.log(fruits[0]); //Grapes
// // console.log(fruits.length); //["Grapes", "Banana", "Mango", "Orange"]

// // //Create , Read, Update, Delete...
// // //push

// // fruits.push("Strawberry");
// // console.log(fruits); //["Grapes", "Banana", "Mango", "Orange", "Papaya", 'Pineapple', "Grapes", "Strawberry"]

// // //pop
// // fruits.pop();
// // console.log(fruits);

// // console.log(fruits.indexOf("Banana"));//1
// // console.log(fruits.indexOf("Ban")); //-1

// let nums = [
//   [2, 4, 6],
//   [1, 3, 5, [7, 8, 9]],
// ]; //Multi-Dimensional Array

// console.log(nums[0][2]); //2
// console.log(nums[1][3][1]); //8

// Create an array of 5 fruits and print the first and last element using indexing.

// Create an array of numbers [10, 20, 30, 40, 50]. Find and print the length of the array.


// let nums = [10, 20, 30, 40, 50];
// console.log(nums.length);


// Create an array of names. Use a loop to print each name one by one.
// let names = ["Arsalan", "Ali", "Ahmed", "Ayesha", "Fatima", "Zainab", "Hassan", "Hussain", "Areeba", "Sana"];
// for(let index = 0; index < names.length; index++){
//     console.log(names[index]);
// }



// Create an array of numbers and find the sum of all the numbers using a loop.

// let nums = [2, 4, 6, 8, 10];
// let sum = 0;
// for(let i = 0 ; i< nums.length; i++){

//     // console.log(nums[i]);
//     sum = sum + nums[i];
//     // 0 = 0 + 2
//     // 2 = 2 + 4
//     // 6 = 6 + 6
//     // 12 = 12 + 8
//     // 20 = 20 + 10
// }

// console.log(sum);


// Create an array of numbers. Use a loop to find and print the largest number in the array.

// let randomNumbers = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11, 110];
// let largestNum = randomNumbers[0]; 
// for(let i = 0 ; i< randomNumbers.length; i++){
//     if(randomNumbers[i] > largestNum){
//         largestNum = randomNumbers[i];
//     }  
// }
// console.log(largestNum); //90

// Multi-dimensional Array: Create a 2D array representing 3 students and their marks in 3 subjects. Use indexing to print the marks of the second student in the third subject.

// let studentsMarks = [["Arsalan", "Ali", "Ahmed"], [23, 45, 70]];
// console.log(studentsMarks[1][1]);

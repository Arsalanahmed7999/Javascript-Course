// //slice 

// // let arr = [10, 20, 30, 40];
// // // let part = arr.slice(1, n + 1);
// // let part = arr.slice(1, 3);
// // console.log(part); //[20, 30];
// // console.log(arr); //[10, 20, 30, 40];

// //splice
// // splice(start index, deleteCount, items...) → changes the array

// // let arr = [10, 20, 30, 40];
// // console.log(arr);
// // // arr.splice(0, 2);
// // // arr.splice(4, 0, 50, 60, 70);
// // // arr.splice(1, 2, 50, 60, 70);
// // // console.log(arr);

// // let fruits = ['Mango', 'Orange', 'Banana'];


// // for(let i = 0; i < fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// // for(let fruit of fruits){
// //     console.log(fruit);
// // }
// // "Mango,Orange,Banana";

// // let allFruits = fruits.join(",");
// // console.log(allFruits);

// //split 

// // let all = "Mango Orange Banana";
// // let allF = all.split(" ");
// // console.log(allF);


// // Create an array of 6 fruits. Use slice() to create a new array containing the first 3 fruits.

// // let fruits = ['Mango', 'Orange', 'Banana', "Apple", 'Guava', 'Papaya'];
// // let newArr = fruits.slice(0, 3);


// // Create an array of 5 numbers. Use splice() to remove 2 elements from the middle and add 2 new numbers in their place.

// let nums = [1,2,3,5,6];
// nums.splice(2, 2, 171, 322);
// // console.log(nums);


// // Create an array of 5 names. Use a for...of loop to print each name, one by one.

// let names = ['Arsalan', 'Ahmed', 'John', 'Smith', 'Gary'];

// // for(let name of names){
// //     console.log(name);
// // }

// // Create an array of 4 fruits. Use join() to convert the array into a string where each fruit is separated by " - ".


// // let fruits = ['Mango', 'Orange', 'Banana', "Apple"];
// // let newF = fruits.join(" - ");
// // console.log(newF);



// // Create a string "Apple,Banana,Mango,Orange". Use split() to convert it into an array, then use a for...of loop to print each fruit separately.

// let myStr = "Apple,Banana,Mango,Orange";
// let newArr = myStr.split(",");
// for(let fruit of newArr){
//     console.log(fruit)
// }
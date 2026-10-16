// //Comparison Operators
// // console.log(5 == "5"); //true
// // console.log(5 === 5); //true
// // console.log(5 != 5); //false
// // console.log(5 > 5); //false
// // console.log(5 < 5); //false
// // console.log(5 <= 15); //true
// // console.log(5 >= 2); //true

// //Logical Operators
// // && - AND
// // console.log(5 > 2 && 5 < 10); //true
// // console.log(5 > 2 && 5 > 10); //false
// // // || - OR

// // console.log(5 > 2 || 5 < 10); //true
// // console.log(5 > 2 || 5 > 10); //true

// // // ! - NOT
// // console.log(!(5==6)); //true

// //if age is greater than or equal to 18, print "You are eligible to vote.
// var age = 70;
// // if(age>=18){
// //     console.log("You are eligible to vote.");
// // }
// // else if(age<0){
// //     console.log("Age cannot be negative.");
// // }
// // else{
// //     console.log("You are not eligible to vote.");
// // }

// //Ternary Operator - it is most important operator in javascript (extensively used in react js)

// // age>=18 ? console.log("You are eligible to vote.") : console.log("You are not eligible to vote.");
// //condition ? true : false

// //Questions 


// // Create a variable age. If the age is 18 or above, print "You can vote", otherwise print "You cannot vote".
// // Create a variable number. Check whether the number is positive, negative, or zero using if...else if...else.

// var num = 5;

// if(num > 0){
//     console.log("The number is positive.");
// }
// else if(num < 0){
//     console.log("The number is negative.");
// }
// else{
//     console.log("The number is zero.");
// }


// // Create a variable password. Check whether the password is "admin123". If it matches, print "Login successful", otherwise print "Invalid password".

// var password = "admin123";

// if(password === "admin123"){
//     console.log("Login successful");
// }
// else{
//     console.log("Invalid password");
// }

// // Create a variable age. Use the ternary operator to print "Adult" if the age is 18 or above, otherwise print "Minor".

// var age = 12;
// age>= 18 ? console.log("Adult"): console.log("Minor");
// // Create a variable number. Use the ternary operator to check whether the number is even or odd and print the result.
// //even - number which is divisible by 2 
// //odd - number which is not divisible by 2
// // koi sa bhi number me 2 se divide karne par remainder 0 aata hai to wo number even hota hai otherwise odd hota hai.
// var number = 70;
// number % 2 === 0 ? console.log("Even") : console.log("Odd"); 
// //Objects in JavaScript

// // let personName = "arslan";
// // let personAge = 25;

// // let person = {
// //     //key : value
// //     //word : "meaning"
// //     myName: "arsalan",
// //     age: 23,
// //     country: "India"
// // }

// //old way of accessing the values of an object
// // console.log(person["myName"]);


// //new way os accessing the values of an object
// // console.log(person.myName);
// // console.log(person.age);
// // console.log(person.country);

// //Update 

// // person.myName = "Arsalan";
// // console.log(person.myName);

// //Add new key value pair
// // person.city = "Delhi";
// // console.log(person);

// //js k andar agar object ki key already present hai to wo update ho jata hai aur agar key present nahi hai to wo add ho jata hai.

// // delete person.city;

// // console.log(person);

// // let person = {
// //     myName: "arsalan",
// //     age: 23,
// //     address:{
// //         city: "Delhi",
// //         state: "Delhi",
// //         country: "India",
// //     },
// //     hobbies: ["cricket", "football", "coding"]
// // }


// // console.log(person.address.city);
// // console.log(person.hobbies[2]);

// // let products = [
// //     {id: 1, name: "laptop", price: 45000},
// //     {id: 2, name: "mobile", price: 15000},
// //     {id: 3, name: "tablet", price: 25000},
// // ]

// // console.log(products[0].price);

// // let sumOfPrice = 0;
// // for(let i = 0 ; i < products.length; i++){
// //     sumOfPrice += products[i].price;
// // }
// // console.log(sumOfPrice);

// let person = {
//     myName: "arsalan",
//     age: 23,
//     greet: function(){
//         return ("Hello my name is " + this.myName);
//     }
// }
// // console.log(person.greet);
// // console.log(person.greet());
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(Object.entries(person));



// // Create an object called student with properties name, age, and course. Print the student's name.

// let student = {
//     name: "John",
//     age: 20,
//     course: "Computer Science"
// }
// console.log(student.name);
// // Create an object called car with properties brand, model, and price. Print the brand and model.

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     price: 30000
// }
// console.log(car.brand);
// console.log(car['model']);
// // Create an object called book with properties title, author, and pages. Print the title and author.

// let book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 121,
// }
// console.log(book.title);
// console.log(book.author);

// // Create an object called person with name and age. Change the person's age to a new value and print the updated object.

// let person2 = {
//     name : "Arsalan",
//     age: 21
// }
// console.log(person2);
// person2.age = 43;
// console.log(person2);


// // Create an object called product with properties name, price, and quantity. Calculate and print the total price (price × quantity).


// let product = {
//     name: "Laptop",
//     price: 50000,
//     quantity: 2
// }
// let totalPrice = product.price * product.quantity;
// console.log(totalPrice);

// // Create an object called student with name and marks. Use an if...else statement to check whether the student passed (marks 40 or above) or failed.

// let student2 = {
//     name: "Ali",
//     marks: 32
// }
// if(student2.marks >= 40){
//     console.log("Passed")
// }
// else{
//     console.log("Failed");
// }



// // Create an object called user with properties name, email, and age. Use a loop to print all the property values of the object.

// let user = {
//     name: "Ali",
//     email: "ali@gmail.com",
//     age: 32
// }
// let keys = Object.keys(user);

// for(let i = 0 ; i < keys.length; i++){
//     console.log(user[keys[i]]);
// }
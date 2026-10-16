// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for loop and while.

// for(var i = 1; i <=1000; i++){
//     // i = 1 ; 1 <= 1000 ; 1++ (2)
//     // i = 2 ; 2 <= 1000 ; 2++ (3)
//     // i = 3 ; 3 <= 1000 ; 3++ (4)
//     // i = 4 ; 4 <= 1000 ; 4++ (5)  ...
//     // i = 1000 ; 4 <= 1000 ; 1000++ (1001)
//     console.log(i);
// }
// var startingPoint = 1;
// while(startingPoint <= 1000){
//     console.log(startingPoint); //1
//     startingPoint++; //2
// }

// var count = 0;
// count++; //1
// count++; //2
// count++; //3
// count--; //2
// count++; //3
// console.log(count);

// Use a for loop to print numbers from 1 to 10.
// for(var i = 1; i <=10; i++){
//     console.log(i);
// }

// Use a for loop to print all even numbers from 1 to 20.
// for(var i = 1; i <=20; i++){
//     if(i % 2 === 0){
//         console.log('Even Number: ' + i);
//     }
// }

// Use a while loop to print numbers from 10 down to 1.
// var x = 10;
// while(x >=1){
//     console.log(x);
//     x--;
// }

// Use a while loop to calculate and print the sum of numbers from 1 to 10.
//Do it on a paper with a pen

// var i = 1;
// var sum = 0;
// while(i <= 14322){

//     sum+=i;
//     //0+=1 -> 1
//     //1+=2 -> 3
//     //3+=3 -> 6
//     //6+=4 -> 10
//     //10+=5 -> 15
//     // ...
//     i++;
// }

// console.log(sum);

// for(var i = 0; i<=5 ; i++){
//     console.log(i);
//     //break
//     if(i===3){
//         break;
//     }
// }
// for(var i = 0; i<=5 ; i++){
//     //break
//     console.log(i);
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }

// Use a for loop to print numbers from 1 to 10. Stop the loop when the number reaches 6 using break.
// for (var i = 1; i <= 10; i++) {
//   //break
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// Use a for loop to print numbers from 1 to 10, but skip 5 using continue.

// for (var i = 1; i <= 10; i++) {
//   //break
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// Use a while loop to print numbers from 1 to 10. Stop the loop when the number is 8 using break.

// var startingPoint = 1;
// while(startingPoint <= 10){
//     if(startingPoint === 8){
//         break;
//     }
//     console.log(startingPoint); 
//     startingPoint++;
// }

// Use a for loop to print numbers from 1 to 20, but skip all even numbers using continue.

// for (var i = 1; i <= 20; i++) {
//   //break
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// Question 1 : Print odd numbers in an array

// => Anonymous FN
// var result = [];
// var oddNumbers = function (arr){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(oddNumbers([1,2,3,4,5,6,7,8,9,10]));

// => IIFE
// var result = [];
// (function (arr){
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   console.log(result) 
// })([1,2,3,4,5,6,7,8,9,10])

// => Arrow fn

// var result = [];
// var oddNumbers = (arr) => {
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   return console.log(result);
// }
// oddNumbers([1,2,3,4,5,6,7,8,9,10]);



// Question 2 : Convert all the strings to title caps in a string array

// => Anonymous FN
// var titleCaps = function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return str.join(' ');
//  }
// console.log(titleCaps("THIS IS A TEST CONTENT"));

// => IIFE
// (function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     console.log(str.join(' '));
// })("THIS IS A TEST CONTENT")

// => Arrow fn
// var titleCaps = (str) => {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     } 
//     return console.log(str.join(' '));
//  }
// titleCaps("THIS IS A TEST CONTENT");
  

// Question 3 : Sum of all numbers in an array

// => Anonymous FN
// var sum = 0;
// var sumArray = function(arr){
//     for (var i = 0; i < arr.length; i++ ) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7]));

// => IIFE

// var sum = 0;
// (function(arr){
//     for (var i = 0; i < arr.length; i++ ) {
//         sum += arr[i];
//     }
//     console.log(sum) ;
// })([1, 2, 3, 4, 5, 6, 7])

// => Arrow
// var sum = 0;
// var sumArray = (arr) => {
//     for (var i = 0; i < arr.length; i++ ) {
//         sum += arr[i];
//     }
//     return console.log(sum);
// }
// sumArray([1, 2, 3, 4, 5, 6, 7]);


// Anonymous fn
let isPrime = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}
let primesFromArray =  function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        console.log(arr[i]);
      }
    }
}
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
primesFromArray(numbers);  
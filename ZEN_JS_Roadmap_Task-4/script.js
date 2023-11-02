// Q1   : Print odd numbers in an array
// Ans  :


// => Normal Fn
// function oddNums(oddNumArr){
//   let oddResult = [];
//   for(let i=0;i<oddNumArr.length;i++){
//     if(oddNumArr[i]%2!==0){
//       oddResult.push(oddNumArr[i]);
//     }
//   }
//   return oddResult;
// };
// console.log(oddNums([1,2,3,4,5,6,7,8,9,10]));

// => ANONYMOUS FN
// const oddNumbers = function (arr){
// let result = [];
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(oddNumbers([1,2,3,4,5,6,7,8,9,10]));

// => IIFE
// (function (arr){
//   let result = [];
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   console.log(result);
// })([1,2,3,4,5,6,7,8,9,10])

// => ARROW FN
// const oddNumbers = (arr) => {
// let result = [];
//   for(var i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result.push(arr[i]);
//     }
//   }
//   return console.log(result);
// }
// oddNumbers([1,2,3,4,5,6,7,8,9,10]);

// ---------------------------------------------------------------------------------------------------------------------

// Q2   : Convert all the strings to title caps in a string array
// Ans  :

// => Normal Fn
// function titleCase(titleArr){
//   let titleCaseResult = titleArr.toString();
//   let titleData = titleCaseResult.toLowerCase().split(" ");
//   for(let i=0;i<titleData.length;i++){
//     titleData[i] =  titleData[i].charAt(0).toUpperCase() + titleData[i].slice(1); 
//   }
//   return titleData.join(" ");
// }
// console.log(titleCase("this IS VIjayEswar"));

// => ANONYMOUS FN
// const titleCaps = function (titleArr) {
//   let titleCaseResult = titleArr.toString();
//   let titleData = titleCaseResult.toLowerCase().split(" ");
//   for(let i=0;i<titleData.length;i++){
//     titleData[i] =  titleData[i].charAt(0).toUpperCase() + titleData[i].slice(1); 
//   }
//   return titleData.join(" ");
// }
// console.log(titleCaps("this IS VIjayEswar"));

// => IIFE
// (function (titleArr) {
//   let titleCaseResult = titleArr.toString();
//   let titleData = titleCaseResult.toLowerCase().split(" ");
//   for(let i=0;i<titleData.length;i++){
//     titleData[i] =  titleData[i].charAt(0).toUpperCase() + titleData[i].slice(1); 
//   }
//   console.log(titleData.join(' '));
// })("this IS VIjayEswar")

// => ARROW FN
// const titleCaps = (titleArr) => {
//   let titleCaseResult = titleArr.toString();
//   let titleData = titleCaseResult.toLowerCase().split(" ");
//   for(let i=0;i<titleData.length;i++){
//     titleData[i] =  titleData[i].charAt(0).toUpperCase() + titleData[i].slice(1); 
//   }
//     return console.log(titleData.join(' '));
// }
// titleCaps("this IS VIjayEswar");
  
// ---------------------------------------------------------------------------------------------------------------------

// Q3   : Sum of all numbers in an array
// Ans  : 

// => Normal Fn
// function sumArray(arrayNums){
//   let sum = 0;
//   for (var i = 0; i < arrayNums.length; i++ ) {
//     sum += arrayNums[i];
//   }
//   return sum;
// }console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// => ANONYMOUS FN

// const sumArray = function(arrayNums){
//  let sum = 0;
//    for (var i = 0; i < arrayNums.length; i++ ) {
//        sum += arrayNums[i];
//    }
//    return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// => IIFE
// (function(arrayNums){
//   let sum = 0;
//    for (var i = 0; i < arrayNums.length; i++ ) {
//        sum += arrayNums[i];
//    }
//    console.log(sum);
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// => ARROW FN
// var sumArray = (arrayNums) => {
//   let sum = 0;
//   for (var i = 0; i < arrayNums.length; i++ ) {
//       sum += arrayNums[i];
//   }
//   return console.log(sum);
// }
// sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ---------------------------------------------------------------------------------------------------------------------

// Q4   : Return all the prime numbers in an array
// Ans  : 

// ANONYMOUS FN
// let isPrime = function (num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
// }
// let primesFromArray =  function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (isPrime(arr[i])) {
//         console.log(arr[i]);
//       }
//     }
// }
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// primesFromArray(numbers);  

// ---------------------------------------------------------------------------------------------------------------------

// Q5   : Return all the palindromes in an array
// Ans  : 

// =>Normal fn
function palindrome(palindromeArr){
  let result = [];
  for (let i=0;i<palindromeArr.length;i++){
    let palindromedata = palindromeArr[i].split("").reverse().join("");
    if(palindromedata == palindromeArr[i]){
      result.push(palindromeArr[i]);
    }
  }
  return result;
}
console.log(palindrome(["madam","dad","data"]));

// =>ANONYMOUS FN
// const palindromeArray = function(palindromeArr){
//   let result = [];
//   for (let i=0;i<palindromeArr.length;i++){
//     let palindromedata = palindromeArr[i].split("").reverse().join("");
//     if(palindromedata == palindromeArr[i]){
//       result.push(palindromeArr[i]);
//     }
//   }
//   return result;
// }
// console.log(palindrome(["madam","dad","data","121"]));

// =>IIFE
// (function(palindromeArr){
//   let result = [];
//   for (let i=0;i<palindromeArr.length;i++){
//     let palindromedata = palindromeArr[i].split("").reverse().join("");
//     if(palindromedata == palindromeArr[i]){
//       result.push(palindromeArr[i]);
//     }
//   }
//   console.log(result);
// })(["madam","dad","data","131"]);

// => ARROW FN







// ---------------------------------------------------------------------------------------------------------------------


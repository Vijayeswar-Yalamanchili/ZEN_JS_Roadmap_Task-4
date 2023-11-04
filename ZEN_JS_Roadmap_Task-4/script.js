// Q1   : Print odd numbers in an array
// Ans  :


// => NORMAL FN
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

// => NORMAL FN
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

// => NORMAL FN
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

// =>NORMAL FN

// =>ANONYMOUS FN
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

// =>IIFE
// (function () {
//     let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
//     // Function to check if a number is prime
//     function isPrime(num) {
//         if (num <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//           if (num % i === 0) {
//             return false;
//           }
//         }
//         return true;
//     }
//     // Function to filter prime numbers from the array
//     function primesFromArray(arr) {
//         let primeNumbers = [];
//         for (let i = 0; i < arr.length; i++) {
//           if (isPrime(arr[i])) {
//             primeNumbers.push(arr[i]);
//             // console.log(arr[i]);
//           }
//         }
//         return primeNumbers;
//     }
//     var result = primesFromArray(numbers);
//     console.log(result);
// })()

// =>ARROW FN
// const isPrime = num => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };
  
//   const findPrimes = arr => arr.filter(num => isPrime(num));
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeNumbers = findPrimes(numbers);
  
//   console.log(primeNumbers);
  
// ---------------------------------------------------------------------------------------------------------------------

// Q5   : Return all the palindromes in an array
// Ans  : 

// =>NORMAL FN
// function palindrome(palindromeArr){
//   let result = [];
//   for (let i=0;i<palindromeArr.length;i++){
//     let palindromedata = palindromeArr[i].split("").reverse().join("");
//     if(palindromedata == palindromeArr[i]){
//       result.push(palindromeArr[i]);
//     }
//   }
//   return result;
// }
// console.log(palindrome(["madam","dad","data"]));

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
// console.log(palindromeArray(["madam","dad","data","121"]));

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
// const palindromeArray = (palindromeArr) => {
//   let result = [];
//   for (let i=0;i<palindromeArr.length;i++){
//     let palindromedata = palindromeArr[i].split("").reverse().join("");
//     if(palindromedata == palindromeArr[i]){
//       result.push(palindromeArr[i]);
//     }
//   }
//   return result;
// }
// console.log(palindrome(["madam","dad","data","454"]));

// ---------------------------------------------------------------------------------------------------------------------

// Q6   : Return median of two sorted arrays of the same size.
// Ans  :

// =>NORMAL FN
// let arr1 = [1,3,5,7]
// let arr2 = [2,4,6,8]
// function findMedian(arr1,arr2){
//     let arry = [...arr1,...arr2];
//     arry.sort((a,b)=> a-b)
//     let n = arry.length;
//     if(n%2 === 0){
//         // (arryname[length/2]+arryname[length/2 - 1])/2 for even number formula
//         return ((arry[n/2] + arry[(n/2)-1])/ 2);
//     }else{
//         // (arryname[length/2] for odd number formula
//         return arry[Math.floor(n/2)];
//     }
//     return arry;
// }
// console.log((findMedian(arr1,arr2)));

// =>ANONYMOUS FN
// let arr1 = [1,3,5,7]
// let arr2 = [2,4,6,8]
// const findMedian = function(arr1,arr2){
//     let arry = [...arr1,...arr2];
//     arry.sort((a,b)=> a-b)
//     let n = arry.length;
//     if(n%2 === 0){
//         // (arryname[length/2]+arryname[length/2 - 1])/2 for even number formula
//         return ((arry[n/2] + arry[(n/2)-1])/ 2);
//     }else{
//         // (arryname[length/2] for odd number formula
//         return arry[Math.floor(n/2)];
//     }
//     // return arry;
// }
// console.log((findMedian(arr1,arr2)));

// =>IIFE
// let arr1 = [1,3,5,7];
// let arr2 = [2,4,6,8];
// (function(arr1,arr2){
//     let arry = [...arr1,...arr2];
//     arry.sort((a,b)=> a-b)
//     let n = arry.length;
//     if(n%2 === 0){
//         // (arryname[length/2]+arryname[length/2 - 1])/2     for even number formula
//         // return ((arry[n/2] + arry[(n/2)-1])/ 2);
//         console.log(((arry[n/2] + arry[(n/2)-1])/ 2));
//     }else{
//         // (arryname[length/2]                               for odd number formula
//         // return arry[Math.floor(n/2)];
//         console.log(arry[Math.floor(n/2)]);
//     }
// })(arr1,arr2)

// ---------------------------------------------------------------------------------------------------------------------

// Q7   : Remove duplicates from an array
// Ans  : 

// =>NORMAL FN
// function removeDuplicates(duplicateArr) {
//   var result = [];  
//   for (var i = 0; i < duplicateArr.length; i++) {
//     if (result.indexOf(duplicateArr[i]) === -1) {
//       result.push(duplicateArr[i]);
//     }
//   }  
//   return result.sort();
// }
// console.log(removeDuplicates([1, 6, 2, 3, 4, 2, 1, 5]));


// =>ANONYMOUS FN
// const duplicateArrays = function(duplicateArr) {
//   let result = [];  
//   for (var i = 0; i < duplicateArr.length; i++) {
//     if (result.indexOf(duplicateArr[i]) === -1) {
//       result.push(duplicateArr[i]);
//     }
//   }  
//   return result.sort();
// }
// console.log(duplicateArrays([1, 6, 2, 3, 4, 2, 1, 5]));

// =>IIFE
// (function(duplicateArr) {
//   let result = [];  
//   for (var i = 0; i < duplicateArr.length; i++) {
//     if (result.indexOf(duplicateArr[i]) === -1) {
//       result.push(duplicateArr[i]);
//     }
//   }
//   console.log(result.sort());
// })([1, 6, 2, 3, 4, 2, 1, 5]);


// ---------------------------------------------------------------------------------------------------------------------

// Q8   : Rotate an array by k times
// Ans  : 

// =>NORMAL FN
// function arrKtimes(arr,k){
//         for (let i = 0; i < k; i++) {
//             arr.push(arr[i])  
//         }
//         for (let i = 0; i < k; i++) {
//             arr.shift();        
//         }
//         return arr;
//     }
// console.log(arrKtimes([1,2,3,4,5,6,7,8],6));

// =>ANONYMOUS FN
// const arrKtimes = function(arr,k){
//     for (let i = 0; i < k; i++) {
//         arr.push(arr[i])        
//     }
//     for (let i = 0; i < k; i++) {
//         arr.shift();        
//     }
//     return arr;
// }
// console.log(arrKtimes([1,2,3,4,5],2));

// =>IIFE
// (function(arr,k){
//     for (let i = 0; i < k; i++) {
//         arr.push(arr[i])        
//     }
//     for (let i = 0; i < k; i++) {
//         arr.shift();        
//     }
//     console.log(arr);

// })([1,2,3,4,5],2)

// ---------------------------------------------------------------------------------------------------------------------
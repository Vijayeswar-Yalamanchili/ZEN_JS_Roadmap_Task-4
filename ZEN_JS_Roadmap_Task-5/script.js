// Q1   : For the given JSON iterate over for loop, for in loop & for of loop

// Ans  :

// let arr = [
// {
//     "name":"john",
//     "age":"20"
// },
// {
//     "name":"Doe",
//     "age":"30"
// },
// {
//     "name":"Wick",
//     "age":"40"
// }
// ]

// // for loop
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i].name,arr[i].age)
// }

// // for in loop
// for( let key in arr){
//     console.log(arr[key].name);
// }

// // for of loop
// for( let obj of arr){
//     console.log(obj.age);
// }

//-----------------------------------------------------------------------------------------------------

// Q2  : Create your own resume in JSON format

// Ans :

// let myResume={
//     "basics": {
//       "name": "Vijayeswar",
//       "email": "vijayeswar_y@yahoo.com",
//       "phone": 9087054504,
//       "degree": "B.E",
//       "location": {
//         "city": "Chennai",
//         "state": "Tamilnadu",
//         "country": "India"
//       },
//     },
//     "education": [
//       {
//         "institution": "JNNIE",
//         "department": "Mechanica; Engineering",
//         "studyType": "fulltime",
//         "batch start year": 2013,
//         "batch end year": 2017,
//       }
//     ],
//     "skills": [ "HTML", "CSS", "JavaScript"],
// }
// console.log(myResume);
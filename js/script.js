"use strict";

// // 1
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((result) => {
//     localStorage.setItem("user", JSON.stringify(result));
//   })
//   .catch((error) => console.error(error));

// const storedUser = localStorage.getItem("user");

// if (storedUser) {
//   console.log(JSON.parse(storedUser));
// } else {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((result) => {
//       localStorage.setItem("user", JSON.stringify(result));
//     })
//     .catch((error) => console.error(error));
// }

// 2
function isValidDateFormat(str) {
  const regexp = /^\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}$/;

  return regexp.test(str);
}

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false

// // 3
// function isAfter(firstDate, secondDate) {
//   const enteredFirstDate = new Date(firstDate);
//   const enteredSecondDate = new Date(secondDate);

//   if (
//     enteredFirstDate.toString() === "Invalid Date" ||
//     enteredSecondDate.toString() === "Invalid Date"
//   ) {
//     throw Error("Please, enter a valid date");
//   }
//   return enteredFirstDate > enteredSecondDate;
// }

// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
// console.log(isAfter(1648636135000, 1648549735000)); // true
// console.log(isAfter(1648549735000, 1648636135000)); // false
// console.log(isAfter(1648549735000, "dsasasd")); // Error

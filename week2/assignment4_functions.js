// let add =(a,b) =>{
//     return a+b;
// }

// function avg(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average);
// }

// let oddOrEven = (a) =>{
//     if(a%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd")
//     }
// }

// const reverseString = (str) => {
//     return str.split('').reverse().join('');
//   }
//   console.log(reverseString("Meow"));

// let celciusToFarh = (a)=>{
//     var fahrenheit = (a* 9/5) + 32;
//     return fahrenheit;
// }

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   return cleanStr === cleanStr.split("").reverse().join("");
// }

// function capitalizeFirstLetter(sentence) {
//   return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// function countOccurrences(arr, target) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// function intToRoman(num) {
//   const romanNumerals = [
//     { value: 1000, numeral: "M" },
//     { value: 900, numeral: "CM" },
//     { value: 500, numeral: "D" },
//     { value: 400, numeral: "CD" },
//     { value: 100, numeral: "C" },
//     { value: 90, numeral: "XC" },
//     { value: 50, numeral: "L" },
//     { value: 40, numeral: "XL" },
//     { value: 10, numeral: "X" },
//     { value: 9, numeral: "IX" },
//     { value: 5, numeral: "V" },
//     { value: 4, numeral: "IV" },
//     { value: 1, numeral: "I" },
//   ];

//   let result = "";
//   for (let i = 0; i < romanNumerals.length; i++) {
//     while (num >= romanNumerals[i].value) {
//       result += romanNumerals[i].numeral;
//       num -= romanNumerals[i].value;
//     }
//   }
//   return result;
// }

// function calculateCircleArea(radius) {
//     return Math.PI * radius ** 2;
// }

// function truncateString(str, maxLength) {
//     if (str.length <= maxLength) {
//         return str; 
//     } else {
//         return str.slice(0, maxLength) + "...";  
//     }
// }

// function containsOnlyDigits(str) {
//     return /^\d+$/.test(str);
// }

// function removeFalsyValues(arr) {
//     return arr.filter(Boolean);
// }

// function capitalizeFirstLetter(sentence) {
//   return sentence.replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function getUniqueValues(arr) {
//     return Array.from(new Set(arr));
// }

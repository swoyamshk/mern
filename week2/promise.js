// let promise = new Promise(
//     (resolve, reject)=>{
//     let success= true;
//     if(success){
//         resolve("Promise Resolved");
//     }else{
//         reject("Promise Rejected");
//     }
// });

let a=5;
let b=6;
let promise = new Promise((resolve, reject) => {
  if (a - b < 5) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});
// //if promise is resolved then the .then is run if prommise is not resolved the catch is run
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// Promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    promise obbject promises "I promise to return a value"
//                    PENDING -> RESOLVED or REJECTED
//                   new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("You walk the dog ");
//       } else {
//         reject("You DIDN'T walk the dog");
//       }
//     }, 2500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = false;
//       if (kitchenCleaned) {
//         resolve("You clean the kitchen ");
//       } else {
//         reject("You DIDN'T clean the kitchen");
//       }
//     }, 1500);
//   });
// }

// cleanKitchen()
//   .then((value) => {
//     console.log(value);
//     return walkDog();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the chores!");
//   })
//   .catch((error) => console.error(error));

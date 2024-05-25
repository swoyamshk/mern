//1.
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }


//2.
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= 5; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

//3.
// for (let i = 5; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

//4.
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 5; j >= i; j--) {
//     stars += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     stars += "*";
//   }
//   for (let l = 1; l < i; l++) {
//     stars += "*";
//   }
//   console.log(stars);
// }


//5.
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//       stars += " ";
//     }
//     for (let k = 5; k >= i; k--) {
//       stars += "*";
//     } for (let l = 5; l> i; l--) {
//         stars += "*";
//       }
//     console.log(stars);
//   }

//6.
// for(let i =1; i<=5;i++){
//     let stars= "";
//     for(let j =1; j<=5;j++){
//         if(i==1||j==1||i==5||j==5){
//             stars+= '* ';
//         }else{
//             stars += "  ";
//         }
//     }
//     console.log(stars);
// }

//7.
// for(let i =1; i<=5;i++){
//     let stars= "";
//     for(let j =1; j<=5;j++){
//         if(i==j || i+j == 6){
//             stars+= '* ';
//         }else{
//             stars += "  ";
//         }
//     }
//     console.log(stars);
// }


//9.
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += j;
//   }
//   console.log(stars);
// }

//10.
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += i;
//   }
//   console.log(stars);
// }


//11.
// let num = 5;
// for (let i = num; i >= 1; i--) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += j;
//   }
//   console.log(stars);
// }

//12.
// let num = 5;
// for (let i = num; i >= 1; i--) {
//   let stars = "";
//   for (let j = num; j >= 1; j--){
//     stars += j;
//   }
//   console.log(stars);
// }

//13.
// for(i=1; i<=5; i++){
//     let stars = "";
//     for(let j =5; j>=i ; j--){
//         stars += " ";
//     }for(let k = 1;k<=i;k++){
//         stars += "*";
//     }
//     console.log(stars);
// }

//14.
// let num = 5
// for(i = num ; i>=1;i--){
//     let ladder = "";
//     for(let j =1; j<=i;j++){
//         ladder += j
//     }
//     console.log(ladder);
// }

//15.
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 0; j < i; j++) {
//     row += alphabet[j];
//   }
//   console.log(row);
// }
//1. Size of Rows(How many you want in the pattern)
//2. Putting together nested loops

//Square pattern
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= 5; j++) {
//       stars += "* ";
//   }
//   console.log(stars);
// }

//Increasing Triangle
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "* ";
//     }
//     console.log(stars);
// }

//Decreasing Triangle
// for (let i = 5; i >= 1; i--) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "* ";
//     }
//     console.log(stars);
// }

//Right angled triangle
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for(let j = 5; j>=i ; j--){
//       stars += " "
//     }
//     for(k=1; k<=i;k++){
//       stars += "*";
//     }
//     console.log(stars);
// }

//Reversed Right Angled triangle
// for(let i =1; i <= 5; i++){
//   let stars="";
//   for(j=1;j<=i;j++){
//     stars += " ";
//   }
//   for(let k=5;k>=i;k--){
//     stars += "*";
//   }
 
//   console.log(stars);
// }



//Parallelogram
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for(let j = 5; j>=i ; j--){
//     stars += " "
//   }
//   for(k=1; k<=5;k++){
//     stars += "*";
//   }

//   console.log(stars);
// }



//Pyramid
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for(let j = 5; j>=i ; j--){
//       stars += " "
//     }
//     for(let k=1; k<=i;k++){
//       stars += "*";
//     }
//     for(let l=1; l<i;l++){
//       stars += "*";
//     }
//     for(let m = 5; m>=i ; m--){
//       stars += " ";
//     }
//     console.log(stars);
// }


//Inverted Pyramid
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for(j=1;j<=i;j++){
//     stars += " "
//   }
//   for(k=5;k>=i;k--){
//     stars += "*";
//   }
//   for(l=5;l>i;l--){
//     stars += "*";
//   }
//   console.log(stars);
// }


//Hollow Square
// for (let i = 0; i < 5; i++) {
//   let line = '';
//   for (let j = 0; j < 5; j++) {
//       if (i === 0 || i === 4 || j === 0 || j === 4) {
//           line += '*';
//       } else {
//           line += ' ';
//       }
//   }
//   console.log(line);
// }

//Hollow Pattern
//Parallel bar
// for(let i= 1; i<=5; i++){
//   let stars = "";
//   for(let j=1;j<=5;j++){
//     if(j==1 || j==5){
//       stars+= "* ";
//     }else{
//       stars += "  ";
//     }
   
//   }
//   console.log(stars);
// }

// //Hollow Square
// for(let i= 1; i<=5; i++){
//   let stars = "";
//   for(let j=1;j<=5;j++){
//     if(j==1 || j==5 || i==1 || i==5){
//       stars+= "* ";
//     }else{
//       stars += "  ";
//     }
   
//   }
//   console.log(stars);
// }

// //X pattern
// for(let i= 1; i<=5; i++){
//   let stars = "";
//   for(let j=1;j<=5;j++){
//     if(j==i|| (i+j == 6)){
//       stars+= "* ";
//     }else{
//       stars += "  ";
//     }
   
//   }
//   console.log(stars);
// }

//Plus Pattern
// for(let i= 1; i<=5; i++){
//   let stars = "";
//   for(let j=1;j<=5;j++){
//     if(i==3 || j==3){
//       stars+= "* ";
//     }else{
//       stars += "  ";
//     }
   
//   }
//   console.log(stars);
// }

for(let i= 1; i<=5; i++){
  let stars = "";
  for(let j=1;j<=5;j++){
    if(i==1 ||j==1 ||i ==5 ||j==5 || i == j|| i+j ==6){
      stars += "* ";
    }else{
      stars += "  ";
    }
  }
  console.log(stars);
}
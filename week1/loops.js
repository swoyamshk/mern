// for(let i =1; i<=10; i++){
//     console.log(i);
// }


// for(let i =10; i>=0; i--){
//     console.log(i);
// }


//1.
// let j = 1;
// while(j<=5){
//     console.log(j);
//     j++
// }


// let k = 5;
// while(k>= -1){
//     console.log(k);
//     k--
// }

// let j = 1;
// do{
//     console.log(j);
//     j++;
// }while(j<=10);


//3.
// let sum = 0;
// for(let i = 1; i<=10;i++){
//     sum += i;
//     console.log(sum);
// }

//4.
// let factorial = 5;
// let res = 1;
// while(factorial >= 1){
//     res *= factorial;
//     factorial--;
//     console.log(res);
// }

//5.
// for(let num = 1; num <= 5; num++){
//     console.log(num*num)
// }

//6.
// for(let num = 1; num <= 5; num++){
//     console.log(num*num*num);
// }

//7.
// let arr1 = ["a","b","c"];
// for(let i = 0 ; i<arr1.length;i++){
//     console.log(arr1[i]);
// }

//8.
// let arr2 = [2,4,6,8,10];
// let i = 0;
// let sum = 0;
// while(i<arr2.length){
//     sum += arr2[i];
//     i++
//     console.log(sum);
// }

//9.
// arr3 = ["a","b","c"];
// for(let i = arr3.length-1;i>=0; i--){
//     console.log(arr3[i]);
// }


// arr4 = [20,10,8,7,6]
// let sum = 0
// for(i = 20; i<=0; i--){
//     sum += i;
//     console.log(sum);
// }



//10.
// let array1 = [5,6,9,8];
// let max = 0;
// let i = array1.length - 1;
// while(i>=0){
//     if(array1[i]>max){
//         max = array1[i];
//     }
//     i--;
// }
// console.log(max);






//11.
// let sum1=0 
// for(i=1;i<=20;i++)
// {
//   if(i%2==0)
//   {
//     sum1=sum1+i
//   }
// }
// console.log(sum1);

//12.
// let product = 1;
// let i =1;
// while(i<=15){
//     if(i%2 !== 0){
//         product *= i;
//     }
//     i++;
// }
// console.log(product);

//13.
// for(let i =1;i <=5;i++){
//     let stars = "";
//     for(let j = 1;j <=i; j++){
//         stars += "*"
//     }
//     console.log(stars);
// }

//14.


//15.
// let factorial = 6;
// let res = 1;
// while(factorial >= 1){
//     res *= factorial;
//     factorial--;
//     console.log(res);
// }

//16.

//18.
// Initialize the first two Fibonacci numbers and a counter
let a = 0, b = 1, count = 0;

// Print the first 10 Fibonacci numbers
while (count < 10) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}



// let number1 = 15
// let product = 1;

// while(number1 >= 1){
//     number1--;
//     if(number1%3==0){
//         product *= number1;
//         console.log(product);
//     }
// }


// let star="x";
// for(let i=0; i<=5; i++){
//     star += "x";
//     console.log(star);
// }
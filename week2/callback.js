// function add(a,b,printResult){ //printResult is a callback function
//   printResult();
//   return a+b;
// }
// let result = add(2,3, printResult);
// console.log(result);

// function printResult(){
//     console.log("The result is");
// }



// function Calculator(a,b,add,subtract){
//     add();
//     subtract();
//     return a+b;
// }
// let add = Calculator(2,3,add);
// console.log(add);
// let subtract1 = Calculator(2,3,subtract);
// console.log();

// function sum(a, b, sub) {
//   console.log(sub(1,5));
//   return a + b;
// }

// let result2 = sum(2, 3, sub);
// console.log(result2);

// function sub(a, b) {
//   return a - b;
// }











function hello(){
  setTimeout(function(){
    console.log("Hello")
  }, 3000);
}

function goodbye(){
  console.log("goodbye")
}

hello();
goodbye();

//Callback function is used to do soem task in order
// callback = a function that is passed as an argument to another function.
// function hello(callback){
//   console.log("hello");
//   callback();//calling or invoking the function
// }

// function wait(){
//   console.log("wait");
// }

// function leave(){
//     console.log("Leave");
// }

// function goodbye(){
//   console.log("goodbye")
// }

// hello(wait);



// function sum(x,y, callback){
//   let result=x+y;
//   callback(result);
// }

// function displaytoConsole(result){
//   console.log(result)
// }



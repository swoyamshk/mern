// function add(a,b,printResult){ //printResult is a callback function
//     printResult();
//     console.log('\n');
//     return a+b;
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

function sum(a, b, sub) {
  console.log(sub(1,5));
  return a + b;
}

let result2 = sum(2, 3, sub);
console.log(result2);

function sub(a, b) {
  return a - b;
}

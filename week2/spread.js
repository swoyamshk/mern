const arr = [1,2,3];
const newArr = [5,5, arr[0],arr[1],arr[2]];
console.log("New array", newArr);


const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combinedArr = [...arr1,...arr2];
console.log(combinedArr); 
const copiedArr = [...arr1];
console.log(copiedArr);


const obj1= {a:1,b:1};
const obj2= {c:1,d:1};
const mergedObj = {...obj1,...obj2};
console.log(mergedObj);

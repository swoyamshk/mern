const  arr = [1,2,3,4,5];

const first =arr[0];
//const rest = arr.slice(1);//prints including index 1 and excluding 0;
console.log(first);
console.log(rest);

// console.log(...first, ...rest);


const[a,b,...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);

function add(...arr){
    return arr.reduce((sum,num)=> sum+num,0);
}
function mul(...arr){
    return arr.reduce((mul,num)=> mul*num,1);
}

console.log(mul(1,2,3,4))
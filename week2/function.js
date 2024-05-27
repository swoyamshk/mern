function addNum(a, b){
    let sum = a + b;
    console.log(sum);
}

function avg(a,b,c){
    let average = (a+b+c)/3;
    console.log(average);
}

function oddOrEven(a){
    if(a%2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

//Function Expression
let greet = function(name){ //Function without a name
    console.log(name);
};
greet("John");

let subtract = function(a,b){
    console.log(a-b);
}

//ES6 function
let multiply = (a,b) =>{
    return a*b;
}

let divide = (a,b) =>{
    return a/b;
}


function Person(name, age){
    this.name = name;
    this.age = age;
}
let john = new Person("John", 25);



arr1 = [1,2,3,4]; //Homogeneous data types
obj1 = {           //Heterogeneuous data types
    name:"John",
    age:30,
    hobbies: ["playing", "sleeping"]
}
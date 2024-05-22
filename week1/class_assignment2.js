let num1 = 2;
if (num1 > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

switch(true){
    case (num1>0):
        console.log("Positive");
        break;
    case (num1<0):
        console.log("Negative");
        break;
    case (num1 == 0):
        console.log("Zero");
        break;
    default:
        console.log('Invalid');
}


let age = 16;
if (age >= 18) {
  console.log("User is eligible to vote");
} else {
    console.log("He is not eligible")
}

let day = 3;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday"); 
        break;  
    case 4:
        console.log("Wednesday");    
        break;
    case 5:
        console.log("Thursday");    
        break;
    case 6:
        console.log("Friday");    
        break;
    case 7:
        console.log("Saturday");    
        break;
    default:
        console.log("Invalid day");
        break; 
}


let str1 = "String"
if(str1.length> 10){
    console.log("More than 10")
}
else if (str1.length<10){
    console.log("Less than 10")
}else{
    console.log("Equal to 10")
}

let score = 50;
if(score>= 90){
    console.log("Distinction");
}else if(score>=70){
    console.log("A")
}else if(score>=60){
    console.log("B")
}else if(score>=50){
    console.log("C")
}else if(score>=40){
    console.log("D")
}else{
    console.log("Fail");
}



let month = 3;
switch(day){
    case 1:
        console.log("January has 31 days");
        break;
    case 2:
        console.log("February has 29 days");
        break;
    case 3:
        console.log("March has 31 days"); 
        break;  
    case 4:
        console.log("April has 30 days");    
        break;
    case 5:
        console.log("May has 31 days");    
        break;
    case 6:
        console.log("June has 30 days");    
        break;
    case 7:
        console.log("July has 31 days");    
        break;
    case 8:
        console.log("August has 31 days");    
        break;
    case 9:
        console.log("September has 30 days");    
        break;
    case 10:
        console.log("October has 30 days");    
        break;
    case 11:
        console.log("November has 30 days");    
        break;
    case 12:
        console.log("December has 30 days");    
        break;
    default:
        console.log("Invalid month");
        break; 
}

let year = 2024;
if(year%4 === 0 && year%100 !== 0){
    console.log("Leap Year");
}else{
    console.log("Not a leap year")
}

let height = 1.75;
let weight = 60;
let bmi = weight/(height^2);

switch(true){
    case (bmi<18.5):
        console.log("Underweight");
        break;
    case (bmi<24.5 && bmi>18.5):
        console.log("Healthy Weight");
        break;
    case (bmi>25 && bmi<29.9):
        console.log("Overweight");
        break;
    default:
        console.log("Obese");
    
}

console.log(bmi);

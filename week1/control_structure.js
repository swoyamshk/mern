// if (condition) {
//   //do something
// } else if (secondcondition) {
// } else {
// }

let day = 2;
if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid");
}


//Switch Case

// switch(expression){ 
//     case value1:
//         //do something
//         break;
//     case value2:
//         //do something
//         break;
//     case value3:
//         //do something
//         break; //Terminate //If there is no break it prints everything

// }

let day2 = 3;
switch(day2){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;  
    case 3:
        console.log("Wednesday");    
        break;
    default:
        console.log("Invalid day");
        break; 
}
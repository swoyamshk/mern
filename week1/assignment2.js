let password = "Password";
let lenPassword = password.length;
if (lenPassword > 12) {
  console.log("Strong password");
} else if (lenPassword > 8 && lenPassword.length < 12) {
  console.log("Medium Password");
} else {
  console.log("Weak Password");
}


let char2 = "v";
if (
  char2 === "a" && //Check if the char2 contains these characters
  char2 === "e" &&
  char2 === "i" &&
  char2 === "o" &&
  char2 === "u"
) {
  console.log("It is a vowel");
} else {
  console.log("It is a consonant");
}

let randomNumber = Math.floor(Math.random() * 10) + 1; //Math is a javascript library for mathematical functions
let guess = Number(prompt("Enter the number to guess: "));
while (guess !== randomNumber) { //the loop runs until guess is not equal to randomnumber
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (guess === randomNumber) {
    console.log("Correct!");
  } else {
    if (guess < randomNumber) {
      console.log("Guess higher!");
    } else {
      console.log("Guess lower!");
    }
  }
}

let price = prompt("Enter the price of the product: ");
let pricetoNum = Number(price);
if (!isNaN(pricetoNum)) {
  console.log(pricetoNum + (8 / 100) * pricetoNum);//taxation formula
} else {
  console.log("The input is not a number");
}

let calcNum1 = Number(prompt("Enter first number: "));
let calcNum2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter an operator(+,-,*,/): ");

if (!isNaN(calcNum1) && !isNaN(calcNum2)) {
  let add = calcNum1 + calcNum2;
  let subtract = calcNum1 - calcNum2;
  let multiply = calcNum1 * calcNum2;
  let divide = calcNum1 / calcNum2;
  if (operator === "+") {
    console.log(add);
  } else if (operator === "-") {
    console.log(subtract);
  } else if (operator === "*") {
    console.log(multiply);
  } else if (operator === "/") {
    if (calcNum2 !== 0) {
      console.log(divide);
    } else {
      console.log("Cannot divide by zero");
    }
  } else {
    console.log("Invalid Operator");
  }
} else {
  console.log("Please enter a number.");
}



let age = 18;
if (age >= 18) {
  console.log("Drama");
} else if (age < 18 && age > 10) {
  console.log("Action");
} else {
  console.log("Animation");
}

let number1 = 2;
if (number1 > 0) {
  console.log("Positive");
} else if (number == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

let divisibleNum = 20;
if (divisibleNum % 3 === 0 && divisibleNum % 5 === 0) {
  console.log("Divisible by both 3 and 5.");
} else if (divisibleNum % 3 === 0) {
  console.log("Divisible by 3");
} else if (divisibleNum % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by both 3 and 5");
}

let num1 = 8,
  num2 = 10;
let sum = num1 + num2;
if (sum % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let date = new Date(2022, 12, 22); //Date is an in-built js object
let dayOfWeek = date.getDay(); //getDay works the same switch case used before
if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log("The day is a weekend day!");
} else {
  console.log("The is not a weekend day.");
}

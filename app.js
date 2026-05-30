/**
 * 
EXAMPLE 1
/** 
*  Converting Temperatures
*
*  Celsius to Fahrenheit
*
*   F =  C X 1.8 + 32
*/

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32; 

console.log(fahrenheit)

let bool = '1' === 1; //true
console.log (bool)
/*
EXAMPLE 2
*/
let subcribed = false;
let loggedIn = true;

if (subcribed === true) {
  console.log('show the video');
}

else if (loggedIn === true) {
  console.log('tell the user to upgrade their subscription');
}
else {
  console.log('tell the user to log into account');
} 
/*
EXAMPLE 3
*/
let cash = 100;
let price = 200;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
}
else if (cash === price) {
  console.log('you paid the exact amount, have a nice day!');
}
else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`);
}
/*
EXAMPLE 4
*/
 let money = 50;
 let total = 40;
 let isStoreOpen = false;

 if (money >= total && isStoreOpen === true) {
  console.log('print the reciept')
 }
/*
 EXAMPLE 5
 if (cash >= price || isStoreOpen) {
  console.log('print the reciept')
 }
  */
 /*
 EXAMPLE 6
 if (cash >= price  !isStoreOpen) {
  console.log('print the reciept')
 }
*/
let val = "";

if ("") {
  console.log("truthy value", !!val);
}

else {
  console.log( !!val);
}

let hot = false;

hot ? console.log('weather is hot outside') : console.log('weather is cold');
/*
EXAMPLE 7 
*/
let subscribe = false;
let loggedInn = true;

let str = subscribe || loggedInn ? 'show the videos' : 'hide the videos';
console.log(str);

let funds = 50;
let expense = 40;
let isStoresOpen = true;

let string = funds >= expense && isStoresOpen ? "print the receipt" : "do not give receipt";
console.log(string);

/*

3 LOOPS

*/
/*let count = 1;
  console.log(count);*/

//DRY = Don't  repeat yourself 
/*
let count = 1;
 
while (count <= 100) {
  
  count = count + 1;
  console.log('this ran')
}
*/
/* i stands for index */
/*for (let i = 0; i < 3; i = i + 1) {
  console.log (i);
} */
/**
 *  i++ or ++i 
 * */
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
for (let i = 1; i <= 20; i++) { 
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} ->FrontendSimplified`);
  }
  else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  }
  else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  }
  else {
    console.log(`${i} -> ${i}`)
  }
} 

let stri = "Frontend Simplified";
for (let i = 0; i < stri.length; i++) {
  console.log(stri[i]);
}
/**
 * 
 * EXAMPLE 8
 * 
 */ 
// DRY = Domn't Repeat Yourself
//console.log('Welcome to FES, David');
//console.log('Welcome to FES, Zen');
//console.log('Welcome to FES, Mitri')
//
//function welcomePersonToFES() {
// console.log('Welcome to FES, David')
//} 

// You want the name to be dynamic!
// We need to accept something called a parameter!
// name is the parameter in this example
// Function Definition
//**function welcomePersonToFES(firstName, lastName) {
  //**   console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`)
//} 

// Call the function
//**welcomePersonToFES('Doneesa', 'Hughes');
//**welcomePersonToFES('John', 'Doe');
//**welcomePersonToFES('Mitri');
//There's two paths to function
//One path to set the function
//The second path to call it
//Inside the function we can set parameters 
//and we can set as many parameters as we want
//we can accept (firstName, lastName)
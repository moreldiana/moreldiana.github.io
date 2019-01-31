
document.getElementById("title").style.color = "red";
document.getElementById("title").innerHTML = "Welcome Javascript";

//  String
var username = "Diana"
console.log("My name is " + username)  
//  Numbers
var myNumber = 42;
myNumber = myNumber + 10;
console.log(myNumber);
//  Boolean
var bigBoolean = myNumber > 100;
console.log(bigBoolean)
// Arrays - list of variables in [, , ,]
var users = ["Tiffany", "Sabrina", "Elina"];
console.log(users[1]);
// Objects - stores data with keys and values
var complexUser = {
name: "Diana Morel",
zip: "02904",
color: "purple",
dog: true,
greet: function(greeting) {
   console.log(greeting + " Diana!")
}
};
complexUser.greet("Goodbye")
console.log(complexUser.zip);
// functions - when logic may have to be repeated multiple times
var sayHello = function(name) {
console.log("Hello " + name);
}
sayHello("Diana");
// function returns 
var plusTen = function(num) {
return num + 10;
}
var newNum = plusTen(20);
console.log(newNum);
// Conditional Statements
if (newNum > 100) {
console.log("WOw!");
}
else if (newNum > 50) {
console.log("Ok not so bad.")
}
else {
console.log("Not so big..");
}
// combining 
var greaterThanTen = function(num) {
if (num > 10) {
   console.log("Yes!");
}
else {
   console.log("No!");
}
return num > 10;
}
var checkNumber = greaterThanTen(20);
console.log(checkNumber);
// tine
var today = new Date();
document.getElementById('time').innerHTML=today;
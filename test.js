// var ps = require("prompt-sync");
// var prompt = ps();

// var name = prompt("I will tell a story, but I need some information Give a name for main character: ");
// Write your code here:
// var k = prompt("Give the character a profession: ")
// Write your code here:
// console.log("Here is the story:")
// console.log("Once upon a time there was a " + k + "  called " + name )
// console.log("On her way to work, " + name +  " often pondered what being " + k + " meant to them.")
// console.log("When you work as a " + k +  " you meet interesting people.")
// console.log("Ada enjoys their work as a " + k + " The end.")
// var days = 200;
// var hours= 3.5;
// var coding = "Are you sure?";
// console.log("Days to summer:");
// console.log(days);
// console.log("Hours to lunch:");
// console.log(hours);
// console.log("Coding is fun:");
// console.log(coding);
// console.log("it sure is!")
// var ps = require("prompt-sync");
// var prompt = ps();
// let name = prompt("give me a number")
// console.log("You gave " + name + "!")
// var Hejwaritt = prompt("give me a number")
// console.log("You gave " + Hejwaritt + "!")
// var ps = require("prompt-sync");
// var prompt = ps();
// let name = prompt(" give me a number")
// var moshpit = prompt("give a number")
// console.log("you gave "+ moshpit + "!")
// var ps = require("prompt-sync")
// var prompt = ps();
// var t3 = prompt("Give a boolean")
// var t4 = t3 == " yes"
// var t1 = "true"
// var t2 = true
// console.log(typeof(t1))
// console.log(t4)
// console.log(typeof(t4))
// var ps = require("prompt-sync")
// var prompt = ps();
/*
var string = prompt("Give a string")
var integer = parseInt(prompt("Give a integer "))
var double = prompt("Give a double ")
var boolean = prompt("Give a boolean")
console.log("Your string", string)
console.log("Your integer", integer)
console.log("your double", double)
console.log("your boolean", boolean)
var ps = require("prompt-sync");
var prompt = ps();

var days = prompt("how many days")
console.log ( days * 24 * 60 * 60)
/*
var ps = require("prompt-sync");
var prompt = ps();

var number1 = parseInt(prompt(" give me first number "))
var number2 = parseInt(prompt(" give me second number "))
console.log( "the sum is", number1 + number2)
/*
var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("give me first number"))
var number2 = parseInt(prompt("give me second number"))
var number3 = parseInt(prompt("give me third number"))
console.log("the sum", number1 + number2 + number3)
/*
var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("give me first number"))
var number2 = parseInt(prompt("give ne second number"))
console.log("the sum", number1 * number2)
/*
var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("give me first number"))
var number2 = parseInt(prompt("give me second number"))
console.log("the average", number1 / number2)
/*
var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("give me first number"))
var number2 = parseInt(prompt("give me second number"))
console.log("the sum", number1 + number2)
console.log("the sum", number1 - number2)
console.log("the sum", number1 * number2)
console.log("the sum", number1 / number2)
/*
var ps = require("prompt-sync");
var prompt = ps();
var speed = parseInt(prompt("Your speed"))

if (speed>120) {
    console.log("speeding!")
} 
/*
var ps = require("prompt-sync");
var prompt = ps();
var year = parseInt(prompt("give me a number"))

if (year===1984) {
    console.log("orwell")
} 
/*
var ps = require("prompt-sync");
var prompt = ps();
var year = parseInt(prompt("Give your age"))

if (year<1900) {
    console.log("you're old")
}
/*
var ps = require("prompt-sync");
var prompt = ps();

var number = parseInt(prompt("give me a number"))
if (number>=0){
    console.log ("It is positive")
}else if (number<0){
    console.log(" It is not positive")
}
/*
var ps = require("prompt-sync");
var prompt = ps();

var age = parseInt(prompt("how old are you"))
if (age>=18){
    console.log ("You're an adult!")
}else if (age<18){
    console.log(" You're underage")
}
/*
var ps = require("prompt-sync");
var prompt = ps();
var number1 = parseInt(prompt("Give me the first number"))
var number2 = parseInt(prompt("Give me the second number"))

if (number1>number2){ 
    console.log("lager number is ", number1)
} else if (number2>number1) {
    console.log("lager number is ", number2)
} else if (number1===number2){
    console.log("they are equal")
}
/*
var ps = require("prompt-sync");
var prompt = ps();
var percent = parseInt(prompt("Give your percent [0 - 100]"))

if (percent<0){
    console.log("Impossible")
} else if (percent<50) {
    console.log("fail")
} else if (percent<60){
    console.log("grade 1")
}else if (percent<70) {
    console.log("grade 2")
}else if (percent<80) {
    console.log("grade 3")
}else if (percent<90) {
    console.log("grade 4")
}else if (percent<=100) {
    console.log("grade 5")
}else if (percent>100) {
    console.log("Outstanding!")
}
/*
var ps = require("prompt-sync");
var prompt = ps();
var number = parseInt(prompt("Give a number"))

if(number%2==0){
    console.log("it is even")
}else {
console.log("it is odd")
}
/*
var ps = require("prompt-sync");
var prompt = ps();
var string = prompt("Speak, friend and enter!") 

if(string=="Mellon"){
 console.log("Welcome, friend")
}else{
console.log("they've got a cave troll")
}
/*
var ps = require("prompt-sync");
var prompt = ps();
var string1 = prompt("Give the first string")
var string2 = prompt("Give the second string")

if(string1==string2){
    console.log("Echo!")
   }else{
   console.log("Nej")
}
/*
var ps = require("prompt-sync");
var prompt = ps();


while (true){
    var answer = prompt("Do you want to continue?")

    if(answer==="no"){
        break
    }
}
/*
var ps = require("prompt-sync");
var prompt = ps();

while(true){
   var answer = parseInt(prompt("Give a number"))

if (answer===42)
 break
}
/*
var ps = require("prompt-sync");
var prompt = ps();

while(true){
    var number = parseInt(prompt("Give a number"))
 
 if (number===0) {
  break    
 } else if (number<0){
    console.log("that is negative")
 }else if (number>=0) {
   console.log(number**2)
  }
 /*
  var ps = require("prompt-sync");
  var prompt = ps();
  var numberCount =0

  while(true){
    var number = parseInt(prompt("Give a number"))
 
 if (number===0) {
  break    
 } else {
    numberCount++;
 }
}

console.log("total amount of numbers", numberCount)
/*
var ps = require("prompt-sync");
  var prompt = ps();
  var numberCount = 0

  while(true){
    var number = parseInt(prompt("Give a number"))
 
 if (number===0) {
  break    
 } else if(number<0) {
    numberCount++;
 }
}

console.log("total amount of negative numbers", numberCount)
/*
var ps = require("prompt-sync");
  var prompt = ps();
  var sum = 0

  while(true){
    var number = parseInt(prompt("Give a number"))
 
 if (number===0) {
  break    
 } else  {
    sum+=number;
 }
}

console.log("total sum of  numbers", sum)
/*
var ps = require("prompt-sync");
  var prompt = ps();
  var sum = 0
  var numberCount = 0

  while(true){
    var number = parseInt(prompt("Give a number"))
 
 if (number===0) {
  break    
 } else  {
    sum+=number;
    numberCount++
 }
}

console.log("total sum of numbers", sum)
console.log("total amount of numbers", numberCount)
*/

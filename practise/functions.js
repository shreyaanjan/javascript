// ---simple function---
// function hello(){
//     console.log("hello js !");
// }
// hello();

// ---function with parameters---
// function greet(name){
//     console.log("Hello " + name + "!!");
// }
// greet("javascript");

// ---function with return value---
// function sub(a, b){
//     return a - b;
// }
// let result = sub(10, 5);
// console.log(result);

// function add(a, b){
//     console.log(a + b);
// }
// add(5, 5);

// ---anonymous function---
// let multiply = function(p, q){
//     return p * q;
// }
// let result = multiply(10, 10);
// console.log(result);

// let add = function(x, y){
//     console.log(x + y);
// }
// add(4, 2);

// ---immediately invoked function expression---
// (function(){
//     console.log("this is immediately invoked function !");
// })();

// ---iife with anonymous function---
// (function(){
//     let greet = "hello javascripttt with iife";
//     console.log(greet);
// })();

// ---arrow function---
// let sub = (a, b) => {
//     console.log(a - b);
// }
// sub(20, 10);

// let add = (a, b) => (a + b);
// let ans = add(20, 30);
// console.log(ans);

// let mul = (p, q) => p * q;
// console.log(mul(2, 5));

// ---function with default parameters---
// function greet(name = "Guest"){
//     console.log("Hello " + name + "!!");
// }
// greet("Javascript");
// greet();

// ---functions with multiple returns(conditional)---
// function checkNum(num){
//     if(num > 0){
//         return "Positive";
//     } else if (num === 0){
//         return "Zero";
//     } else {
//         return "Negative";
//     }
// }
// console.log(checkNum(0));
// console.log(checkNum(-20));
// console.log(checkNum(29));
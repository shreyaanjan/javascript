// ----method destructuring---

// ---array method
// let colors = ["red", "green", "blue", "yellow"]
// let [firstColour, secondColour] = colors;
// console.log(firstColour, secondColour);

// --swap
// let a = 20;
// let b = 90;

// [a, b] = [b, a];
// console.log(a, b);

// let arr = [10, 20, 30, 40];
// let [a, b] = arr;
// [a, b] = [b, a];
// console.log(a, b);

// ---object method
// let person = {
//     name1 : "John Doe",
//     age : 20,
//     isDeveloper : false,
// }

// let {name1, age} = person;
// console.log(name1, age);

// ---function method
// function showDetails({name1, age, isDeveloper}){
//     console.log(name1, age, isDeveloper);
// }
// showDetails(person);


// ---method spreading or rest or spread operator---

// ---array method
// let arr = [1, 2, 3, 4, 5];
// let b = [...arr]
// console.log(b);

// ---object method
let person1 = {
    name: "John Doe"
}

let person2 = { ...person1 }
person2.name = "jessica";
console.log(person1.name, person2.name);

// ---dictionary method
// let num = [1,2,3,2,3,4,4,6,5,7,6,7,6,7,6,8,7,3,2,3,5,5,8,7]
// let freq = {};

// num.forEach((val)=>{
//     freq[val] = freq[val] ? freq[val] + 1 : 1;
// })

// console.log(freq);

// reduce function

let arr = [1,2,3,4,5];

let answer = arr.reduce((sum, val)=>{
    return sum =  sum > val ? sum : val;
}, 2)

console.log(answer);


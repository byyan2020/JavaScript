// Log to console.
console.log("Hello world");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error("This is some error");
console.warn("This is a warning");
console.time("Hello");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
console.timeEnd("Hello");
console.clear();

/*
    multi
    line
    comments
*/

// var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Varibles can only contains letters, numbers, _, $.
// Varibles can not start with number

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case, use for class and construtcion function

// const can not reassign, have to assign an initial value
 const person = {
     name: 'John',
     age: 30
 }

 person.name = 'Sara';
 console.log(person);

 const number = [1, 2, 3, 4];
 number.push(6);
 console.log(number);

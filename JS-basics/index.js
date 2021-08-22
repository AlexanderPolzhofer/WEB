/*print function*/

console.log('text');

/*declare variable*/

let firstName = 'Alexander';
let lastName = 'Polzhofer';

/*const (= constant can't change it's value)*/

const intersestRateEurope = 3;

/*let (= variable can change it's value)*/

let interestRateUSA = 5;
interestRate = 3;

/*Primitive Types in JS (typeof -> get type)*/

let name = 'Alexander Polzhofer'; // String Literal
let age = 29; // Number Literal
let isApproved = true; // Boolean Literal
let additionalName = undefined;
let selectedColor = null;

/*object*/

let person = {
    firstName: 'Alexander',
    lastName: 'Polzhofer',
    age: 29,
    country: 'Austria'
};

/*change property*/

//Dot Notation -> common use:
person.firstName = 'Alex';

/*Bracket Notation*/

person['firstName'] = 'Alexander';

let selection = 'firstName';
person['firstName'] = 'Alessio';

console.log(selection);
console.log(person.firstName);

/*Arrays in JS*/

let selectedColors = ['red', 'green', 'black', 'white', 'blue'];
console.log(selectedColors);

/*types of functions*/

//Performing a task:

function greet(name, alias) {
    console.log('Hello ' + name + ' ' + alias + '!');
}
greet('Alexander', 'the big')

//Calculating a value:

function square(number) {
    return number * number;
}
let number = square(4);
console.log(number);

//or

console.log(square(4));

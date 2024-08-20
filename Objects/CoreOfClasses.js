/**
 * JavaScript is indeed prototype-based, but it also supports classes, which were 
 * introduced in ECMAScript 2015 (ES6). This can be a bit confusing because 
 * JavaScript's class syntax is essentially "syntactic sugar" over its existing 
 * prototype-based inheritance.

Prototype-Based Inheritance
Before ES6, JavaScript used prototypes to create objects and manage inheritance. 
Every object in JavaScript has a prototype, and objects inherit properties and 
methods from their prototype. This is what made JavaScript a prototype-based 
language.
 */

////example of prototype-based inheritance:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person('John', 30);
john.greet(); // "Hello, my name is John and I am 30 years old."


/**
 * ES6 Classes
With ES6, JavaScript introduced the class syntax, which provides a more familiar and
 concise way to define constructors and inheritance, similar to other object-oriented
languages. However, under the hood, it still uses prototypes.
 */

/////Creating classes in es 6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john1 = new Person('John1', 30);
john.greet(); // "Hello, my name is John and I am 30 years old."

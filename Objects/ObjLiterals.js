// In JavaScript, object literals and normal objects essentially refer to the same concept but approached from different perspectives:

// Object Literals
// An object literal is a way to create an object directly using a simple and concise syntax. It is the most common and straightforward way to create objects in JavaScript.

example:

// Creating an object using an object literal
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
Characteristics:

// Syntax: The object literal is defined using curly braces {} with key-value pairs inside. Each key is a string or a symbol, and the value can be anything, including functions.

// Conciseness: Object literals are concise and easy to write, making them ideal for creating objects on the fly.

// No Constructor Function Needed: You don't need to use a constructor function or the new keyword to create an object when using object literals.

// Normal Objects
// When we refer to normal objects in JavaScript, we’re often talking about objects created using a variety of methods, not just object literals. This can include:

// Object Literals: As shown above, this is a direct way of creating objects.

// Constructor Functions: A more traditional method where you define a function that acts as a blueprint for creating objects.

// Creating an object using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new Person("Jane", 25);
const person2 = new Person("Doe", 28);
// Key Characteristics:

// Reusability: Constructor functions are useful when you need to create multiple objects with the same structure.
// Prototypes: Objects created using constructor functions share methods via the prototype, which can be more memory efficient.
// Object.create Method: Another way to create objects where you can specify the prototype object for the new object.

const proto = {
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

const person3 = Object.create(proto);
person.name = "John";
person.age = 30;
// Key Characteristics:

// Prototype-based: This method allows for more control over the object's prototype, making it a powerful way to create objects that inherit from other objects.
// Summary
// Object literals are just one of the many ways to create normal objects in JavaScript.
// Object literals offer a simple and concise way to create single objects.
// Normal objects can be created using object literals, constructor functions, the Object.create method, or the new keyword, each with its own use cases and advantages.
// JavaScript objects, regardless of how they are created, are prototype-based, meaning they can inherit properties and methods from a prototype object.

//constructor function "new" always returns a new instance
//this defines current context ->test using browser and code editor
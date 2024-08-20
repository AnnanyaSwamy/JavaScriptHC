//Prototype is the core behavious of js , even after the intro of classes in ES6 the core working 
//remains same i.e. based on prototype

//JS has prototypal behaviour i.e. if js is unable to find somthing
//that youre looking for it will go up and up in till it encounters a null value
//  |
//  |  //JS has prototypal inheritance
//  |
//  |
//Array---------------------->Object----------------------->null
//      prototypal reference    |    prototypal reference
//      since array comes       |    since Object has no parents
//      from objects            |
//                              |
//                              |
//String------------------------|
//Function-----------------------

//Examples below

function multiplyBy5(num){
    return num*5;
}

console.log(5);
console.log(multiplyBy5(5));
console.log(multiplyBy5.prototype);
console.log(multiplyBy5.power);

// Defining string variables with trailing spaces
// let myName = "hitesh     "
// let mychannel = "chai     "
// Trying to use a non-existent method `trueLength` on the string
// console.log(myName.trueLength);

// Array of hero names
let myHeros = ["thor", "spiderman"];

// Object containing hero powers and a method to get Spider-Man's power
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

// Adding a new method `abc` to all objects via Object prototype
Object.prototype.abc = function(){
    console.log(`abc is present in all objects`);
};

// Adding a new method `heyAbc` to all arrays via Array prototype
Array.prototype.heyAbc = function(){
    console.log(`Abc says hello`);
};

// Uncomment to test the newly added methods
// heroPower.abc();
// myHeros.abc();
// myHeros.heyAbc();
// heroPower.heyAbc();

// Inheritance example using prototypes

// Base object with user details
const User = {
    name: "chai",
    email: "chai@google.com"
};

// Object with a specific property
const Teacher = {
    makeVideo: true
};

// Object with another specific property
const TeachingSupport = {
    isAvailable: false
};

// Object inheriting from TeachingSupport
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// Setting Teacher object as prototype of User
Teacher.__proto__ = User;

// Modern syntax for setting prototypes
Object.setPrototypeOf(TeachingSupport, Teacher);

// Adding a method to String prototype to find true length (excluding trailing spaces)
let anotherUsername = "CAC    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

// Testing the trueLength method
anotherUsername.trueLength();
"abc".trueLength();
"iceTea".trueLength();

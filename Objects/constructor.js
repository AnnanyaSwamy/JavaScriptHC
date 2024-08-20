class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const abc=new User("abc", "abc@email.com", "abcdefgh");
console.log(abc.encryptPassword());
console.log(abc.changeUsername());


function User2(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}

const newUser=new User2("abcd", "abcd@email.com", "myName");

console.log(User2.prototype);

User2.prototype.encryptPassword=function encryptPassword(){
    return `${this.password}abc`
}

User2.prototype.changeUsername=function changeUsername(){
    return `${this.username.toUpperCase()}`
}

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());


console.log(User2.prototype);

console.log(Object.prototype);

/**
 * Prototype Object:

Every JavaScript object has an internal link to another object called its prototype. This prototype object can have properties and methods that the original object can access.
For example, if you create an object obj and try to access a property obj.someProperty, JavaScript will first look for someProperty directly on obj. If it doesn't find it there, it will look for it on obj's prototype.
Prototype Chain:

If the prototype object itself has a prototype, this forms what is called the "prototype chain". JavaScript will keep following this chain up to null (which is the end of the chain) until it finds the property you're looking for or reaches the end without finding it.
For instance, if obj doesn't have a certain property, and its prototype also doesn't have it, JavaScript will continue searching up the chain of prototypes until it finds it or runs out of objects to check.
Object's Prototype (__proto__):

Each object has a __proto__ property (also known as [[Prototype]]), which points to its prototype object. This property is not commonly used directly in modern JavaScript; instead, there are better ways to work with prototypes.
In ES6 and beyond, the preferred way to work with prototypes is via Object.getPrototypeOf(obj) and Object.setPrototypeOf(obj, proto).
 */

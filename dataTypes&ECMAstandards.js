"use strict"//treat all js code as newer version of js, even though automatic it is a good practice


alert("hello");
// alert(3+3) we are using node js not browser hence it will give error


//Data types:Primitive: string, number=> 2^53, boolean, bigInt, null, symbol, undefined
//null is a standalone value=signifies abscense of a value
//undefined=value is not yet given
//symbol: used in react for uniqueness
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//false
const bigNumber= 329848476549n;//n at last isvalid makes it big int


console.log(typeof("abs"))//string
console.log(typeof(null))//object
console.log(typeof(undefined))//undefined


//Non-Primitive: Reference: Array, Objects, Functions
//JS is dynamically typed

//typeof operator returns:
/*
undefined: undefined
null: object
boolean: boolean
number: number
string: string
object(native and does not implement [[Call]]): object
object(native or host and does implement [[Call]]): function
*/

//Number

const numb=400;
const numb1=new Number(400);
console.log(numb);
console.log(numb1);


// Example number
let num = 123456.789;

// Number() constructor
console.log("// Number() constructor:");
// Converts a value to a number.
console.log(Number("12345")); // 12345

// toExponential()
console.log("// toExponential():");
// Returns a string representing the number in exponential notation.
console.log(num.toExponential(2)); // "1.23e+5"

// toFixed()
console.log("// toFixed():");
// Returns a string representing the number with a specified number of decimal places.
console.log(num.toFixed(2)); // "123456.79"

// toLocaleString()
console.log("// toLocaleString():");
// Returns a string with a language-sensitive representation of the number.
console.log(num.toLocaleString('en-IN')); // "123,456.789" en-US default

// toPrecision()
console.log("// toPrecision():");
// Returns a string representing the number to a specified length.
console.log(num.toPrecision(6)); // "123456"

// toString()
console.log("// toString():");
// Returns a string representing the number.
console.log(num.toString()); // "123456.789"

// valueOf()
console.log("// valueOf():");
// Returns the primitive value of the number object.
console.log(num.valueOf()); // 123456.789



//Math Class


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.sqrt(4));
console.log(Math.min(4, 5, 6, 6, 7));
console.log(Math.random().toFixed(1)*10);


min=10;
max=100;
console.log(Math.floor(Math.random()*(max-min+1))+min);


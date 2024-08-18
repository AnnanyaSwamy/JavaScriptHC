// String interpolation `` 

let name="string1";
let name1= new String("string2");

console.log(name);
console.log(name1);

console.log(typeof(name));
console.log(typeof(name1));
console.log(name.length);
console.log(name1.length);

// In JavaScript, strings come with various methods that let you manipulate and inspect text. Here's a quick overview of some of these methods:

// - **`charAt(index)`**: Returns the character at the specified index.
// - **`charCodeAt(index)`**: Returns the Unicode value of the character at the specified index.
// - **`concat(string2, ...)`**: Joins two or more strings together.
// - **`includes(searchString)`**: Checks if the string contains a specified value.
// - **`indexOf(searchString)`**: Finds the position of the first occurrence of a specified value.
// - **`lastIndexOf(searchString)`**: Finds tcshe position of the last occurrence of a specified value.
// - **`replace(search, replaceWith)`**: Replaces the first occurrence of a specified value with another value.
// - **`split(separator)`**: Splits the string into an array of substrings based on a specified separator.
// - **`toLowerCase()`**: Converts the string to lowercase.
// - **`toUpperCase()`**: Converts the string to uppercase.
// - **`trim()`**: Removes whitespace from both ends of the string.
// - **`slice(start, end)`**: Extracts a part of the string from `start` index to `end` index.
// - **`substring(start, end)`**: Similar to `slice`, but doesn’t accept negative indices.

// These methods help you handle and process text efficiently in JavaScript!

// Example string
let str = "Hello World";

// charAt(index)
console.log("// charAt(index):");
console.log(str.charAt(1)); // "e"

// charCodeAt(index)
console.log("// charCodeAt(index):");
console.log(str.charCodeAt(1)); // 101 (Unicode value for "e")

// concat(string2, ...)
console.log("// concat(string2, ...):");
let str2 = "JavaScript";
console.log(str.concat(" ", str2)); // "Hello World JavaScript"

// includes(searchString)
console.log("// includes(searchString):");
console.log(str.includes("World")); // true

// indexOf(searchString)
console.log("// indexOf(searchString):");
console.log(str.indexOf("World")); // 6

// lastIndexOf(searchString)
console.log("// lastIndexOf(searchString):");
console.log("Hello World World".lastIndexOf("World")); // 12

// replace(search, replaceWith)
console.log("// replace(search, replaceWith):");
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

// split(separator)
console.log("// split(separator):");
console.log(str.split(" ")); // ["Hello", "World"]

// toLowerCase()
console.log("// toLowerCase():");
console.log(str.toLowerCase()); // "hello world"

// toUpperCase()
console.log("// toUpperCase():");
console.log(str.toUpperCase()); // "HELLO WORLD"

// trim()
console.log("// trim():");
let strWithSpaces = "  Hello World  ";
console.log(strWithSpaces.trim()); // "Hello World"

// slice(start, end)
console.log("// slice(start, end):");
console.log(str.slice(0, 5)); // "Hello"

// substring(start, end)
console.log("// substring(start, end):");
console.log(str.substring(0, 5)); // "Hello"

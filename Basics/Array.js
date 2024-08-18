const arr=[2, 3,4, 7, 8, 4];
// //JS arrays are resizable
// //No associative array
// //copy operation creates shallow copy-> Same reference

// const arr1=new Array(1,2,3,4,4);
// console.log(arr);
// console.log(arr1);

// //Array Methods

// arr.push(5);
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.unshift(9);//increases complexity hence not optimal, adds 9 to front
// console.log(arr);
// arr.shift();//removes 9 from front
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(19));

// newArr=arr.join();
// console.log(newArr);


//slice, splice

console.log("A ", arr);
console.log(arr.slice(1,3));
console.log(arr);

console.log("B ", arr);
console.log(arr.splice(1,3));
console.log("C ", arr);


 
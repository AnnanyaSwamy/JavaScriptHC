let arr=[1,2,3,4];
let arr1=[5,6,7,8];

arr.push(arr1);
console.log(arr);
arr.pop()
arr=arr.concat(arr1);
console.log(arr);
arr=[...arr, ...arr1]
console.log(arr);

//arr.flat() to turn multidimensional array into one array;


console.log(Array.isArray("Iamasock"));
console.log(Array.from("Iamasock"));
console.log(Array.from({name:"abc"}));//[] returns empty

let score1=100;
let score2=200;
let score3=300;
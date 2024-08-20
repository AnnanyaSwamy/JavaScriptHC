console.log(Math);
console.log(Math.PI);

const descript=Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descript);
/**
 * {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */

//Setting your own descriptor properties

const obj={
    name: "sample obj",
    price: 1000,
    isAvailable: true,
}

console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/**
 * {
  value: 'sample obj',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

Object.defineProperty(obj, "name", {
    writable:false,
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//     value: 'sample obj',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

// for(let [key, value] of obj){}->return error since obj is not iterable
//use object.entries

for(let [key, value] of Object.entries(obj)){
    console.log(`${key}->${value}`);
}
//since enumerable for name properties was set to false it will not be a part
//loop being used here


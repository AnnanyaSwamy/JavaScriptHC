/*False values
false
0
-0
BigInt 0n
""
null
undefined
NaN
*/

/*
True value
"0"
"false"
" "
[]
{}
function(){}
*/


/**
 * false==0 true
 * false =='' true
 * 0=='' true
 */

//Nullish Coalescensing operator (??): null udefined

let val1;
// val1=5??10;
val1=null??10;//same for undefined 
console.log(val1);


//For of:

const arr=[1,2,3,4,5,6,7]

for(const i of arr){
    console.log(i);
}

const greetings="greetings";
for(greet of greetings){
    console.log(greet);
}


const map=new Map();
map.set('IN', 'India');
map.set('US', 'United states');

console.log(map);


for (const key of map){
    console.log(key);
    console.log(key[0],"->",key[1]);
}

for(const [key, value] of map){
    console.log(key,"->",value)
}

//if you use for in on array it returns index numbers


const myObj={
    js:'javascript',
    cpp:'c-plus-plus',
    rb:'ruby',
    swift: 'swift by apple'
}

console.log(myObj)

for (const key in myObj){
    console.log(key,"->",myObj[key]);
}

//for each

const coding=['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach(function(val){
    console.log(val);
})
coding.forEach((item)=>{
    console.log(item);
})



function printme(item){
    console.log(item);
}
coding.forEach(printme);

coding.forEach((item, index, arr)=>{
    console.log(index, "->", item, " ", arr);
})

//for each doesnt return values returns undfined everytime




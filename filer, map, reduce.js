const myNums=[1,2,3,4,5,6,7,8,9,10];
// let newNums=myNums.filter((num)=>num>4)
let newNums=myNums.filter((num)=>{
    return num>4
})
let newNums2=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
console.log(newNums)
console.log(newNums2)
console.log(myNums)

const newNums3=myNums.map((num)=>num+10);
console.log(newNums3)

//chaining
//,map.filter or .map.map etc etc


const newNums4=myNums.map((nums)=>nums*10).map((nums)=>nums+1).filter((nums)=> nums>40)
console.log(newNums4);

let initialValue=0;
const ansReduce=myNums.reduce((accumulator, currValue)=>{ return accumulator+currValue},0);
const ansReduce2=myNums.reduce(function(accu, curr){
    return accu+curr;
},0)
console.log(ansReduce);
console.log(ansReduce2);
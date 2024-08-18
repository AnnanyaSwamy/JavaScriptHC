//let, var, const


if(true){

    let num1=10;
    const num2=20;
    var num3=30;
    
}

//console.log(num1); error
//console.log(num2); error
console.log(num3);// no error since var is global
//global scope is different in console on dev tools and on vscode

//NESTED SCOPE

function one(){
    const username="abc";
    function two(){
        const website="youtube";
        console.log(website);
    }
    //console.log(website);error
    two();
}
one();
//child functions access parent func variables



addOne(5);//No ERROR
function addOne(num){
    return num+1;
}


//addTwo(5);//ERROR
const  addTwo=function(num){
    return num+2;
}


//Arrow Function & this Keyword

const user={
    name: "abc",
    priceOfCourse: "999",
    welcomeMessage:function(){
        console.log(`${this.name}, Welcome to the course`);
    }
}

user.welcomeMessage();
user.name="xyz";
user.welcomeMessage();
console.log(this)//{} on vscode returns window object on console in dev tools
//this works inside objects and not functions



const myFunc0=function(){
    let username1="abc";
    console.log(username1);
    console.log(this);
}

const myFunc=()=>{
    let username1="abc";
    console.log(username1);
    console.log(this);
}

myFunc0();//returns some long object
myFunc();//{}

// const addNum=(num1, num2)=>{
//     return num1+num2;
// }
// OR
const addNum=(num1, num2)=>num1+num2;
console.log(addNum(2,3));//5
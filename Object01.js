//can be declared using constructor and literals
//using constructor you create singleton otherwise creates multiple instances

//OBJ LITERALS
// const jsUser={
//     name:"abc",
//     age: 5,
//     location: "lucknow",
//     isLoggedIn:true,
//     lastLoginDays:["monday", "Thursday"],
//     email:"abx@email.com",
//     "full name":"abcdefg",
//     mysym:"mykey1",//this will ot act as a symbol;
// }

// //Accessing values
// console.log(jsUser.email);
// console.log(jsUser["email"])//js recognizes the keys as stings without you specifying them explicitly

// //since full name variable has a space it cannot be accessed using the dot oprator you need [] notation
// console.log(jsUser["full name"]);

// //Adding symbols to objects
// const mysyb=Symbol("key1");

// const jsUser={
//     name:"abc",
//     age: 5,
//     location: "lucknow",
//     isLoggedIn:true,
//     lastLoginDays:["monday", "Thursday"],
//     email:"abx@email.com",
//     "full name":"abcdefg",
//     mysym:"mykey1",//this will ot act as a symbol;
// }

// console.log(typeof(jsUser.mysym));//returns string the correct way to add symbols tp objects is [mysym]:"value"

const mysym=Symbol("key1");

const jsUser={
    name:"abc",
    age: 5,
    location: "lucknow",
    isLoggedIn:true,
    lastLoginDays:["monday", "Thursday"],
    email:"abx@email.com",
    "full name":"abcdefg",
    [mysym]:"mykey1",//this will ot act as a symbol;
}

console.log(jsUser[mysym]);//Symbol


//Object.freeze(jsUser);
jsUser.email="xyz@email.com";
console.log(jsUser.email);


jsUser.greeting= function(){
    console.log("hello");
}
console.log(jsUser.greeting());




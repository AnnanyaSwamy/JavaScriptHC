const linkedin= new Object();//singleton
const linkedin1={};//non-singleton

linkedin.id="123abc";
linkedin.name="Abcde";
linkedin.isLoggedIn=false;

console.log(linkedin);
const regularUser={
    email: "abcxyz@email.com",
    fullname: {
        userFullName: {
            firstName: "abc",
            lastName:"xyz",
        }
    }
}

console.log(regularUser.fullname)

// ? operator

const obj1={1:"a", 2:"b"};
const obj2={5:"a", 6:"b"};
const obj4={7:"a", 8:"b"};

const obj3=Object.assign({}, obj1, obj2, obj4);
console.log(obj3);
//OR using spread operator

const users=[
    {
        id: 1,
        email:"a@email.com",
    },
    {
        id: 2,
        email:"a@email.com",
    },
    {
        id: 3,
        email:"a@email.com",
    },
    {
        id: 4,
        email:"a@email.com",
    }
]


console.log(linkedin);
console.log(Object.keys(linkedin));
console.log(Object.values(linkedin));
console.log(Object.entries(linkedin));


console.log(linkedin.hasOwnProperty('id'));


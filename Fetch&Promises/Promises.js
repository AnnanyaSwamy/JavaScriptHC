// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//have 3 states pending fulfilled and rejected
const promiseOne= new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptograpgy, network
    setTimeout(function(){
        console.log("Async task is comeplete");
        resolve()//as soon as this runs it connects with then can also have val as arguments
    })
});
//Q and Bluebird-> before promises we had Q and BlueBird for asynchronous programming, using these we can use core js functionalities  that are done by .fetch.catch.finally now, now required now
//reduces callback hell->callback nesting


promiseOne.then(function(){//this fucntion receives a value from the work that has been completed above
    console.log("Promise Consumed");
})
//resolve connectied with .then


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



////////////////////////////////////////////////////////
const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"abc", email: "example@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

///////////////////////////////////////////////////////

const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({username:"abcdef", pwd:"123"});
        }
        else{
            reject('Error: Something Went Wrong')
        }
    },1000)
});

promiseFour.then(user=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("The promise is either resolved or rejected"))

///////////////////////////////////////////////////////

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:"JavaScript", pwd:"123456"});
        }
        else{
            reject('Error: JS Went Wrong')
        }
    },1000)
})
//promises can also be 
//handled using async 
//await not just then catch

async function consumePromiseFive(){//does not directly handle errors, automatically expects that a value is always received
    try{
        const res=await promiseFive
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

consumePromiseFive();


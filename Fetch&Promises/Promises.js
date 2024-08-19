// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises have 3 states: pending, fulfilled, and rejected.

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task (e.g., DB calls, cryptography, network requests)
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // Resolves the promise, allowing the .then() method to be executed.
    }, 1000); // Simulating a delay of 1 second.
});

promiseOne.then(function(){
    console.log("Promise Consumed"); // Logs when the promise is fulfilled.
});

// Another Promise example with a delay

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Resolves the promise after 1 second.
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved"); // Logs when the second promise is fulfilled.
});

// Returning data from a Promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "abc", email: "example@example.com"}); // Resolves with user data.
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user); // Logs the user data once the promise is fulfilled.
});

// Handling errors with .catch

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // Change to true to simulate an error.
        if (!error) {
            resolve({username: "abcdef", pwd: "123"}); // Resolves with user credentials.
        } else {
            reject('Error: Something Went Wrong'); // Rejects the promise if there's an error.
        }
    }, 1000);
});

promiseFour.then(user => {
    console.log(user); // Logs the user data.
    return user.username; // Returns the username for the next .then().
}).then(username => {
    console.log(username); // Logs the username.
}).catch(function(err){
    console.log(err); // Logs any errors if the promise is rejected.
}).finally(() => console.log("The promise is either resolved or rejected")); // Runs regardless of resolve or reject.

// Using async/await for promises

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Change to false to simulate success.
        if (!error) {
            resolve({username: "JavaScript", pwd: "123456"}); // Resolves with user credentials.
        } else {
            reject('Error: JS Went Wrong'); // Rejects the promise if there's an error.
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const res = await promiseFive; // Awaits the result of the promise.
        console.log(res); // Logs the result if the promise is fulfilled.
    } catch (err) {
        console.log(err); // Catches and logs any errors if the promise is rejected.
    }
}

consumePromiseFive(); // Executes the async function.

// Fetching data from an API with async/await

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Awaits the fetch response.
        const data = await response.json(); // Converts the response to JSON.
        console.log(data); // Logs the data received from the API.
    } catch (err) {
        console.log('E: ', err); // Catches and logs any errors during the fetch.
    }
}

getAllUsers(); // Executes the function to fetch and log user data.

// Fetching data using .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json(); // Converts the response to JSON.
    })
    .then((data) => {
        console.log(data); // Logs the data received from the API.
    })
    .catch((error) => console.log(error)); // Catches and logs any errors during the fetch.

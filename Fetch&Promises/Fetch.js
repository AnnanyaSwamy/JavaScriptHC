/**
 * The fetch function is a modern way to make network requests in the browser 
 * (or Node.js environment with appropriate polyfills). It's based on Promises, 
 * allowing for a more manageable asynchronous code flow compared to older methods 
 * like XMLHttpRequest.
 */



fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


/**
 * 1. Calling fetch
When you call fetch, it initiates the process of making a network request. 
Here's a simple example:

2. Creating a Promise
Internally, fetch returns a Promise. This Promise represents the eventual completion (or failure) 
of the asynchronous 
operation.

3. Sending the Request
The browser (or Node.js) sends the HTTP request to the specified URL. This involves:

Resolving the URL.
Setting up the request headers and method (GET by default).
Opening a connection to the server.
4. Handling the Response
Once the request is sent, the browser (or Node.js) waits for the server's 
response. The response goes through the following steps:

4.1 Network Layer
The request travels through the network layer (TCP/IP). If there are any 
network errors (like DNS issues or connectivity problems), the Promise is 
rejected with an error.

4.2 Server Processing
The server processes the request and sends back a response. This response includes:

Status code (e.g., 200 for success, 404 for not found, etc.).
Headers (metadata about the response).
Body (the actual data).
5. Promise Resolution
The fetch Promise can be either resolved or rejected:

5.1 Fulfilled (Resolved)
If the network request is successful, the Promise is resolved. 
The resolved value is a Response object. This object includes methods to handle 
the response data (like .json(), .text(), etc.).

The then method is called with the Response object.
You can chain another then method to process the response data 
(e.g., response.json() to parse JSON data).

5.2 Rejected
If the request fails (due to network issues, CORS issues, etc.), the Promise 
is rejected. The rejection reason (an error object) is passed to the catch method.
 */


/////////////Let's break down the example in more detail:

/**
 * Initiate Fetch Request:

fetch('https://api.example.com/data') is called.
Returns a Promise.
Network Request:

The browser sends an HTTP GET request to https://api.example.com/data.
Server Response:

If the server responds successfully, the Promise is resolved with a Response object.
If there's a network error, the Promise is rejected.
Processing the Response:

On success, the then(response => response.json()) is executed.
response.json() returns another Promise that resolves with the parsed JSON data.
Handling Parsed Data:

The second then(data => console.log(data)) is executed, logging the parsed data.
Error Handling:

If any part of the process fails, the catch(error => console.error('Error:', error)) is executed, logging the error.
 */

/////////Under the hood

/**
 * 
The fetch function is a modern way to make network requests in the browser (or Node.js environment with appropriate polyfills). It's based on Promises, 
allowing for a more manageable asynchronous code flow compared to older methods like XMLHttpRequest.

Here's a detailed explanation of the internal workings of fetch:

1. Calling fetch
When you call fetch, it initiates the process of making a network request. Here's a simple example:

javascript
Copy code
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
2. Creating a Promise
Internally, fetch returns a Promise. This Promise represents the eventual completion (or failure) of the asynchronous operation.

3. Sending the Request
The browser (or Node.js) sends the HTTP request to the specified URL. This involves:

Resolving the URL.
Setting up the request headers and method (GET by default).
Opening a connection to the server.
4. Handling the Response
Once the request is sent, the browser (or Node.js) waits for the server's response. The response goes through the following steps:

4.1 Network Layer
The request travels through the network layer (TCP/IP). If there are any network errors (like DNS issues or connectivity problems), the Promise is rejected with an error.

4.2 Server Processing
The server processes the request and sends back a response. This response includes:

Status code (e.g., 200 for success, 404 for not found, etc.).
Headers (metadata about the response).
Body (the actual data).
5. Promise Resolution
The fetch Promise can be either resolved or rejected:

5.1 Fulfilled (Resolved)
If the network request is successful, the Promise is resolved. The resolved value is a Response object. This object includes methods to handle the response data (like .json(), .text(), etc.).

The then method is called with the Response object.
You can chain another then method to process the response data (e.g., response.json() to parse JSON data).
5.2 Rejected
If the request fails (due to network issues, CORS issues, etc.), the Promise is rejected. The rejection reason (an error object) is passed to the catch method.

Example Breakdown
Let's break down the example in more detail:

javascript
Copy code
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
Initiate Fetch Request:

fetch('https://api.example.com/data') is called.
Returns a Promise.
Network Request:

The browser sends an HTTP GET request to https://api.example.com/data.
Server Response:

If the server responds successfully, the Promise is resolved with a Response object.
If there's a network error, the Promise is rejected.
Processing the Response:

On success, the then(response => response.json()) is executed.
response.json() returns another Promise that resolves with the parsed JSON data.
Handling Parsed Data:

The second then(data => console.log(data)) is executed, logging the parsed data.
Error Handling:

If any part of the process fails, the catch(error => console.error('Error:', error)) is executed, logging the error.
Under the Hood
Internally, here's a conceptual flow of what happens:

Fetch Call:

fetch(url) is called.
A new Promise is created.
Network Layer:

The browser resolves the URL, sets up the request, and sends it over the network.
If there's a network error, the Promise is rejected, and control moves to the catch block.
Server Response:

The server processes the request and sends back the response.
The response includes a status code, headers, and a body.
Promise Resolution:

If the response is received successfully, the Promise is resolved with a Response object.
Methods like response.json() can be used to parse the body.
Chaining Promises:

Each call to then returns a new Promise, allowing for chaining.
If a then callback returns a value, the next then receives that value.
If a then callback returns a Promise, the next then waits for that Promise to resolve.
Error Propagation:

If any Promise in the chain is rejected, control moves to the first catch block.
 */
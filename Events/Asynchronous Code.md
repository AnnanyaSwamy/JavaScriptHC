JavaScriot is Synchronous
JavaScriot is Single Threaded

This single threaded behaviour is seen if the JS engine is used on its own which is rare casue standalone engine for js is not available it is in combination with browser engine etc

Execution Context
 ~Executes one line of code at a time
 ~Each operation waits for the last one to complete before exectuing


 2types of Code in js--->blocking Code: blocks the flow of entire program
                     |
                     |__>Non blocking code: Doesnot Block the flow of program


Largest Blocking Code is File Reading


READ FILE SYNCHRONOUS
When asked to read a file the program cannot do that on its own the context is given to kernel, kernel goes and acceses the program or file reads the required materal and then returns the control to program
javascript is not powerful enough to read the file in the browser ->that we'll study in node js


READ FILE ASCYNCHRONOUS
program allowed to work while kernel reading file


![Timeout](async.png)
javascript engine is built using memory heap and call stack
web api found in browser
web api gives dom and task queue
Promises are also available who have a high priority queue

whenever a program is run -> a call stack is created and a globel execution contect is inside that call stack, functions are added one by one
in writing async code you expect the some mechanism to perform some task and inform the js engine later 


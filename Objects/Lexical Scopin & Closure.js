function outerFunction(outerVariable) {
    /*
        Lexical Scoping:
        In JavaScript, functions create their own scope, and the scope in which a function is defined is known as its lexical scope.
        This means that a function has access to variables defined in its own scope, as well as in the scopes of any outer functions in which it is defined.
        
        The `outerFunction` takes an `outerVariable` as an argument. This variable is accessible inside `outerFunction` 
        and any inner functions defined within `outerFunction`, due to lexical scoping.
    */

    return function innerFunction(innerVariable) {
        /*
            Closure:
            A closure is a function that "remembers" the environment in which it was created, even after that environment has gone out of scope.
            In this example, `innerFunction` is a closure because it retains access to `outerVariable` from `outerFunction`'s scope, even after `outerFunction` has finished execution.
            
            The `innerFunction` takes an `innerVariable` as an argument. It has access to both `innerVariable` (from its own scope)
            and `outerVariable` (from the lexical scope of `outerFunction`).
        */

        console.log(`Outer Variable: ${outerVariable}`);  // Accesses `outerVariable` from `outerFunction`'s scope
        console.log(`Inner Variable: ${innerVariable}`);  // Accesses `innerVariable` from `innerFunction`'s scope
    };
}

const newFunction = outerFunction("outside");  /*
    The `outerFunction` is called with the argument "outside", which sets `outerVariable` to "outside".
    The `outerFunction` returns `innerFunction`, which is now assigned to `newFunction`.
    Due to closure, `newFunction` retains access to `outerVariable` even though `outerFunction` has finished execution.
*/

newFunction("inside");  /*
    When `newFunction` is called with the argument "inside", it executes `innerFunction`.
    `innerFunction` can access both `outerVariable` ("outside") and `innerVariable` ("inside") due to closure.
    
    Output:
    Outer Variable: outside
    Inner Variable: inside
*/

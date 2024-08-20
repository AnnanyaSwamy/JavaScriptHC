class User {
    constructor(email, password) {  /* 
        Fixed typo in 'password'
        The User class is defined with a constructor that takes email and password as parameters.
        The constructor assigns the email to this.email and password to this._password.
    */
        this.email = email;
        this._password = password; // Store the actual password in a private variable
    }

    get password() {  /*
        Getter for password:
        This getter is supposed to return the password with some additional string appended ("abcdefgh" in this case).
        The getter returns the stored password (_password) with "abcdefgh" appended.
        Access the private variable to avoid recursion, which would otherwise lead to an infinite loop.
    */
        return `${this._password}abcdefgh`;
    }

    set password(value) {  /*
        Setter for password:
        The setter is defined for password and assigns the value to this._password.
        The setter updates the private variable _password when a new password is set.
    */
        this._password = value;
    }
}

const user1 = new User("abc@email.com", "123");  /*
    Object Creation and Accessing password:
    A new User object is created with the email "abc@email.com" and the password "123".
    When user1.password is accessed, it triggers the getter method, which outputs "123abcdefgh".
*/

console.log(user1.password);  // Outputs: 123abcdefgh


//Same thing using functions
function createUser(email, password) {
    /*
        Function Definition:
        This function creates a user object with the given email and password.
        The actual password is stored in a private variable (_password) to avoid direct access.
    */
    let _password = password;

    return {
        email: email,  /*
            The email property stores the user's email.
        */

        get password() {  /*
            Getter for password:
            This getter returns the stored password (_password) with "abcdefgh" appended.
            The getter method is designed to provide controlled access to the private _password variable.
        */
            return `${_password}abcdefgh`;
        },

        set password(value) {  /*
            Setter for password:
            The setter allows updating the private _password variable.
            This ensures that password updates are controlled and that the private variable can be modified safely.
        */
            _password = value;
        }
    };
}

const user2 = createUser("abc@email.com", "123");  /*
    Object Creation:
    The createUser function is called to create a new user object with the email "abc@email.com" and password "123".
    When user1.password is accessed, it triggers the getter method, which returns "123abcdefgh".
*/

console.log(user2.password);  // Outputs: 123abcdefgh

//Same thing using object literal

const user3 = {
    email: "abc@email.com",  /*
        The email property stores the user's email.
    */

    _password: "123",  /*
        Private password:
        The actual password is stored in a private property (_password) to avoid direct access.
        The underscore convention is used to indicate that this property is intended to be private.
    */

    get password() {  /*
        Getter for password:
        This getter returns the stored password (_password) with "abcdefgh" appended.
        It provides controlled access to the private _password variable, ensuring that the original password is not exposed directly.
    */
        return `${this._password}abcdefgh`;
    },

    set password(value) {  /*
        Setter for password:
        The setter allows updating the private _password property.
        This ensures that the password can be modified while maintaining control over how it is stored and accessed.
    */
        this._password = value;
    }
};

console.log(user3.password);  /* 
    Accessing the password:
    When user1.password is accessed, it triggers the getter method, which returns "123abcdefgh".
*/


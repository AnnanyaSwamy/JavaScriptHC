function setUsername(username){
    //complex DB calls
    this.username=username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username);//call is used to hold the execution context nd this is passed to tell hi wht this to alter other than its own
    this.email=email;
    this.password=password;
}

const user=new createUser("abc", "abc@email.com", "1234");
console.log(user);


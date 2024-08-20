class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){//doesnt allow childern to inherit and to be visible with instances
        console.log("the id is 123")
    }

}

const user1=new User();
// user1.createId(); returns error

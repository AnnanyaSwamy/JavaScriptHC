class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, schoolId, Department){
        super(username);
        this.schoolId=schoolId;
        this.Department=Department;
    }
    
    addCourse(){
        return `A course was added by ${this.username}`;
    }
}

const teacher1=new Teacher("TeacheIsMyName", "123", "Electronics");
teacher1.logMe();
// instance of feature





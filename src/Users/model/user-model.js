export default class UserModel{
    constructor(id,name,email,password,type){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }


// STATIC FUNCTION FOR SIGN UP
static signUp(name,email,password,type){
const id=users.length+1;
const newUser= new UserModel(id,name,email,password,type)
users.push(newUser);
return newUser
}


// STATIC FUNCTION FOR SIGN IN
static signIn(email,password){
    const result= users.find(f=>f.email==email && f.password==password);
    return result;
}

// STATIC FUNCTION FOR ALL USERS 
static getAll(){
    return users;
}
static findByEmail = (email) => {
    return users.find(user => user.email === email);
  }

}




// USERS DATABASE ARRAY SINCE WE DONOT HAVE DATABASES
var users=[{
    "id":1,
    "name":"Admin User",
    "email":"ninja@123gmail.com",
    "password":"kkkkkk",
    "type":"admin",
},
{
    "id":2,
    "name":"vikas",
    "email":"vikas@123gmail.com",
    "password":"vvvvvv",
    "type":"user",
},
{
    "id":3,
    "name":"suop",
    "email":"suop@123gmail.com",
    "password":"ssssss",
    "type":"user",  
},
{
    "id":4,
    "name":"vikash",
    "email":"vikash@123gmail.com",
    "password":"mmmmmmm",
    "type":"user",
},
{
    "id":5,
    "name":"saikat",
    "email":"saikat@123gmail.com",
    "password":"ssssss",
    "type":"user",
}
]
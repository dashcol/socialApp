import { ApplicationError } from "../../../error-handlers/application.error.js";

export default class UserPosts{
constructor(id,title,image,desc,comments,likes,type,user){
    this.id=id;
     this.title=title;
     this.image=image;
     this.desc=desc;
     this.comments=comments;
     this.likes=likes;
     this.type=type;
     this.user=user;
}
static addPosts(newPost, userEmail) {
    const postAdd = {
        id: posts.length + 1,  
        ...newPost,            
        user: userEmail      
    };
    posts.push(postAdd);
    return postAdd;
}


static getPost(user) {
    const userPost= posts.filter(f => f.user === user); 
    if(!userPost){
        throw new ApplicationError("Post Not Found",404)
    }
    return userPost ;
   
}
static getPostById(user,postId){
const userPostId= posts.find(f=>f.user===user && f.id === parseInt(postId, 10));
if(!userPostId){
    throw new ApplicationError("Post for User Not Found",404)
}
return userPostId;
}

}

export let posts=[
    {
        "id":1,
    "title":"happy me",
    "image":'/images/happyme.jpg',
    "desc":"life smiles",
    "comments":["this is cute","wow"],
    "likes":2,
    "type":"user",
    "user":"suop@123gmail.com"
},
{
    "id":2,
    "title":"happy us",
    "image":'/images/happyus.jfif',
    "desc":"death smiles",
    "comments":["this is dark","real"],
    "likes":20,
    "type":"user",
    "user":"vikas@123gmail.com"  
},
{
    "id":3,
    "title":"sad me",
    "image":'/images/sad.jpg',
    "desc":"shit happens",
    "comments":["this is sad","yes"],
    "likes":75,
    "type":"user",
    "user":"suop@123gmail.com"
}
]
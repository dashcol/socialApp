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
    return posts.filter(f => f.user === user); 
   
}
static getPostById(user,postId){
    return posts.find(f=>f.user===user && f.id === parseInt(postId, 10))
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
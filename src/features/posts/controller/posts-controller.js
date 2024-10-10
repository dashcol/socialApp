import UserPosts from "../model/posts-model.js";

export default class PostsController{


    getPosts(req,res){
   try {   
     const email=req.user.email;
        const result= UserPosts.getPost(email); 

        if (!result || result.length === 0) {
            return res.status(404).json({ message: "No posts found for this user" });
        }
        return res.status(200).json(result);

    }

    catch(err){
         return res.status(404).json({ message: err.message });
    }
}

addPost(req,res){
    const {title,image,desc,comments,likes,type}=req.body;
    const newPost={
        title,
        image,
        desc,
        comments,
        likes,
        type,
    }
    const newData=UserPosts.addPosts(newPost,req.user.email)
    return res.status(200).json({message:"Post added sucessfully",newData})
}

getPostsById(req,res){
    try{
const email=req.user.email;
const {id}=req.params;

const result=UserPosts.getPostById(email,id);
if(!result){
    return res.status(404).json({message:"post not found"})
}
return res.status(200).json(result)
    }catch(err){
        return res.status(404).json({ message: err.message });
    }
}
}
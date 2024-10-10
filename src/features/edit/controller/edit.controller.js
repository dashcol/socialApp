import UserPosts from "../../posts/model/posts-model.js";
export default class editPosts{

     editSpecificPosts(req,res){
const email=req.user.email;
const {id}=req.params;
const { title, image, comments, likes } = req.body;

const post=UserPosts.getPostById(email,id)

if(!post){
    return res.status(404).json({message:"Post not foubn"})
}

if (title) post.title = title;
if (image) post.image = image;
if (comments) post.comments = comments;
if (likes) post.likes = likes;
return res.status(200).json({message: "Post updated successfully", post})
}


}
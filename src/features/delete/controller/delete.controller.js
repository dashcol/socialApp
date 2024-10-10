import { log } from "../../../middlewares/logger.middleware.js";
import UserPosts from "../../posts/model/posts-model.js";
import { posts } from "../../posts/model/posts-model.js";

export default class deletePosts{


    deletePosts(req,res,next){
        try{
        const email=req.user.email;
        const {id}=req.params;

        const post=UserPosts.getPostById(email,id);

        if(!post){
            res.status(404).json({message:"post not found"})
        }
        const postIndex = posts.findIndex(f => f.user === email && f.id === parseInt(id, 10));
        

        if (postIndex === -1) {
            return res.status(404).json({ message: "Post not found" });

        }
      

             posts.splice(postIndex, 1);

                 const userPosts = posts.filter(post => post.user === email);

            return res.status(200).json({ message: "Post deleted successfully",userPosts });
        

        }catch(err){
            console.log("passing error to middleware from delete-controller");
            
             next();
        }
    }
}
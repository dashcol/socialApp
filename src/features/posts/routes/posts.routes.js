import express from "express";
import PostsController from "../controller/posts-controller.js";



const postRouter=express.Router();
const postController= new PostsController();

postRouter.get('/',postController.getPosts)
postRouter.get('/:id', postController.getPostsById);
postRouter.post('/add',postController.addPost)

export default postRouter;


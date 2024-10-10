import express from "express";
import editPosts from "../controller/edit.controller.js";
import validateUpdatePost from "../../../middlewares/edit.middleware.js";



const editRouter=express.Router();
const editPost= new editPosts();

editRouter.put('/:id',validateUpdatePost,editPost.editSpecificPosts);

export default editRouter;


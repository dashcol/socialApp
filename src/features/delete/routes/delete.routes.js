import express from "express";
import deletePosts from "../controller/delete.controller.js";




const deleteRouter=express.Router();
const deletePost= new deletePosts() ;

deleteRouter.delete('/:id',deletePost.deletePosts);

export default deleteRouter;


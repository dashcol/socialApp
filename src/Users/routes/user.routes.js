import express from "express";
import userController from "../controller/user-controller.js";
import { validate } from "../../middlewares/user-middleware.js";
import { validateLogin } from "../../middlewares/user-middleware.js";


const userRouter=express.Router();
const user= new userController();


userRouter.post('/signup',validate,user.signUp)
userRouter.post('/signin',validateLogin,user.signIn);

export default userRouter;
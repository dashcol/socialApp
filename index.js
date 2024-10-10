import userRouter from "./src/Users/routes/user.routes.js";
import express from "express";
import path from 'path';
import bodyParser from 'body-parser'
import {fileURLToPath} from 'url'
import postRouter from "./src/features/posts/routes/posts.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import editRouter from "./src/features/edit/routes/edit.routes.js";
import deleteRouter from "./src/features/delete/routes/delete.routes.js";

const app=express();
app.use(bodyParser.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use(express.static(path.join(__dirname, '../public')));



app.use('/api/user',userRouter)
app.use('/api/posts',jwtAuth,postRouter)
app.use('/api/posts/edits',jwtAuth,editRouter)
app.use('/api/posts/delete',jwtAuth,deleteRouter)
export default app;
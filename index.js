import userRouter from "./src/Users/routes/user.routes.js";
import express from "express";
import path from 'path';
import bodyParser from 'body-parser'
import {fileURLToPath} from 'url'
import postRouter from "./src/features/posts/routes/posts.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import editRouter from "./src/features/edit/routes/edit.routes.js";
import deleteRouter from "./src/features/delete/routes/delete.routes.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import { log } from "./src/middlewares/logger.middleware.js";
import { ApplicationError } from "./src/error-handlers/application.error.js";
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type:'json'};


const app=express();
app.use(bodyParser.json())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.use('/api-docs',swagger.serve,swagger.setup(apiDocs))
app.use(loggerMiddleware)
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/user',userRouter)
app.use('/api/posts',jwtAuth,postRouter)
app.use('/api/posts/edits',jwtAuth,editRouter)
app.use('/api/posts/delete',jwtAuth,deleteRouter)

app.use(async(err,req,res,next)=>{
   
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message)
    }
    await log(`Error occurred: ${err.message} - URL: ${req.url} - Body: ${JSON.stringify(req.body)}`);
    res.status(500).send("something went wrong")
})



app.use((req,res)=>{
    res.status(404).send(" Not Found. Please check... localhost:3000/api-docs")
})


export default app;
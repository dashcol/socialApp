import winston from 'winston';
import fs from 'fs';


const fsPromise=fs.promises;



export async function log(logData){
    try{
logData=`\n ${new Date().toString()}-${logData}`;
await fsPromise.appendFile('logs.txt',logData)
    }catch(err){
        console.log(err);
        
    }
}

const loggerMiddleware=async(req,res,next)=>{
    if(!req.url.includes('signin'))
        {
    const logData=`${req.url}-${JSON.stringify(req.body)}`
    await log(logData);
           
}
next();
};


export default loggerMiddleware;
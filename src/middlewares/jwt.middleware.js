import jwt from 'jsonwebtoken';


const jwtAuth=(req,res,next)=>{
    const token = req.headers['authorization']; 
    if(!token){
        return res.status(400).send('Unauthorized');
    }

    
jwt.verify(token,"eDwDXWLb65OeDJNR",(err,user)=>{
    if (err){
return res.status(403).json({message:"invalid token"});
    

}
req.user=user;
next();
});
    
}

export default jwtAuth;
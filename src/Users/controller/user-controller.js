import UserModel from '../model/user-model.js';
import jwt from 'jsonwebtoken';


export default class userController{

async signUp(req,res){
  try
   { 
    const {name,email,password,type}=req.body
    const existingUser=await UserModel.findByEmail(email)

    if(existingUser){
        return res.status(409).json({ error: "User with this email already exists" });
    }
    const user=UserModel.signUp(name,email,password,type);
    res.status(201).send(user)
  
}catch(err){
    
    res.status(500).json({ message: err.message });
}

}


signIn(req,res){
    try{
    const {email,password}=req.body;
    const user=UserModel.signIn(email,password);
    if(user){
        const token=jwt.sign(
            {
               userID:user.id,
               email:user.email,
            },
            "eDwDXWLb65OeDJNR",
            {
               expiresIn:'1h',
            }
         );
           res.status(200).send({token})
    }else{
        res.status(400).send("Incorrect Credentials");
    }
}catch(err){
    res.status(500).json({ message: err.message });
}
}

}
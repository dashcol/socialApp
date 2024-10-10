import  { body, validationResult } from 'express-validator';

const validate=async(req,res,next)=>{
    const rules=
      [
        body('name').notEmpty().withMessage("Please Enter your name"),
        body('email').isEmail().withMessage("Please Enter a valid email"), 
        body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters"), 
        body('type').notEmpty().withMessage("Please provide a type")
      ];

await Promise.all(rules.map(rule=> rule.run(req)))
var result=validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({ errors: result.array() });
}
next();
}
const validateLogin=async(req,res,next)=>{
    const rules=
      [
        body('email').isEmail().withMessage("Please Enter a valid email"), 
        body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
      ];

await Promise.all(rules.map(rule=> rule.run(req)))
var result=validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({ errors: result.array() });
}
next();
}

export { validate, validateLogin }
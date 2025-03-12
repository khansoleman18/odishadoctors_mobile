
const joi = require('joi');

const userRegisterValidate = (req,res,next) =>{
        const schema = joi.object({
            user_name: joi.string().min(3).max(100).required(),
            email: joi.string().email().required(),
            mobile: joi.string(),
            password: joi.string().min(4).required()
        })
    
    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad request", error})
    }

    next();
}


const userLoginValidate = (req,res,next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).required()
    })

        const {error, value} = schema.validate(req.body);
        if(error){
            return res.status(400).json({message:"Bad request", error})
        }

        next();
}

module.exports= { userRegisterValidate, userLoginValidate}
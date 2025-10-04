const validator=require("validator");
// const { emit } = require("../models/user");
const validateSingup=(req)=>{
    const {firstName,lastName,email,passWord}=req.body;
    if(!firstName||!lastName){
        throw new Error("Name is not valid");
    }else if(!validator.isEmail(email)){
        throw new Error("Email is not valid");
    }else if(!validator.isStrongPassword(passWord)){
        throw new Error("Strong password needed");
    }
};
module.exports={
    validateSingup
}
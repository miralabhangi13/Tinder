const mongoose = require("mongoose");
const validator=require("validator");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength:3,
        required: true
    },
    lastName: {
        type: String
    },
    passWord: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Not strong password");
            }
        }
    },
    email: {
        type: String,
        lowercase:true,
        trim:true,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid email");
            }
        }
    },
    photoURL:{
        type:String,
        default:"https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Not valid link");
            }
        }
    },
    age: {
        type: Number,
        required:true,
        validate(value){
            if(value<18){
                    throw new Error("age must  be 18")
            }
        }
    },
    skills: {
        type: [String],
        validate(value){
            if(value.length>5){
                throw new Error("not allowed more than 5");
            }
        }
    },
    gender: {
        type: String,
        required:true,
        validate(value){
            if(!["male","female","other"].includes(value)){
                    throw new Error("Invalid data for gender");
                }
        }
    },
    about:{
        type:String,
        default:"Tinder member"
    }
},{
    timestamps:true
});
module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");
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
        required: true
    },
    email: {
        type: String,
        lowercase:true,
        trim:true,
        required: true,
        unique: true
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
        type: [String]
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
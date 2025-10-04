const express=require("express");
const app=express();
const {connectDB}=require("./config/database")
const User=require("./models/user");
const user = require("./models/user");
const {validateSingup}=require("./utils/validations")
const bcrypt=require("bcrypt");
app.use(express.json());
app.get("/user",async (req,res)=>{
    const userEmail=req.body.email;
    try{
        const users= await User.find({email:userEmail});
        if(users.length===0){
            res.status(404).send("user not found");
        }else{
            res.send(users);
        }
    }catch(err){
        res.status(400).send("somthing went wrong");
    }
});
app.get("/feed",async (req,res)=>{
    try{
        const users=await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("somthing went wrong");

    }
});
app.delete("/delete",async (req,res)=>{
    const userId=req.body.userId;
    try{
        const user= await User.findByIdAndDelete(userId);
        if(user){
            res.send("User delted sucssefully");
        }else{
            res.send("User id not found");
        }
    }catch(err){
        res.status(400).send("somthing went wrong");
    }
});
app.post("/signup",async (req,res)=>{
    try{
        validateSingup(req);
        const {firstName,lastName,email,gender,age,passWord}=req.body;
        const passWordHash=await bcrypt.hash(passWord,10);
        const user=new User({
            firstName,
            lastName,
            age,
            email,
            passWord:passWordHash,
            gender
        });
        await user.save();
        res.send("User Added succuesfully");
    }catch(err){
        res.status(404).send("Error:"+err.message);
    }
});
app.patch("/update/:userId",async (req,res)=>{
    const userId=req.params?.userId;
    const {updatedData}=req.body;
    try{
        const Update_Allowed=[
            "age",
            "skills",
            "gender",
            "about"
        ];
        const isAllowedUpdate=Object.keys(updatedData).every((k)=>Update_Allowed.includes(k));
        if(!isAllowedUpdate){
            res.status(400).send("not allowed to chnage")
        }
        const updatedUser=await User.findByIdAndUpdate(userId,updatedData,{
            runValidators:true
        });
        if(updatedUser){
            res.status(200).send("user updeted sucsfully");
        }else{
            res.status(404).send("user not found");
        }
    }catch(err){
        res.status(400).send("somthing went wrong"+"   "+err.message);
    }
});
connectDB()
.then(()=>{
    console.log("DataBase connected succesfully");
    app.listen(6969,()=>{
    console.log("Server is listening");
});
})
.catch(err=>{
    console.error("DataBase Not connetcted");
})
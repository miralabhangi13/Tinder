const express=require("express");
const app=express();
const {connectDB}=require("./config/database")
const User=require("./models/user");
const user = require("./models/user");
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
    const user=new User(req.body);
    try{
        await user.save();
        res.send("User Added succuesfully");
    }catch(err){
        res.status(404).send("Error saving the user"+err.message);
    }
});
app.patch("/update",async (req,res)=>{
    const {userId,updatedData}=req.body;
    try{
        const updatedUser=await User.findByIdAndUpdate(userId,updatedData);
        if(updatedUser){ 
            res.status(200).send("user updeted sucsfully");
        }else{
            res.status(404).send("user not found");
        }
    }catch(err){
        res.status(400).send("somthing went wrong");
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
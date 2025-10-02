const express=require("express");
const app=express();
const {connectDB}=require("./config/database")
const User=require("./models/user");
app.use(express.json());
app.post("/signup",async (req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
        res.send("User Added succuesfully");
    }catch(err){
        res.status(404).send("Error saving the user"+err.message);
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
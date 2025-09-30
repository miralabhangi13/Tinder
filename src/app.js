const express=require("express");
const app=express();
app.use("/test",(req,res)=>{
    res.send("Hello from server");
});
app.use("/",(req,res)=>{
    res.send("Hello");
});
app.listen(6969,()=>{
    console.log("Server is listening");
});
const express=require("express");
const app=express();
app.get("/user",(req,res)=>{
    res.send({"first name":"abhngi","last name":"miral"});
});
app.post("/user",(req,res)=>{
    res.send("data saved to data base");
});
app.delete("/user",(req,res)=>{
    res.send("data deleted succesfully");
});
app.use("/user",(req,res)=>{
    res.send("Hello from server");
});
app.listen(6969,()=>{
    console.log("Server is listening");
});
const express=require("express");
const app=express();
const{adminAuth}=require("./middlewears/auth");
// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send({"first name":"abhngi","last name":"miral"});
// });
app.use("/admin",adminAuth);
app.get("/admin/getAllData",(req,res)=>{
        res.send("All data getting!");
});
app.get("/admin/deleteData",(req,res)=>{
    res.send("data delted");
});
app.listen(6969,()=>{
    console.log("Server is listening");
});
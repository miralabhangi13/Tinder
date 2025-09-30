const express=require("express");
const app=express();
const{adminAuth}=require("./middlewears/auth");
// app.get("/user",(req,res)=>{
//     console.log(req.query);
//     res.send({"first name":"abhngi","last name":"miral"});
// });
// app.use("/admin",adminAuth);
app.get("/admin/getAllData",(req,res)=>{
        try{
            throw Error("ssgsj");
            res.send("All data getting!");
        }catch(err){
            res.send("wrong");
        }
        // throw Error("fbjws");
        // res.send("getting data!");
});
// app.use("/",(err,req,res,next)=>{
//     if(err){
//         res.send("somthing is wrong");
//     }
// });
// app.get("/admin/deleteData",(req,res)=>{
//     res.send("data delted");
// });
app.listen(6969,()=>{
    console.log("Server is listening");
});
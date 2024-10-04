import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import bookRoute from "./routes/.route.book";
// import userRoute from "./routes/routes.user";
const app=express();
app.use(core());
app.use(express());
dotenv.config();
const PORT =process.env.PORT || 4000;
const URL =process.env.MongoDBURL;
try{
    mongoose.connect(URL,{
      userNewUrlParser:true,
      useUnfiedTopology:true,  
    });
    console.log("connected to mongodb");
}catch(error){
    console.log("error:",error);
}
// app.use("/book",bookRoute);
// app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
});
const dotenv=require('dotenv').config();
const mongoose=require("./controller/mongoose")
const path=require('path');
const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static('uploads'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use(express.static(path.join(__dirname, 'public')))
const upload_controller=require("./controller/upload");
const ImageModel=require("./model/Image")
app.post("/upload",upload_controller.upload);
app.get("/",async (req,res) =>
{
    try{
        const temp=await ImageModel.find().sort({createdAt:-1}).select("url -_id")
        return res.render("home.ejs",{url:temp})
    }catch(err)
    {
        return res.status(500).json("Error rendering page")
    }
    
})
app.use((req,res,next)=>{
    return res.json("Error page");
})
app.listen(5000,()=>
{
    console.log("connected successfully")
})
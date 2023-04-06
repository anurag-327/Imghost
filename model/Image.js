const mongoose=require("mongoose");

const ImageSchema=new mongoose.Schema({
    image:{
        data:Buffer,
        contentType:String
    },
    url:{
        type:String
    }
},
{
    timestamps:true
})

module.exports=ImageModel=mongoose.model('image',ImageSchema);
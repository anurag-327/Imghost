const ImageModel=require("../model/Image")
const multer=require("multer");
const Storage=multer.diskStorage(
    {
        destination:function (req, file, cb) {
            cb(null, "./uploads");
        },
        filename:(req,file,cb) =>
        {
            cb(null,Date.now()+file.originalname);
        },
    }
)
const upload=multer({
    storage:Storage
}).single('Image')

module.exports.upload=(req,res)=>
{
    try{
        upload(req,res,(err) =>{
            if(err)
            {
                console.log(err.message)
            }
            else
            {
                try{
                    const URL = req.protocol + '://' + req.get("host")+'/uploads/' + req.file.filename;
                    const newImage=new ImageModel({
                       image:{
                           data:req.file.filename,
                           contentType:'image/png/jpg/jpeg'
                       },
                       url: URL
                    })
                    newImage.save()
                    .then(()=> res.redirect("/"))
                    .catch(err => res.status(500).json('error uploading image'))
                }catch(err)
                {
                    return res.status(500).json(err.message)
                }
                
            }
        })   
    }
    catch(err)
    {
          return res.status(500).json(err.message)
    } 
}
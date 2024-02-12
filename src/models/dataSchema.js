const joi = require('joi');
const multer  = require('multer');
const path= require('path')

const storage= multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'uploads')
    },

    filename:(req, file, cb)=>{
        console.log("file:" + file);
        cb(null, Date.now() + path.extname(file.originalname))
        //console.log("uploadid:" + req.body.file);
    },
    limits:{
        fileSize: 5*1024*1024,
    },

    fileFilter: (req,res,cb)=>{
        if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            cb(null, true)
            console.log("req.file:" + req.file);
        }else{
            cb(new Error('unaccepted file type'));
        }
    }
})
const upload = multer({ storage })



const dataSchema= joi.object(
    {
        body:joi.any(),
        userId: joi.string()
        // title: joi.any(),
        // url:joi.when('body', {
        //     is: joi.string(), 
        //     then: joi.any(),
        //     otherwise: joi.string().required()
        //     }),
        // thumbnailUrl:joi.string().uri(),
    },
)


module.exports= {
    dataSchema, upload
}
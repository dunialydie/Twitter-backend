const joi = require('joi');
const multer  = require('multer');
const path= require('path')


const storage= multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'uploads')
    },

    filename:(req, file, cb)=>{
        console.log("file:" + file);
        cb(null, Date.now() + path.extname(file.originalname))
        console.log("uploadid:" + req.body.file);
    }
})
const upload = multer({ dest: storage })

console.log("upload:" + upload.filename);


const dataSchema= joi.object(
    {
        body:joi.any(),
        title: joi.any(),
        url:joi.when('body', {
            is: joi.string(), 
            then: joi.any(),
            otherwise: joi.string().required()
            }),
        thumbnailUrl:joi.string().uri(),
    },
)


module.exports= {
    dataSchema, upload
}
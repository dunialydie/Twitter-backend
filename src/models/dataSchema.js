const joi = require('joi');
const multer  = require('multer')

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
    dataSchema
}
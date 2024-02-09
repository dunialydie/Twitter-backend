const uuid  = require('uuid');
const uniqueid = uuid.v4();
const { dataPosts } = require('../models/dataPosts.js');
const { dataSchema } = require('../models/dataSchema.js');

console.log("========================");
console.log(uniqueid);
console.log("========================");

/**controlleur get posts */
const getData= (req,res)=>{
    res.status(200);
    res.json({dataPosts});
}
/**Validation des champs */
const validation= (req, res,next)=>{
    // const{dataSchema} = req.body
    const {body, url, thumbnailUrl,title}= req.body
    const {error}= dataSchema.validate(req.body)
    if(error){
        return res.status(401).send(error.details)
    }  
    // console.log(result);
//    console.log(req.body);
//    console.log(dataSchema);
    next()

}


/**controlleur post posts */

const postData= (req, res)=>{
    req.body.id = uniqueid;
    console.log("id:" + req.body.id);
    let data= req.body
    dataPosts.push(data)
    getData(req,res)

}
module.exports={
    getData, 
    postData, 
    validation,
    // validationString,
}


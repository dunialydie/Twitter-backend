const uuid  = require('uuid');
const { dataPosts } = require('../models/dataPosts.js');
const { dataSchema } = require('../models/dataSchema.js');

/**controlleur get posts */
const getData= (req,res)=>{
    res.status(200);
    res.json({dataPosts});
}
/**Validation des champs */
const validation= (req, res,next)=>{
    const {body, url, thumbnailUrl,title}= req.body
    const {error}= dataSchema.validate(req.body)
    if(error){
        return res.status(401).send(error.details)
    }  
    next()
}

/**controlleur post posts */
const postData= (req, res)=>{
    let uniqueid = uuid.v4();
    req.body.id = uniqueid;
    console.log("========================");
    console.log(uniqueid);
    console.log("========================");

    console.log("id:" + req.body.id);
    let data= req.body
    dataPosts.push(data)
    getData(req,res)

}
module.exports={
    getData, 
    postData, 
    validation,
}


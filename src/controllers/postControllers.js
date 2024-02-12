const uuid  = require('uuid');
const { dataPosts } = require('../models/dataPosts.js');
const { dataSchema } = require('../models/dataSchema.js');
const { object } = require('joi');

/**controlleur get posts */
const getData= (req,res)=>{
    res.status(200);
    res.json(dataPosts);
}
/**Validation des champs */
const validation= (req, res,next)=>{
    const {body, userId}= req.body
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
    data.url = req.file?.path

    if(req.body.body || (req?.file && req.file?.path)) {
        dataPosts.push(data)
        res.status(201).json(data);
    }
    else{
        return res.status(422).send('')
    }
}

/**Contoller delete post */

const deletePost= (req, res)=>{
    const id= req.params.id -1;
    dataPosts.splice(id,1)
    res.status(200).send('post deleted')
}
/**controller modifier post */
const modifierPost= (req, res)=>{
    const data= req.body;
    const id= req.params.id -1;
    dataPosts[id] = Object.assign(dataPosts[id], data);
    res.json({
        data: dataPosts[id]
    })
}
module.exports={
    getData, 
    postData, 
    validation,
    modifierPost,
    deletePost,
}


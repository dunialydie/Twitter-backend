const { dataPosts } = require('../models/dataPosts.js');


const getData= (req,res)=>{
    res.status(200);
    res.json({dataPosts});
}




const postData= (req, res)=>{
    let data= req.body
    dataPosts.push(data)
    getData(req,res)

}
module.exports={
    getData, postData
}


const uuid  = require('uuid');
const { dataUsers } = require('../models/dataUsers');
const { dataPosts } = require('../models/dataPosts');

const getUsers= (req,res)=>{
    res.status(200);
    res.json(dataUsers);
}

const postUser= (req, res)=>{
    let uniqueid = uuid.v4();
    req.body.userId = uniqueid;
    req.body.body = req.body.body

    console.log('req.body.body:' + req.body.body);

    let data= req.body
    console.log(req.body);
 
    // dataPosts.push(data)
    console.log('dataPosts:' + dataPosts.body);
    dataUsers.push(data)

    res.status(201).json(data);
    
}


module.exports= {
    getUsers,
    postUser,
}
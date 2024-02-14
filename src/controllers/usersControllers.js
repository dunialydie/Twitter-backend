const uuid  = require('uuid');
const { dataUsers } = require('../models/dataUsers');

const getUsers= (req,res)=>{
    res.status(200);
    res.json(dataUsers);
}

const postUser= (req, res)=>{
    let uniqueid = uuid.v4();
    req.body.userId = uniqueid;

    let data= req.body
    console.log(req.body);
 
    dataUsers.push(data)
    res.status(201).json(data);
    
}


module.exports= {
    getUsers,
    postUser,
}
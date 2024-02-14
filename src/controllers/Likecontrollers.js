const { dataPosts } = require("../models/dataPosts");
const { dataUsers } = require("../models/dataUsers");
const { likestab } = require("../models/likes");

const getlikes= (req,res)=>{
    res.status(200);
    res.json(likestab);
}

const LikeData= (req, res)=>{
    // const {userId, postID} = req.body;
    // req.body.userId='1';
    // req.body.postID='2'
    
    // let userId= dataUsers.dataUsers
    // req.body.userId=dataUsers.userId;
    // req.body.postID= dataPosts.id;
    // let data= req.body
    // console.log(data);

    const verifyUser= dataUsers.find(user=> user.userId === userId)
    const verifyPost= dataPosts.find(post=> post.id === postID)

    // if(!verifyPost || !verifyUser){
    //     return res.status(400).send('incrémenter')
    // }
    likestab.push(data)
    console.log(likestab);
    console.log(likestab);
    console.log("LikeData:" + LikeData);

    console.log(data);

    res.send(data)
    
}

module.exports={getlikes, LikeData}
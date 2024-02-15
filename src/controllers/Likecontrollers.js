const { dataPosts } = require("../models/dataPosts");
const { dataUsers } = require("../models/dataUsers");
const { likestab } = require("../models/likes");

const getlikes= (req,res)=>{
    res.status(200);
    res.json(likestab);
}

const LikeData= (req, res)=>{

    const {userId, postID} = req.body;
    // req.body.userId=dataUsers.length -1;
    // req.body.postID= dataPosts.length - 1;
   
    console.log('dataPosts:' + dataPosts);
    // const verifyUser= dataUsers.find(user=> user.userId === userId)
    // const verifyPost= dataPosts.find(post=> post.id === postID)

    if(likestab.length>0){
        dataPosts.forEach((elem)=>{
            userId=elem.userId;
            postID= elem.id

        })
        likestab.push(req.body)

        // dataPosts.liked -= 1
        // console.log(dataPosts.liked);
        // res.send(req.body)
        // likestab.push(req.body)
        console.log("likestab:" + likestab);
        res.send(likestab)


    }

    // else if(!verifyPost && !verifyUser){
    //     //aller dans le tableau des poste et incrémenter
    //     dataPosts.liked += 1

    //     return res.status(400).send('incrémenter')
    // }

}

module.exports={ LikeData}
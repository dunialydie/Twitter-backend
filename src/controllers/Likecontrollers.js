// const { dataPosts } = require("../models/dataPosts");
// const { dataUsers } = require("../models/dataUsers");
// const { likestab } = require("../models/likes");

// const getlikes= (req,res)=>{
//     res.status(200);
//     res.json(likestab);
// }

// const LikeData= (req, res)=>{

//     const {userId, postID} = req.body;
//     if(likestab.length>0){
//         dataPosts.forEach((elem)=>{
//             userId=elem.userId;
//             postID= elem.id

//         })
//         likestab.push(req.body)
//         console.log("likestab:" + likestab);
//         res.send(likestab)


//     }

// }

// module.exports={ LikeData}
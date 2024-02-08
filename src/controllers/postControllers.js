const { dataPosts } = require('../models/dataPosts.js');
const joi=require('joi');
const schema=joi.object({
    userId:dataPosts.id
})


/**controlleur get posts */
const getData= (req,res)=>{
    res.status(200);
    res.json({dataPosts});
}
/**Validation des champs */
const validationid= (req, res,next)=>{
         if(req.body.title===""){
            res.status(401).send('Veuillez remplir ce champ') 
        }else if(req.body.url===""){
            if(req.body.body==""){
                res.status(401).send('Veuillez remplir ce champ') 
            }
            res.status(200);
        }
    next()

}
// const validationString=(req, res,next)=>{
//     if(req.body.title==="" || req.body.body===""){
//         res.status(401).send('Veuillez remplir ce champ') 
//     }
//     // postData(req, res)
//     next()
// //     check(req.title).trim().not().isEmpty().withMessage('veuillez renseigner ce champs'),
// //     check(req.body).trim().not().isEmpty().withMessage('veuillez renseigner ce champs')
// }
    
    

// const result= (req, res, next)=>{
//     const result= validationResult(req);
//     const hasError=!result.isEmpty()

//     if(hasError){
//         const error=result.array()[0].msg
//         res.status(401).json({success: false, message: error})
//         // res.status(401)
//     }
//     next()
// }

/**controlleur post posts */

const postData= (req, res)=>{
    id=dataPosts.length + 1;
    console.log(id);
    req.body.id=id;
    let data= req.body
    dataPosts.push(data)
    getData(req,res)

}
module.exports={
    getData, 
    postData, 
    validationid,
    // validationString,
}


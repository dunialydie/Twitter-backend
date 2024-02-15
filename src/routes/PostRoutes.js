const express = require('express');
const { getData, postData, validation, modifierPost, deletePost} = require('../controllers/postControllers.js');
const { upload } = require('../models/dataSchema.js');
const routerPost = express.Router();

  routerPost.get('',getData);

  routerPost.post('',validation,upload.single("image"),postData,(req,res)=>{
    if(err){
      res.status(401).send('not good')
    }
    res.status(200)
    req.json({status: 'ok', data: req.file})

  });

  routerPost.delete('/:id', deletePost);

  routerPost.put('/:id', modifierPost);


  module.exports = routerPost;
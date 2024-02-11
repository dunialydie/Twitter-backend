const express = require('express');
const { getData, postData, validation, modifierPost} = require('../controllers/postControllers.js');
const { upload } = require('../models/dataSchema.js');
const routerPost = express.Router();

  routerPost.get('',getData);

  routerPost.post('',validation,upload.single(""),postData);

  routerPost.delete('/:id', function(req, res) {
    res.send('poste page');
  });

  routerPost.put('/:id', modifierPost);


  module.exports = routerPost;
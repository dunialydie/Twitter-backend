const express = require('express');
const { getData, postData } = require('../controllers/postControllers.js');
const routerPost = express.Router();

routerPost.get('',getData);

  routerPost.post('',postData);

  routerPost.delete('/:id', function(req, res) {
    res.send('post page');
  });

  routerPost.put('/:id', function(req, res) {
    res.send('posts home ');
  });


  module.exports = routerPost;
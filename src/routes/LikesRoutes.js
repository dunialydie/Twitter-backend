const express = require('express');
const { getlikes, LikeData } = require('../controllers/Likecontrollers.js');
const routerLikes = express.Router();

routerLikes.get('',getlikes);

  routerLikes.get('/:id',LikeData);

  routerLikes.post('');

  routerLikes.delete('/:id',(req,res)=>{
    res.send('likes deleted')
  } );

  routerLikes.put('/:id', (req,res)=>{
    res.send('likes putted')
  });


  module.exports = routerLikes;
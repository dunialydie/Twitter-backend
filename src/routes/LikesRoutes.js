const express = require('express');
const { getlikes, LikeData } = require('../controllers/Likecontrollers.js');
const { postData, likePost} = require('../controllers/postControllers.js');
const routerLikes = express.Router();

routerLikes.get('', postData);
routerLikes.post('', likePost);

// routerLikes.get('/:id');

//   routerLikes.post('');

//   routerLikes.delete('/:id',(req,res)=>{
//     res.send('likes deleted')
//   } );

//   routerLikes.put('/:id', (req,res)=>{
//     res.send('likes putted')
//   });


  module.exports = routerLikes;
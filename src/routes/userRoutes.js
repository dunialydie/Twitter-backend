const express = require('express');
const { getUsers, postUser } = require('../controllers/usersControllers');
const routerUsers = express.Router();

routerUsers.get('', getUsers);

  routerUsers.get('/:id', function(req, res) {
    res.send('user '+req.params.id);
  });
  routerUsers.post('', function(req, res) {
    res.send('post');
  });

  routerUsers.post('/id', function(req, res) {
    res.send('post '+req.params.id);
  });

  routerUsers.delete('/:id', function(req, res) {
    res.send('userdelete home page');
  });

  routerUsers.put('/:id', function(req, res) {
    res.send('userput home page');
  });


  module.exports = routerUsers;
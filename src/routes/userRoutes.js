const express = require('express');
const routerUsers = express.Router();

routerUsers.get('', function(req, res) {
    res.send('users');
  });

  routerUsers.get('/:id', function(req, res) {
    res.send('user '+req.params.id);
  });


  routerUsers.post('', function(req, res) {
    res.send('user home page');
  });

  routerUsers.delete('/:id', function(req, res) {
    res.send('userdelete home page');
  });

  routerUsers.put('/:id', function(req, res) {
    res.send('userput home page');
  });


  module.exports = routerUsers;
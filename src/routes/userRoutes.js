const express = require('express');
const { getUsers, postUser } = require('../controllers/usersControllers');
const { userauth, login } = require('../controllers/authController');
const routerUsers = express.Router();

routerUsers.get('', getUsers);

  routerUsers.get('/:id', function(req, res) {
    res.send('user '+req.params.id);
  });
  routerUsers.post('', postUser);

  routerUsers.post('/id', function(req, res) {
    res.send('post '+req.params.id);
  });


  routerUsers.delete('/:id', function(req, res) {
    res.send('userdelete home page');
  });

  routerUsers.put('/:id', function(req, res) {
    res.send('userput home page');
  });
//route de connexion des utilisateurs
  routerUsers.post('/login', async (req,res)=>{
    try{
        const user=await login(req.body.email,req.body.password);
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({error: "pas bon"});
    }
  });

  module.exports = routerUsers;
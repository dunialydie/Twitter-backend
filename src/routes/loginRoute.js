const express = require('express');
const router = express.Router();
const MyPassport = require('passport');
const bcrypt= require ('bcrypt')
const jwt=require('jsonwebtoken');
const { login } = require('../controllers/authController');


//la route pour la connexion

// router.post('/login', async (req,res)=>{
//     try{
//         const user=await login(req.body.email,req.body.password);
//         res.status(200).json(user);
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
// });

// router.post('/loginuser', async (req,res)=>{
//     const {email, password} = req.body;
//     try{
//         const user = await prisma.user.findUnique({
//             where: {email}
//         });
//         if(!user){
//          return res.status(404).send('utilisateur existe pas')

//         }
//         const isMatch= await bcrypt.compare(password,user.password);

//         if(!isMatch){
//             return res.status(400).send('mot de passe invalide');
//         }

//         const payload = {id: user.id, email:user.email};
//         const token =jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});
//         res.status(200).json({token: token});
//     }catch(error){
//         res.status(500).send(error.message)
//     }
//     })
  





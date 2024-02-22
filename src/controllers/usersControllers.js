const uuid  = require('uuid');
const{PrismaClient} = require('@prisma/client');
const prisma=new PrismaClient();
const bcrypt=require('bcrypt')
// const Users= require('prisma/migrations/20240216142917_donnee/migration.sql')
const { dataUsers } = require('../models/dataUsers');
// const { dataPosts } = require('../models/dataPosts');
const { createUser } = require('./authController');

const getUsers= (req,res)=>{
    res.status(200);
    res.json(dataUsers);
}

const postUser= async (req, res)=>{
    const {password}=req.body
    req.body.password= await bcrypt.hash(password,10)
    let data= req.body;
    createUser(data);

    res.status(201).json(data);
    
}


module.exports= {
    getUsers,
    postUser,
}
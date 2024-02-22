require('dotenv').config();
const express = require("express");
const{PrismaClient} = require('@prisma/client');
const prisma=new PrismaClient();
const passport = require('passport');
const users= require("./src/routes/userRoutes.js");
const posts = require("./src/routes/PostRoutes.js");
const Likes = require("./src/routes/LikesRoutes.js");

const app = express();
const port = 3000;

app.use(express.json())

app.use('/users',users);
app.use('/posts', posts);
app.use('/likes', Likes);

// app.use(passport.initialize());
// require('src/controllers/authController.js')(passport);

// const authRoutes= require('src/routes/loginRoute.js');
// app.use('/auth', authRoutes);




app.get('/protected', passport.authenticate('jwt',{session: false}), (req, res)=>{
  res.send('ressources protégées')
})

app.listen(port, () => {
  console.log("le serveur a démaré sur le port " + port);
});

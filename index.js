const express = require("express");
const session = require('express-session');
const passport = require('passport');
const users= require("./src/routes/userRoutes.js");
const posts = require("./src/routes/PostRoutes.js");
const Likes = require("./src/routes/LikesRoutes.js");
const initializePassport = require('./passport-config');
const { dataUsers } = require("./src/models/dataUsers.js");
initializePassport(
  passport,
  email => dataUsers.find(user => user.email === email),
  id => dataUsers.find(user => user.id === id)
);

const app = express();
const port = 3000;

app.use(express.json())

app.use('/users',users);
app.use('/posts', posts);
app.use('/likes', Likes);


app.listen(port, () => {
  console.log("le serveur a démaré sur le port " + port);
});

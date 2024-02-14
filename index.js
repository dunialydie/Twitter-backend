const express = require("express");
const users= require("./src/routes/userRoutes.js");
const posts = require("./src/routes/PostRoutes.js");
const Likes = require("./src/routes/LikesRoutes.js");


const app = express();
const port = 3000;

app.use(express.json())

app.use('/users',users);
app.use('/posts', posts);
app.use('/likes', Likes);


app.listen(port, () => {
  console.log("le serveur a démaré sur le port " + port);
});

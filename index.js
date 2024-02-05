const express = require("express");
const users= require("./src/routes/userRoutes.js");
const posts = require("./src/routes/PostRoutes.js")

const app = express();
const port = 3000;



// app.set('view engine','ejs')
// app.set('views')
app.use(express.json())

app.use('/users',users);
app.use('/posts', posts)

// app.get("/", (req,res)=>{
//   // res.status(500).send("page not found")
//   res.status(200).json({
//       id: 4,
//       name:"dunia",
//       age: 30
//   })


// })

app.listen(port, () => {
  console.log("le serveur a démaré sur le port " + port);
});

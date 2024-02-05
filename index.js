const express = require("express");
const app = express();
const port = 3000;



// app.set('view engine','ejs')
// app.set('views')
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log("le serveur a démaré sur le port " + port);
});

//jshint esversion:6
const express = require("express");
const app = express();
//para carregar o css no node.js(servidor-backend)
app.use('/css',express.static(__dirname +'/css'));
//para o node.js saber que tem de ter em consideração a pasta images para usar no frontend.
app.use('/images',express.static(__dirname +'/images'));

app.get("/" , function(req , res){

  res.sendFile(__dirname + "/index.html");

});


//process.env.PORT ---serve para o heroku(servidor que hospeda sites free)crie a sua propria porta. colocamos ||3000 (em que || = or) para podermos testar o site localmente tambem
app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
